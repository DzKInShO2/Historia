#!/usr/bin/env python
import os
import base64

from flask import Flask, render_template, request, jsonify

import requests
from bs4 import BeautifulSoup

app = Flask(__name__, template_folder=os.path.abspath("pages"))

def is_script(tag):
    return tag.get("src") is not None

def is_style(tag):
    is_it = False

    if tag.get("rel"):
        is_it = is_it or"stylesheet" in tag["rel"]

    if tag.get("type"):
        is_it = is_it and "text/css" in tag["type"]

    is_it = is_it and tag.get("href") is not None
    return is_it

def get_external_contents(web, urls):
    contents = {}
    for url in urls:
        try:
            true_url = url
            if "https" not in true_url or "http" not in true_url or "ftp" not in true_url:
                if web[-1] == "/":
                    true_url = f"{web}{url}"
                else:
                    true_url = f"{web}/{url}"

            res = requests.get(true_url)
            if res.status_code != 200:
                continue
            if res.text is None:
                continue

            content = base64.b64encode(res.content)
            content = content.decode("utf-8").replace('\n', '').replace('\r', '')
            contents[true_url] = content
        except Exception as e:
            continue

    return contents


def get_external_texts(web, urls):
    contents = {}
    for url in urls:
        try:
            true_url = url
            if "https" not in true_url or "http" not in true_url or "ftp" not in true_url:
                if web[-1] == "/":
                    true_url = f"{web}{url}"
                else:
                    true_url = f"{web}/{url}"

            res = requests.get(true_url)
            if res.status_code != 200:
                continue
            if res.text is None:
                continue

            contents[true_url] = res.text
        except Exception as e:
            continue

    return contents

@app.route("/", methods=["GET"])
def home_page():
    return render_template("home.html")

@app.route("/archive", methods=["GET", "POST"])
def archive_page():
    if request.method == "GET":
        return render_template("archive.html")

    content = None
    try:
        res = requests.get(request.json.get("web"))

        if res.status_code != 200:
            return "1"

        content = res.text
        if content is None:
            return "2"
    except Exception as e:
        print(f"EXCEPTION: {e}")
        return "3"

    soup = BeautifulSoup(content, "html.parser")

    # Filter SCRIPT with srcs

    # Head external resources
    script_urls = list(filter(is_script, soup.head.find_all('script')))
    style_urls  = list(filter(is_style, soup.head.find_all('link')))

    # Body external resources
    script_urls = [*script_urls, *list(filter(is_script, soup.body.find_all('script')))]
    style_urls  = [*style_urls, *list(filter(is_style, soup.body.find_all('style')))]
    img_urls    = soup.body.find_all('img')

    script_urls = [ tag["src"] for tag in script_urls ]
    style_urls  = [ tag["href"] for tag in style_urls ]
    img_urls    = [ tag["src"] for tag in img_urls ]

    web_url = request.json.get("web")
    response = {
        "head": str(soup.head).replace("<head>", "").replace("</head>", "").strip(),
        "body": str(soup.body).replace("<body>", "").replace("</body>", "").strip(),
        "scripts": get_external_texts(web_url, script_urls),
        "styles": get_external_texts(web_url, style_urls),
        "images": get_external_contents(web_url, img_urls)
    }

    return jsonify(response)

if __name__ == "__main__":
    app.run()
