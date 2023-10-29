import pandas as pd

from constants import topics
import chatgpt
from nltk.sentiment.vader import SentimentIntensityAnalyzer

cleaned_data = pd.read_csv('datasets/cleaned_data.csv')
orig_data = pd.read_csv('datasets/realdonaldtrump.csv')

clipped = cleaned_data[['id', 'retweets', 'favorites', 'sentiment', 'scores']]

#topic matching
tweets = orig_data['content']

topic_list = {top: list(0 for i in range(len(tweets))) for top in topics}

for i in range(len(tweets)):
    topics = chatgpt.getTopicsFrom(tweets[i])
    for top in topics:
        topic_list[top][i] = 1

top_df = pd.DataFrame(topic_list)

for topic in topic_list:
    clipped[topic] = topic_list[topic]

print(top_df)

