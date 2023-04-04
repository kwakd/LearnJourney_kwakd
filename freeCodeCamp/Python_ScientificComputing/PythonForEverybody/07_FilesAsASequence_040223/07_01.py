xfile = open('mbox-short.txt')

for i in xfile:
    newFile = i.rstrip()
    print(newFile.upper())