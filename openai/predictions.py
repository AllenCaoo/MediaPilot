import csv
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error, mean_absolute_error

data = pd.read_csv('datasets/cleaned_data.csv')

X = data[['retweets', 'scores']]
y = data['favorites']

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

model = LinearRegression()
model.fit(X_train, y_train)

y_pred = model.predict(X_test)

mse = mean_squared_error(y_test, y_pred)
mae = mean_absolute_error(y_test, y_pred)

print(f'Mean Squared Error: {mse}')
print(f'Mean Absolute Error: {mae}')

new_tweet = pd.DataFrame({'retweets': [10], 'scores': 0.338493})
predicted_likes = model.predict(new_tweet)

print(f'Predicted Likes for New Tweet: {predicted_likes[0]}')
