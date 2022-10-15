import math
number = int(input("Insert the number= ")) 
switcher = {
    1: 0,
    2: 0,
    3: 0,
    4: 1,
    5: 0,
    6: 1,
    7: 0,
    8: 2,
    9: 1,
    0: 1,
    }


 #This function is O(n) or linear since it will evaluate the digits one by one in a descending 
 #way (starting with the last digit) to evaluate if the number of closed paths increases or not.
 
def closePaths (number):
    closedPath = 0
    while(number>0):
        #the last digit is taken and evaluated in the switcher
        closedPath += switcher[number%10]
        #the last digit is removed
        number = math.floor(number/10) 
    return closedPath

print(closePaths(number))