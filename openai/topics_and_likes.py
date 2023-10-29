import pandas as pd

from constants import topics
# import chatgpt
from nltk.sentiment.vader import SentimentIntensityAnalyzer

orig_data = pd.read_csv('datasets/realdonaldtrump.csv')
topics = pd.read_csv('datasets/tweets.csv')['Topic']
full = pd.read_csv('datasets/scores_trump.csv')


# print(merged)

# clipped = cleaned_data[['id', 'retweets', 'favorites', 'sentiment', 'scores']]

#topic matching
tweets = orig_data['content']

topic_list = {"Topic "+ str(j): list(0 for i in range(len(tweets))) for j in range(0, 31)}

for i in range(0, 31):
    topic_list["Topic "+ str(topics[i])][i] = 1


for topic in topic_list:
    full[topic] = topic_list[topic]

# top_df = pd.DataFrame()

csv_path = 'datasets/scores_trump.csv'

# df = pd.DataFrame(sents)

full.to_csv(csv_path, index = False)

