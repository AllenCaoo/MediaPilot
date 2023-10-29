import nltk
from nltk.sentiment.vader import SentimentIntensityAnalyzer
import pandas as pd

stopwords = nltk.corpus.stopwords.words("english")

nltk.download('vader_lexicon')

analyzer = SentimentIntensityAnalyzer()

def analyze_sentiment(tweet):
    sentiment = analyzer.polarity_scores(tweet)
    compound_score = sentiment['compound']
    if compound_score >= 0.05:
        return "Positive"
    elif compound_score <= -0.05:
        return "Negative"
    else:
        return "Neutral"

dtrump = pd.read_csv('datasets/realdonaldtrump.csv')

tweets_list = dtrump['content'].tolist()
# print(type(tweets))

sents = []
for tweet in tweets_list:
    sentiment = analyzer.polarity_scores(tweet)['compound']
    sents.append(sentiment)
    # print(tweet, sentiment)

tweets = dtrump[['date', 'content', 'favorites']]
tweets['sentiment'] = sents

print(tweets)