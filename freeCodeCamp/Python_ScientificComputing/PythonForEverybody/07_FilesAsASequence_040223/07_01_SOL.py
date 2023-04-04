# https://www.youtube.com/watch?v=il1j4wkte2E

fh = open('mbox-short.txt')
for lx in fh:
    ly = lx.rstrip()
    print(ly.upper())