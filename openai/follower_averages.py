import pandas as pd
import csv

followers = pd.read_csv('datasets/followers_history.csv')

counts = []

for follow in followers['Followers_Count']:
    counts.append(int(follow))

followers['Followers_Count'] = counts

yearly_avg = {}
for i in range(2014, 2021):
    year = str(i)
    data = followers[followers['Date'].str.contains(year)]
    avg = sum(data['Followers_Count'])/len(data)
    yearly_avg[i] = avg

avgs = {
    'year': yearly_avg.keys(),
    'average': yearly_avg.values()
}

csv_path = 'datasets/yearly_follower_avg.csv'

df = pd.DataFrame(avgs)

df.to_csv(csv_path, index = False)