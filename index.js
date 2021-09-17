/*
---------------------------------------------------
THE CHALLENGE 

The function KaprekarsConstant takes a string parameter which will be a 4-digit number with at least two distinct digits. Your program should perform the following routine on the number: Arrange the digits in descending order and in ascending order (adding zeroes to fit it to a 4-digit number), and subtract the smaller number from the bigger number. Then repeat the previous step. Performing this routine will always cause you to reach a fixed number: 6174. Then performing the routine on 6174 will always give you 6174 (7641 - 1467 = 6174). 
Your algorithm should return the number of times this routine must be performed until 6174 is reached. For example: if num is 3524 your program should return 3 because of the following steps: (1) 5432 - 2345 = 3087, (2) 8730 - 0378 = 8352, (3) 8532 - 2358 = 6174.

You can google Kaprekars Constant for more information or visit the wikipedia page https://en.wikipedia.org/wiki/6174_(number)

digitSort is a helper function to that takes a string of digits and sorts them in ascending order and returns the result as a number. Feel free to use it to solve this problem.

---------------------------------------------------
EXAMPLES

theProblem.kaprekarsConstant("3524")
  should equal 3

theProblem.kaprekarsConstant("3215")
  should equal 7

theProblem.kaprekarsConstant("0001")
  should equal 5

---------------------------------------------------
EXTRA CREDITS

Solve the problem using recursion. The kaprekarsConstant function should be called each time the Kaprekar's routine is executed.

kaprekarsConstantProblem.kaprekarsConstant("3524") should equal 3 and the function KaprekarsConstant should be called 3 times

---------------------------------------------------
*/

const theProblem = {

    // helper function for this problem 🙂
    digitSort: (string) => Number(string.split('').sort((a,b) => a-b).join('')),
    
    // kaprekarsConstantProblem.digitSort("425316") returns 123456
    // kaprekarsConstantProblem.digitSort("0010") returns 1
  
    digitOrder: (string) => Number(string.toString().split('').reverse().join('')),

    kaprekarsConstant: (string) => {
        
      // Write your code here.
      // Recursion is your friend. 🙂
      let sortedNum = theProblem.digitSort(string)
      let higherOrder = theProblem.digitOrder(sortedNum)
      while (higherOrder.toString().length <  4) {
          higherOrder = Number(higherOrder + '0')
      }
      let result = higherOrder - sortedNum
      if ( result === 6174) {
        return 1
      } else {
        return theProblem.kaprekarsConstant(result.toString())+1
      }
    },
  }

module.exports = theProblem;