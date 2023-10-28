import mindsdb_sdk
from sqlalchemy import select, create_engine
import pandas as pd
import sqlite3


TRAINING_LOCATION = 'datasets/realdonaldtrump/realdonaldtrump.csv'
SELECT_25_QUERY = 'select * from training LIMIT 25'
PROJECT_NAME = 'mediapilot'
DB_NAME = 'our_data.db'
MODEL_NAME = 'hehe_model'

# connects to the default port (47334) on localhost
# server = mindsdb_sdk.connect()
# connects to the specified host and port
server = mindsdb_sdk.connect('http://127.0.0.1:47334')


# Sample query 
db0 = server.databases.list()[0]
query = db0.query(SELECT_25_QUERY)
# print(query.fetch())

project = server.get_project('mediapilot')

# models = project.models.list()
# print(models)

# server.list_projects()

#creates database
# conn = sqlite3.connect('.db')
# conn.close()

# note = select()

# engine = create_engine('sqlite:///datasets/our_data.db')
df = pd.read_csv(TRAINING_LOCATION)

conn = sqlite3.connect(DB_NAME)

df.to_sql(name='data', con=conn, if_exists='replace', index=False)

conn.commit()


# sentiment_model = project.models.get('sentiment')
sentiment_model = project.models.create(
    name = MODEL_NAME,
    predict = 'favorites',
    query = SELECT_25_QUERY,
    #from_data = 'mediapilot/datasets/training_data.csv'
)

sentiment_model = project.models.get(MODEL_NAME)


# with engine.connect() as conn:
#     conn.execute('COMMIT')

# query = select(3).where(df['query'] == 'kindlec2')
# query = 'SELECT * FROM df WHERE query == kindle2'

# with engine.connect() as conn:
#     query = conn.execute("SELECT * FROM df").fetchall()
# print(table)

# sentiment_model.retrain(
#     # query = 'data'
#     query = "SELECT * FROM data WHERE query == 'kindle2' "
# )
# sentiment_model.describe()
sentiment_model.wait_complete()
sentiment_model.predict(query)

# server.close()


# project.list_models()