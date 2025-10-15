#!/usr/bin/env python
import os
import base64

from flask import (
    Flask,
    render_template,
    request,
    jsonify,
    send_from_directory
)

import requests
from bs4 import BeautifulSoup

UPLOAD_FOLDER = "uploads"

app = Flask(__name__, template_folder=os.path.abspath("pages"))
app.config["UPLOAD_FOLDER"] = UPLOAD_FOLDER

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

    web = request.json.get("web")
    kind = request.json.get("kind")
    time = request.json.get("time")
    if kind is None:
        return "0"
    kind = int(kind)

    content = None
    try:
        res = requests.get(request.json.get("web"))

        if res.status_code != 200:
            return "1"

        if int(kind/10) == 3:
            content = res.content
        else:
            content = res.text

        if content is None:
            return "2"
    except Exception as e:
        print(f"EXCEPTION: {e}")
        return "3"

    response = {}
    if int(kind / 10) == 3:
        filename = f"{time}_{web.replace('://', '_').replace('/', '_')}"
        with open(f"{UPLOAD_FOLDER}/{filename}", "wb") as f:
            f.write(content)
        response["content"] = filename
    elif kind == 10:
        response["content"] = content
    else:
        soup = BeautifulSoup(content, "html.parser")
        response["content"] = str(soup.head).strip() + "\n" + str(soup.body).strip()

    return jsonify(response)

@app.route("/archive/<name>")
def get_archive_file(name):
    return send_from_directory(app.config["UPLOAD_FOLDER"], name)

if __name__ == "__main__":
    app.run()
