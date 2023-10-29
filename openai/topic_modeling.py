import gensim
from gensim import corpora, models
import pandas as pd
import re
import string
import spacy
import torch
import nltk
import joblib

from nltk.corpus import wordnet
from nltk.stem import WordNetLemmatizer
from sklearn.feature_extraction.text import TfidfVectorizer, CountVectorizer
from sklearn.decomposition import LatentDirichletAllocation

torch.set_default_dtype(torch.float32)

df = pd.read_csv('datasets/realdonaldtrump.csv')
tweets_df=df.loc[:,['content']]
# tweets_df.info()

nltk.download('wordnet')
nltk.download('omw-1.4')
lemmatizer = WordNetLemmatizer()
# nlp = spacy.load("en_core_web_sm")

# a = 42270
# for i in range(a,a+10):
#     print(tweets_df.content[i])
#     # print()


def clean_text(text):
    ''', , and '''
    #Make text lowercase   
    text = text.lower()
    #remove text in square brackets
    text = re.sub(r'\[.*?\]', '', text)
    #remove punctuation   
    text = re.sub(r'[%s]' % re.escape(string.punctuation), '', text) 
    #remove words containing numbers
    text = re.sub(r'\w*\d\w*', '', text)
    return text
    
tweets_df_clean = pd.DataFrame(tweets_df.content.apply(lambda x: clean_text(x)))


# def lemmatizer(text):        
#     sent = []
#     doc = nlp(text)
#     for word in doc:
#         sent.append(word.lemma_)
#     return " ".join(sent)
# tweets_df_clean = pd.DataFrame(tweets_df_clean.content.apply(lambda x: lemmatizer(x)))
# tweets_df_clean['content'] = tweets_df_clean['content'].str.replace('-PRON-', '')

def lemma(text):
    words = nltk.word_tokenize(text)
    lemmatized_words = [lemmatizer.lemmatize(word, wordnet.VERB) for word in words]
    return' '.join(lemmatized_words)

tweets_df_clean = pd.DataFrame(tweets_df_clean.content.apply(lambda x: lemma(x)))
tweets_df_clean['content'] = tweets_df_clean['content'].str.replace('-PRON-', '')


vectorizer = CountVectorizer(
    analyzer='word',       
    min_df=3,# minimum required occurences of a word 
    stop_words='english',# remove stop words
    lowercase=True,# convert all words to lowercase
    token_pattern='[a-zA-Z0-9]{3,}',# num chars > 3
    max_features=5000,# max number of unique words
    )
data_matrix = vectorizer.fit_transform(tweets_df_clean.content)
# data_matrix

# lda_model = models.LdaModel(corpus, num_topics=5, id2word=dictionary, passes=15)

lda_model = LatentDirichletAllocation(
n_components=30, # Number of topics
learning_method='online',
random_state=20,       
n_jobs = -1  # Use all available CPUs
                                     )
lda_output = lda_model.fit_transform(data_matrix)

model_filename = 'tm.pkl'
joblib.dump(lda_model, model_filename)

# for i,topic in enumerate(lda_model.components_):
#     print(f'Top 10 words for topic #{i}:')
#     print([vectorizer.get_feature_names_out()[i] for i in topic.argsort()[-10:]])
#     print('\n')

topic_values = lda_model.transform(data_matrix)
tweets_df['Topic'] = topic_values.argmax(axis=1)

print(tweets_df)

csv_path = 'datasets/tweets.csv'

tweets_df.to_csv(csv_path, index=False)

# def load_classifier(model_filename):
#     topic_classifier = .load(model_filename)
#     return topic_classifier

# def classify_topic(topic_classifier, new_tweet):
