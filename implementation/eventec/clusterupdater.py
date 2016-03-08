import logging

from geopy.distance import vincenty
from itertools import permutations, product


class ClusterUpdater:
    def __init__(self, clsman):
        self.clsman = clsman

    def process_tweet(self, tweet):
        # add the tweet to a cluster if it is in one
        for cluster in self.clsman:
            if cluster.in_cluster(tweet):
                logging.debug("Tweet within cluster, adding to cluster %s" % id(cluster))
                cluster.add_tweet(tweet)
                return True
        return False

    def update_clusters(self, tweet):
        # check if any clusters are overlapping
        changed = True
        while changed:
            changed = False
            for c1, c2 in permutations(self.clsman, 2):
                centres = product(c1.centres, c2.centres)
                for x, y in centres:
                    if vincenty(x.rev(), y.rev()).km < self.clsman.radius:
                        self.clsman.merge_clusters(c1, c2)
                        changed = True
                        break
                if changed:
                    break

    def update_oldclusters(self, tweet):
        # remove any that are more than a maxage
        old = []
        for cluster in self.clsman:
            age = tweet['timestamp_obj'] - cluster.oldest
            logging.debug("%s" % age)
            if age > self.clsman.maxage:
                old.append(cluster)

        for cluster in old:
            logging.debug("Removing cluster %s (last tweet at %s)" % (id(cluster), cluster.oldest))
            self.clsman.remove_cluster(cluster)
