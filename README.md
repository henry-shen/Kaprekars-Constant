# ALGO-RYTHMS CHALLENGE // Kaprekars Constant!

- [1. Getting started](#1-getting-started)
- [2. Challenge](#2-challenge)
  - [2.1. Examples](#21-examples)
  - [2.2. Extra Credits](#22-extra-credits)
- [3. Testing and Submitting](#3-completion)
  - [3.1. Testing your solution](#31-testing-your-solution)
  - [3.2. Submitting your solution](#32-submitting-your-solution)


## 1. Getting started
  `github.com/henry-shen/Kaprekars-Constant`

Fork this repo and then `git clone` your forked repo to your computer.
Once you're happy with your solution, `git push` and submit a pull request at
`github.com/your-github-name/your-repository`.

## 2. Challenge

#### Background
Kaprekar constant, or 6174, is a constant that arises when we take a 4-digit integer, form the largest and smallest numbers from its digits, and then subtract these two numbers. Continuing with this process of forming and subtracting, we will always arrive at the number 6174.

An illustration:

Take a 4-digit number like 3215. Rearranging to form the largest and smallest with these digits, we get 5321 and 1235. Now, subtract them: 5321-1235 = 4086. Continue with the process of rearranging and subtracting:

8640−0468 = 8172
8721−1278 = 7443
7443−3447 = 3996
9963−3699 = 6264
6642−2466 = 4176
7641−1467 = 6174

We stop here since we will only get into a loop and keep getting 6174.

#### Task
The function KaprekarsConstant takes a string parameter which will be a 4-digit number with at least two distinct digits. Your program should perform the following routine on the number: Arrange the digits in descending order and in ascending order (adding zeroes to fit it to a 4-digit number), and subtract the smaller number from the bigger number. Then repeat the previous step. Performing this routine will always cause you to reach a fixed number: 6174. Then performing the routine on 6174 will always give you 6174 (7641 - 1467 = 6174). 
Your algorithm should return the number of times this routine must be performed until 6174 is reached. For example: if num is 3524 your program should return 3 because of the following steps: (1) 5432 - 2345 = 3087, (2) 8730 - 0378 = 8352, (3) 8532 - 2358 = 6174.

You can google Kaprekars Constant for more information or visit the wikipedia page https://en.wikipedia.org/wiki/6174_(number)

### 2.1. Extra credits
Solve the problem using recursion. The kaprekarsConstant function should be called each time the Kaprekar's routine is executed.

kaprekarsConstantProblem.kaprekarsConstant("3524") should equal 3 and the function KaprekarsConstant should be called 3 times

### 2.2. Examples

```js
theProblem.kaprekarsConstant("3524") // should return 3
theProblem.kaprekarsConstant("3215") // should return 7
theProblem.kaprekarsConstant("0001") // should return 5
```

## 3. Testing and Submission

### 3.1. Testing your solution
To test your solution, run `npm i` in the root directory
and then run `npm t` to run the automated tests.

### 3.2. Submitting your solution

To submit your solution:

1. If you're working on a forked repo, push your changes to your forked repo and submit a pull request to this repo.

🤘🎉
