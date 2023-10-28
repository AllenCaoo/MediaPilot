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


db0 = server.databases.list()[0]
<<<<<<< HEAD
query = db0.query(SELECT_25_QUERY)
=======

# db = server.database.connect(
#     engine = 'sqlite',
#     paramets = {
#         "db_file": ""
#     }
# )

# tbl = db0.tables.get('')

# Sample query 
# query = db0.query('select * from training LIMIT 25')
>>>>>>> c23b395fd435a19617f86ecf55b8d04d151ef035
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
df = pd.read_csv('datasets/realdonaldtrump.csv')

conn = sqlite3.connect(DB_NAME)

df.to_sql(name='data', con=conn, if_exists='replace', index=False)

conn.commit()



# sentiment_model = project.models.create(
#     name = 'sentiment',
#     database = 'files',
#     predict = 'favorites',
#     query = 'SELECT * FROM dtrump;',
#     #from_data = 'mediapilot/datasets/training_data.csv'
# )

sentiment_model = project.models.get('sentiment')


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
# sentiment_model.wait_complete()
# query = 'SELECT * FROM dtrump;'
sentiment_model.predict('favorites')

# server.close()


# project.list_models()