def computePay(hours, rate):
    totalPay = 0
    if hours > 40:
        totalPay = 40 * rate
        temp1Float = hours - 40.0
        temp2Float = rate * 1.5
        temp3Float = temp1Float * temp2Float
        totalPay += temp3Float
    else:
        totalPay = rate * hours
    return totalPay

userHourStr = input("Enter Hours: ")
userRateStr = input("Enter Rate: ")
try:
    userHourFloat = float(userHourStr)
    userRateFloat = float(userRateStr)
except:
    print("ERROR, PLEASE TRY AGAIN")
    quit()

print(computePay(userHourFloat, userRateFloat))
