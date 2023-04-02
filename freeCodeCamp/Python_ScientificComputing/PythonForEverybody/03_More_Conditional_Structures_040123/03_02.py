userHourStr = input('Enter Hours: ')
userRateStr = input('Enter Rate: ')
try:
    userHourFloat = float(userHourStr)
    userRateFloat = float(userRateStr)
except:
    print("Error, please enter numeric input")
    quit()

if userHourFloat > 40:
    userTotalPay = 40 * userRateFloat
    temp1Float = userHourFloat - 40 
    temp2Float = userRateFloat * 1.5
    temp3Float = temp1Float * temp2Float
    userTotalPay += temp3Float
else:
    userTotalPay = userHourFloat * userRateFloat

print('Pay: ', userTotalPay)