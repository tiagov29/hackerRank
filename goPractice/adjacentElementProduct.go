// Given an array of integers, find the pair of adjacent elements that has the largest product
// and return that product.

// Example

// For inputArray = [3, 6, -2, -5, 7, 3], the output should be
// solution(inputArray) = 21

package main

func solution(inputArray []int) int {
	max := inputArray[0] * inputArray[1]
	for i := 1; i < len(inputArray)-1; i++ {
		if max < inputArray[i]*inputArray[i+1] {
			max = inputArray[i] * inputArray[i+1]
		}
	}
	return max
}
