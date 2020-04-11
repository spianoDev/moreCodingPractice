# from HackerRank: https://www.hackerrank.com/challenges/py-if-else/problem
# Task
# Given an integer, , perform the following conditional actions:
#
# If  is odd, print Weird
# If  is even and in the inclusive range of 2 to 5, print Not Weird
# If  is even and in the inclusive range of 6 to 20, print Weird
# If  is even and greater than 20, print Not Weird
# Input Format
#
# A single line containing a positive integer, .
#
# Constraints
#
# Output Format
#
# Print Weird if the number is weird; otherwise, print Not Weird.

def weird_or_not(num):
    if num % 2 != 0:
        print('Weird')
        return 'Weird'
    elif num % 2 == 0 and num >= 6 and num <= 20:
        print('Weird')
        return 'Weird'
    else:
        print('Not Weird')
        return 'Not Weird'

weird_or_not(21) # num is odd so print 'Weird'

# https://www.hackerrank.com/challenges/python-division/problem
#
# Task
# Read two integers and print two lines. The first line should contain integer division,  // . The second line should contain float division,  / .
#
# You don't need to perform any rounding or formatting operations.
#
# Input Format
#
# The first line contains the first integer, . The second line contains the second integer, .
#
# Output Format
#
# Print the two lines as described above.
a = 4
b = 3

print(a//b)
print(a/b)

# https://www.hackerrank.com/challenges/whats-your-name/problem
#
# You are given the firstname and lastname of a person on two different lines. Your task is to read them and print the following:
#
# Hello firstname lastname! You just delved into python.
#
# Input Format
#
# The first line contains the first name, and the second line contains the last name.
#
# Constraints
#
# The length of the first and last name <= 10.
#
# Output Format
#
# Print the output as mentioned above.

def print_full_name(a, b):
    print('Hello ' + a + ' ' + b + '! You just delved into python.')

print_full_name('sarah', 'p')
