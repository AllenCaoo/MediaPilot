import openai

from constants import topics
from constants import topics

openai.api_key = "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"


def isValidResponse(response):
    try:
        lst = list(response.split(','))
        lst = [w.strip().lower() for w in lst]
        for item in lst:
            print(item in topics)
            if item not in topics:
                return False
        return True
    except:
        return False

def getTopicsFrom(tweet):
    model_engine = "gpt-4"
    prompt = "All the haters and losers must admit that, unlike others, I never attacked dopey Jon Stewart for his phony last name. Would never do that!"
    messages = {
        "role": "assistant",
        "content": "Here are the list of topics that I have: +" + (','.join(topics)) + "+. Now suppose I also " + \
                    "have this tweet: " + prompt + ". From this tweet, list all the topics I listed " + \
                    "that this tweet closely relates to. NOTE: SEPARATE ALL THE YOUR TOPICS YOU RESPOND" + \
                    "WITH BY JUST A COMMA."
    },
    max_tokens = 256

    completion = openai.ChatCompletion.create(
        model=model_engine,
        messages=messages,
        max_tokens=max_tokens,
    )
    response = completion.choices[0]['message']['content']

    tries = 5
    while tries > 0 and not isValidResponse(response):
        print("trying: " + response)
        # print(isValidResponse(response))
        completion = openai.ChatCompletion.create(
            model=model_engine,
            messages=messages,
            max_tokens=max_tokens,
        )
        response = completion.choices[0]['message']['content']
        tries -= 1
    print(list(response.split(',')))
    print(tries)
    if tries == 0:
        return []
    lst = list(response.split(','))
    lst = [w.strip().lower() for w in lst]
    return lst

