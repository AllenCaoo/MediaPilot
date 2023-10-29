import sys
from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
import pandas as pd
import numpy as np
import pickle
from nltk.sentiment.vader import SentimentIntensityAnalyzer
import csv

DB_PATH = 'db/saves.csv'

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

@app.route("/predictLikes", methods=['POST'])
def predictLikes():
    """
    request: {
        body: {
            "content":...
        }
    }
    """
    req = request.get_json()
    tweet = req["content"]

    data_matrix = None
    with open("../vectorizer.pkl", "rb") as m:
        VECTORIZER = pickle.load(m)
        data_matrix = VECTORIZER.transform(pd.Series([tweet]))

    score = None
    with open("../tm.pkl", "rb") as m:
        TOPIC_MODEL = pickle.load(m)
        analyzer = SentimentIntensityAnalyzer()
        score = analyzer.polarity_scores(tweet)['compound']
        topOfTweet = TOPIC_MODEL.transform(data_matrix)
        topOfTweet = topOfTweet.argmax(axis=1)[0]

    topics = {}
    topics["scores"] = score
    for i in range(31):
        if i == topOfTweet:
            topics["Topic " + str(i)] = 1
        else:
            topics["Topic " + str(i)] = 0 

    res = None
    with open("../predictor.pkl", "rb") as m:
        PRED_MODEL = pickle.load(m)
        res = PRED_MODEL.predict(pd.DataFrame([topics]))[0] * 82633764

    return {"score": res, "sentimental": score}
    

@app.route("/getPastFavs", methods=['GET'])
def getPastFavs():
    """
    request: {
        body: {
            "likes": [likes1, likes2,...]
            "timestamp":
        }
    }
    """
    df = pd.read_csv('../datasets/realdonaldtrump.csv')
    response = {
        "favs": list(df["favorites"].tail(2)), 
        "timestaps": list(df["date"].tail(2))
    }
    

    return response

@app.route("/saveResults", methods=['POST'])
def saveResult():
    """
    request: {
        body: {
            
        }
    }
    """
    req = request.get_json()
        # Open the CSV file for appending
    with open(DB_PATH, 'a', newline='') as file:
        csv_writer = csv.writer(file)
        
        # Prepare the data as a list of values
        data_to_append = [req["timestamp"], req["date"], req["tweet"], req["score"]]

        # Append the data to the CSV file
        csv_writer.writerow(data_to_append)

    return {}


@app.route("/fetchRecentSaves", methods=['GET'])
def fetchRecentSaves():

    df = pd.read_csv(DB_PATH)
    df['timestamp'] = df['timestamp'].astype(int)
    df = df.sort_values(by='timestamp', ascending=False)
    df = df.head(15)
    listRows = df.values.tolist()

    print(listRows)

    return {
        "length": len(listRows),
        "rows": listRows
    }




if __name__ == "__main__":
    app.run(debug=True)