import mindsdb_sdk
from sqlalchemy import select, create_engine
import pandas as pd
import sqlite3

# connects to the default port (47334) on localhost


server = mindsdb_sdk.connect()

# Sample query 
db0 = server.databases.list()[0]
query = db0.query('select * from training LIMIT 25')
# print(query.fetch())

# connects to the specified host and port
# server = mindsdb_sdk.connect('http://127.0.0.1:47334')

project = server.get_project('mediapilot')

models = project.models.list()
print(models)

# server.list_projects()

#creates database
# conn = sqlite3.connect('.db')
# conn.close()

# note = select()

# engine = create_engine('sqlite:///datasets/our_data.db')
df = pd.read_csv('datasets/training_data.csv')

conn = sqlite3.connect('our_data.db')

df.to_sql(name='data', con=conn, if_exists='replace', index=False)

conn.commit()


# sentiment_model = project.models.get('sentiment')
sentiment_model = project.models.create(
    name = 'sentiment_test',
    predict = 'polarity',
    query = 'SELECT * FROM data LIMIT 25',
    #from_data = 'mediapilot/datasets/training_data.csv'
)

sentiment_model = project.models.get('sentiment_test')


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


# project.list_models()