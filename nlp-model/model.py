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
query = db0.query(SELECT_25_QUERY)
# print(query.fetch())

project = server.get_project('mediapilot')

models = project.models.list()
print(models[0])

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



# model = project.models.create(
#     name = 'sentiment',
#     database = 'files',
#     predict = 'favorites',
#     query = 'SELECT * FROM dtrump;',
#     #from_data = 'mediapilot/datasets/training_data.csv'
# )

# model = project.get_model('sentiment')
model = project.models.list()[0]


# sentiment = project.
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

# status = model.get_status()
# print(status)

q = project.query("SELECT * FROM dtrump")
# q.fetch()

# model.describe()
# view = project.views.create(
#     name = 'dtrump', 
#     sql = q, 
#     database = 'files'
#     )

# views = project.views.list()
# print(views)
# sentiment = view.create("sentiment", q, database = 'files')
# query = pd.read_sql_query(q, con=conn)
# dtrump = project.views.get('dtrump')

# query = project.query("SELECT 'favorites' FROM dtrump")

model.predict(q)

# server.close()

# project.list_models()