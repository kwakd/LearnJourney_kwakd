# https://www.youtube.com/watch?v=8yis2DvbBkI

import urllib.request
import urllib.parse
import urllib.error

fhand = urllib.request.urlopen('http://data.pr4e.org/romeo.txt')

counts = dict()
for line in fhand:
    words = line.decode().split()
    for word in words:
        counts[word] = counts.get(word, 0) + 1

print(counts)