import csv
import pandas as pd
import joblib
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error, mean_absolute_error

data = pd.read_csv('datasets/scores_trump.csv')

X = data[['scores','Topic 0','Topic 1','Topic 2','Topic 3','Topic 4','Topic 5','Topic 6','Topic 7','Topic 8','Topic 9','Topic 10','Topic 11','Topic 12','Topic 13','Topic 14','Topic 15','Topic 16','Topic 17','Topic 18','Topic 19','Topic 20','Topic 21','Topic 22','Topic 23','Topic 24','Topic 25','Topic 26','Topic 27','Topic 28','Topic 29','Topic 30']]
y = data['favorites']

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

predictor = RandomForestRegressor(n_estimators=100, max_depth=None, random_state=0)
predictor.fit(X_train, y_train)

model_filename = 'predictor.pkl'
joblib.dump(predictor, model_filename)

y_pred = predictor.predict(X_test)

mse = mean_squared_error(y_test, y_pred)
mae = mean_absolute_error(y_test, y_pred)

print(f'Mean Squared Error: {mse}')
print(f'Mean Absolute Error: {mae}')

new_tweet = pd.DataFrame({'scores': 0.948502, 'Topic 0': 0,'Topic 1': 0,'Topic 2': 0,'Topic 3': 0,'Topic 4': 0,'Topic 5': 0,'Topic 6': 0,'Topic 7': 0,'Topic 8': 1,'Topic 9': 0,'Topic 10': 0,'Topic 11': 0,'Topic 12': 0,'Topic 13': 0,'Topic 14': 0,'Topic 15': 0,'Topic 16': 0,'Topic 17': 0,'Topic 18': 0,'Topic 19': 0,'Topic 20': 0,'Topic 21': 0,'Topic 22': 0,'Topic 23': 0,'Topic 24': 0,'Topic 25': 0,'Topic 26': 0,'Topic 27': 0,'Topic 28': 0,'Topic 29': 0,'Topic 30': 0})
predicted_likes = predictor.predict(new_tweet)

print(f'Predicted Likes for New Tweet: {predicted_likes[0]}')
