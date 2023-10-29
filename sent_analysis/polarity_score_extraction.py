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
        return "0"
    elif compound_score <= -0.05:
        return "1"
    else:
        return "Neutral"

dtrump = pd.read_csv('datasets/realdonaldtrump.csv')

tweets_list = dtrump['content'].tolist()
# print(type(tweets))

labels = []
scores = []
for tweet in tweets_list:
    sentiment = analyze_sentiment(tweet)
    score = analyzer.polarity_scores(tweet)['compound']
    labels.append(sentiment)
    scores.append(score)
    # print(tweet, sentiment)


dtrump['sentiment'] = labels
dtrump['scores'] = scores

csv_file_path = "datasets/scores_trump.csv"

dtrump.to_csv(csv_file_path, index=False)

# print(dtrump)