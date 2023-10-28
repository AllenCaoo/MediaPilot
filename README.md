# MediaPilot

## Tips:
- DO NOT PUSH `datasets/` TO GITHUB. IT'LL BE TOO MUCH TOO PUSH.
- If you are importing a new library, just let Allen know :).
- To fetch an api route, call the `api()` function.
    - `POST` methods require a second argument (request)
    - An example of `GET` method fetched from React:
        ```javascript
        fetch(api("/testget"))
            .then(
              response => response.json() // convert to json
            ).then(
              responseJSON => { 
                /* some logic */
              }
            )
        ``` 
    
    - An example of `POST` method fetched from React:
        ```javascript
        let request = 
            { 
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(echo)
            }

        fetch(api("/echo"), request)
            .then(
              res => res.json()
            ).then(
              response => response.json() // convert to json
            ).then(
              responseJSON => { 
                /* some logic */
              }
            )
        ```
- Frontend will use Material UI (https://mui.com/material-ui). Find pre-made components to use. in frontend. They also provide playground for you to change up the component, and you can copy paste into codebase.
- Twitter API is way too expensive. Instead, we will down pre-existing Twitter datasets (https://github.com/shaypal5/awesome-twitter-data) into `datasets/` folder and train models from there.


## Description of folders
- **client/**: contains the react frontend
- **flask-server/**: contains the Python backend
- **nlp-model/**: ALL work pertaining to NLP predictive models
- **datasets/**: stores all our datasets for building NLP application

## Setup
0. `git clone https://github.com/AllenCaoo/MediaPilot.git` 
1. Ensure: `Python >= 3.9`
2. `pip install -r requirements.txt` (try `pip3` if `pip` doesn't work)
3. `cd client`
4. `npm install`
5. `cd ..`
6. `cd nlp-server`
7. `git clone https://github.com/mindsdb/mindsdb.git`
8. `python setup.py develop`
9. `python -m mindsdb`
10. Fin! 

### To run backend server:
- `cd flask-server`
- `python server.py` (try `python3` if `python` doesn't work)
- The Flask backend server will run on `http://localhost:5000`

### To run client
- `cd client`
- `npm start`
- The React frontend will run on `http://localhost:3000`


## Docker Setup:
- `docker run -p 47334:47334 -p 47335:47335 mindsdb/mindsdb`
- `http://127.0.0.1:47334/`
- Afterwards: 
  - powershell -> `wsl --shutdown` 