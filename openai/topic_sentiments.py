import pandas as pd

from constants import topics
import chatgpt
from nltk.sentiment.vader import SentimentIntensityAnalyzer

data = pd.read_csv('datasets/cleaned_data.csv')

#topic sentiment scores
analyzer = SentimentIntensityAnalyzer()

topic_sents = {}
for topic in topics:
    score = analyzer.polarity_scores(topic)
    topic_sents[topic] = score

sents = {
    'topic': topic_sents.keys(),
    'score': topic_sents.values()
}

csv_path = 'datasets/topic_sentiment_scores.csv'

df = pd.DataFrame(sents)

df.to_csv(csv_path, index = False)


