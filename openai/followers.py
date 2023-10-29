# import pandas as pd
# import datetime

# followers = pd.read_csv('datasets/followers_history.csv')
# followers['dt_temp'] = pd.to_datetime(followers['date'])
# followers['year'] = followers['dt_temp'].dt.year
# followers['month'] = followers['dt_temp'].dt.month
# followers = followers.drop('dt_temp', axis=1)

# score_trump = pd.read_csv('datasets/scores_trump.csv')
# score_trump['dt_temp'] = pd.to_datetime(score_trump['date'])
# score_trump['year'] = score_trump['dt_temp'].dt.year
# score_trump['month'] = score_trump['dt_temp'].dt.month
# score_trump = score_trump.drop('dt_temp', axis=1)

# result = score_trump.merge(followers, on=['month', 'year'], how='left')

# # result.drop_duplicates(subset=['id'], keep='first')

# print(score_trump)
# print(result)

import csv
import datetime
import pandas as pd


mp = {}
badRows = []
with open('datasets/followers_history.csv', 'r') as csvfile:
    # Create a CSV reader
    csvreader = csv.reader(csvfile)

    # Iterate through each row in the CSV file
    first = True
    for row in csvreader:
        if first:
            first = False
            continue
        date = datetime.datetime.strptime(row[6], '%Y-%m-%d %H:%M:%S')
        year = date.year
        month = date.month
        if not row[3]:
            continue
        followers = int(row[3])
        mp[(month, year)] = followers
        # Process the row data

# res = []
data = {'id':[], 'followers':[]}

with open('datasets/scores_trump.csv', 'r', encoding="utf-8") as csvfile:
    # Create a CSV reader
    csvreader = csv.reader(csvfile)

    # Iterate through each row in the CSV file
    first = True
    length = 0
    for row in csvreader:
        if first:
            first = False
            continue
        id = int(row[0])
        date = datetime.datetime.strptime(row[3], '%Y-%m-%d %H:%M:%S')
        year = date.year
        month = date.month

        prevMonth, nextMonth = month, month
        prevYear, nextYear = year, year

        while (prevMonth, prevYear) not in mp and (nextMonth, nextYear) not in mp:
            if month == 1:
                prevMonth = 12
                prevYear -= 1
            else:
                prevMonth -= 1
            if month == 12:
                nextMonth = 1
                nextYear += 1
            else:
                nextMonth += 1

        if (prevMonth, prevYear) in mp:
            # print(date, mp[(prevMonth, prevYear)])
            # res.append(mp[(prevMonth, prevYear)])
            data['id'].append(id)
            data['followers'].append(mp[(prevMonth, prevYear)])
        else:
            # print(date, mp[(nextMonth, nextYear)])
            # res.append(mp[(nextMonth, nextYear)])
            data['id'].append(id)
            data['followers'].append(mp[(nextMonth, nextYear)])


        length += 1
    

scores_trump = pd.read_csv('datasets/scores_trump.csv')
idFollowers = pd.DataFrame(data)
result = pd.merge(scores_trump, idFollowers, on='id', how='inner')
result['favorites'] = result['favorites'] / result['followers']
result['retweets'] = result['retweets'] / result['followers']
result = result.reset_index(drop=True)
result.to_csv('datasets/scores_trump.csv',index=False)        

        
        # Process the row data

