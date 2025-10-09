#!/usr/bin/env python
import os
from flask import Flask, render_template, request, jsonify

import requests
from bs4 import BeautifulSoup

app = Flask(__name__, template_folder=os.path.abspath("pages"))

def is_script(tag):
    return tag.get("src") is not None

def is_style(tag):
    is_it = False

    if tag.get("rel"):
        is_it = is_it or tag["rel"] == "stylesheet"

    if tag.get("type"):
        is_it = is_it or tag["type"] == "text/css"

    is_it = is_it and tag.get("href") is not None
    return is_it

@app.route("/", methods=["GET"])
def home_page():
    return render_template("home.html")

@app.route("/archive", methods=["GET", "POST"])
def archive_page():
    if request.method == "GET":
        return render_template("archive.html")

    res = requests.get(request.json.get("web"))
    if res.status_code != 200:
        return "1"

    content = res.text
    if content is None:
        return "2"

    soup = BeautifulSoup(content, "html.parser")

    # Filter SCRIPT with srcs
    script_urls = list(filter(is_script, soup.head.find_all('script')))
    style_urls = list(filter(is_style, soup.head.find_all('link')))

    script_urls = [ tag["src"] for tag in scripts ]
    style_urls = [ tag["href"] for tag in styles ]

    return f"{styles}\n{scripts}"

if __name__ == "__main__":
    app.run()
