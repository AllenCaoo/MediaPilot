import pandas as pd
import datetime
import csv

follower_data = pd.read_csv('datasets/followers_history.csv')
orig_data = pd.read_csv('datasets/scores_trump.csv')

follower_data['date'] = pd.to_datetime(follower_data['date'], format='%Y-%m-%d')
orig_data['date'] = orig_data['date'] = pd.to_datetime(orig_data['date'], format='%Y-%m-%d %H:%M:%S')

# print(orig_data)
prev_date = ''
index = 0

new_orig_dates = []
new_follower_dates = []
followers_list = [0 for j in range(len(follower_data))]

for i in range(1, len(follower_data)):
    date = follower_data['date'][i]
    formatted_date = date.strftime("%B %Y")
    new_follower_dates.append(formatted_date)
    # print(formatted_date)

for j in range(1, len(orig_data)):
    date = orig_data['date'][j]
    formatted_date = date.strftime("%B %Y")
    new_orig_dates.append(formatted_date)
    # print(formatted_date)

orig_data['date'] = pd.Series(new_orig_dates)
follower_data['date'] = pd.Series(new_follower_dates)
follower_data = follower_data[['date', 'followers']]

result = pd.merge(orig_data, follower_data, on='date', how='left')

favs = result['favorites']
fols = result['followers']

ratio = favs / fols

result['favorites'] = pd.Series(ratio)

print(result['favorites'])

csv_path = 'datasets/scores_trump.csv'

result.to_csv(csv_path, index=False)