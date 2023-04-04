str = 'X-DSPAM-Confidence: 0.8475 '
l = []
for i in str.split():
    try:
        l.append(float(i))
    except ValueError:
        pass
print(l)