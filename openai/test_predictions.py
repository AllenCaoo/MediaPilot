import pickle
import pandas as pd
import numpy as np

from constants import topics
from nltk.sentiment.vader import SentimentIntensityAnalyzer
from sklearn.feature_extraction.text import CountVectorizer


def processTweet(tweet):
    data_matrix = None
    with open("vectorizer.pkl", "rb") as m:
        VECTORIZER = pickle.load(m)
        data_matrix = VECTORIZER.transform(pd.Series([tweet]))

    score = None
    with open("tm.pkl", "rb") as m:
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
    print(topics)

    res = None
    with open("predictor.pkl", "rb") as m:
        PRED_MODEL = pickle.load(m)
        res = PRED_MODEL.predict(pd.DataFrame([topics]))
    print("--------------------------------------------------------------")
    print(res)
    print("--------------------------------------------------------------")
    return res
        
def test():
    # with open("predictor.pkl") as PRED_MODEL:
    while True:
        inp = input()
        processTweet(inp)

        
test()

        