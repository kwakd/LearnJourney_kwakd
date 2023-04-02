totalNumber = 0
totalCount = 0
totalAvg = 0.0
userDoneBool = True

while userDoneBool:
    userInputStr = input("Enter a number: ")
    if(userInputStr == "done"):
        totalAvg = totalNumber / totalCount
        print(totalNumber, totalCount, totalAvg)
        quit()
    try:
        userInputInt = int(userInputStr)
        totalNumber += userInputInt
        totalCount += 1
    except:
        print("Invalid Input")
