import sys
from flask import Flask, request, jsonify
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

@app.route("/testget", methods=['GET'])
def test():
    return {"test": ["Test1", "Test2","Test3"]}


@app.route("/echo", methods=['POST'])
def echo():
    req = request.get_json()
    response = {
        "message": "here is your request repeated",
        "yourRequest": req
    }
    return response

if __name__ == "__main__":
    app.run(debug=True)