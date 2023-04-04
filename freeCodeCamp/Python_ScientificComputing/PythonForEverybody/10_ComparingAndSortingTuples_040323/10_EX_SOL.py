# https://www.youtube.com/watch?v=EhQxwzyT16E

fname = input('Enter File: ')

if len(fname) < 1 : fname = 'clown.txt'
hand = open(fname)

di = dict()
for lin in hand:
    lin = lin.rstrip()
    wds = lin.split()
    for w in wds:
        #idion: retrieve/create/update counter
        di[w] = di.get(w,0) + 1

# print(di)

tmp = list()
for k,v in di.items():
    newt = (v,k)
    tmp.append(newt)

# print('Flipped', tmp)

tmp = sorted(tmp, reverse=True)
# print('Sorted', tmp)

for v,k in tmp[:5]:
    print(k,v)


# x = sorted(di.items())
# print(x[:5])

