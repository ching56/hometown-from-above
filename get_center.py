import requests

data = [
    {
        'date': '2017/11/28',
        'mapID': 'nckumediatek.b1pjk5yt',
        'center': [121.2993189184577, 23.388397332266255, 0]
    },
    {
        'date': '2017/11/27',
        'mapID': 'nckumediatek.0lq58v10',
        'center': [121.2993189184577, 23.388397332266255, 0]
    },
    {
        'date': '2017/10/02',
        'mapID': 'nckumediatek.2knunq82',
        'center': [121.2993189184577, 23.388397332266255, 0]
    },
    {
        'date': '2017/10/01',
        'mapID': 'nckumediatek.ca8wq5dv',
        'center': [121.2993189184577, 23.388397332266255, 0]
    },
    {
        'date': '2017/09/24',
        'mapID': 'nckumediatek.b9cfhqq5',
        'center': [121.2993189184577, 23.388397332266255, 0]
    },
    {
        'date': '2017/09/17',
        'mapID': 'nckumediatek.4zb2l3pk',
        'center': [121.2993189184577, 23.388397332266255, 0]
    },
    {
        'date': '2017/09/30',
        'mapID': 'nckumediatek.0lqhqtg6',
        'center': [121.2993189184577, 23.388397332266255, 0]
    },
    {
        'date': '2017/09/29',
        'mapID': 'nckumediatek.a0xqq8fs',
        'center': [121.2993189184577, 23.388397332266255, 0]
    },
]

ids = [d['mapID'] for d in data]
print(ids)
for i in ids:
  req = requests.get(
      'https://api.mapbox.com/v4/{}.json?secure&access_token=pk.eyJ1IjoibmNrdW1lZGlhdGVrIiwiYSI6ImNqaHcxNG93NTE1MGkzcHFocHM0MWM2MXYifQ.IyKW8pIV6KIJ-hUWkBhBrQ'.format(i))
  print(i, req.json()['center'])
