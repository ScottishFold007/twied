#!/usr/bin/python
"""
Testing the spatial label propagation algorithm.
"""
import logging
import sys
from configparser import NoOptionError

import pymongo

from twied.labelprop.inference import InferSL
import twieds

# Must run this as a script
if __name__ == "__main__":
    config = twieds.setup("logs/labelprop.log", "settings/locinf.ini")

    # Connect to the MongoDB
    logging.info("Connecting to MongoDB...")
    client = pymongo.MongoClient(config.get("mongo", "address"), config.getint("mongo", "port"))
    logging.info("Connected to MongoDB")

    # Select the database and collection based off config
    try:
        db = client[config.get("mongo", "database")]
        user_col = db["users"]
        user_col.create_index([('user.id', pymongo.ASCENDING)], unique=True)
        user_col.create_index([('user.screen_name', pymongo.ASCENDING)])
    except NoOptionError:
        logging.critical("Cannot connect to MongoDB database and collection. Config incorrect?")
        sys.exit()

    # Get the tweet collection
    tweet_col = db[config.get("mongo", "collection")]

    cursor = tweet_col.find({'geo': {'$ne': None}, 'locinf.sl.test': None})
    infersl = InferSL(config, user_col, verbose=True)

    for tweet in cursor:
        print("\n\nNEXT USER", tweet['user']['screen_name'], ":\n")

        if input(tweet) == "s":
            continue

        inf = infersl.infer(tweet['user']['id'], test=True)

        print("\nInferred location:", inf)
        input(">")

        # Store inferred loc in db
        db.tweets.update_one({'_id': tweet['_id']}, {
            '$set': {
                'locinf.sl.test': str(inf)
            }
        })

        if inf is None:
            continue