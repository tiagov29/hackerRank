// Given the string, check if it is a palindrome.

// Example

// For inputString = "aabaa", the output should be
// solution(inputString) = true;
// For inputString = "abac", the output should be
// solution(inputString) = false;
// For inputString = "a", the output should be
// solution(inputString) = true

package main

func solution(inputString string) bool {
	for i := 0; i < len(inputString)/2; i++ {
		if inputString[i] != inputString[len(inputString)-1-i] {
			return false
		}
	}
	return true
}
