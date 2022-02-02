package main

import "fmt"

func main() {
	a := make([]int, 5)
	a = append(a, 8, 9, 10)
	fmt.Println(a)
}

// The append() function takes the slice
//  as its first argument and the elements to be added to
//  the end of the slice as its next argument.
// It then returns a new slice, containing the old slice
// plus the new elements appended.

// You can append multiple values at once by just comma
// separating the values as arguments, for example: append(s, 1, 2, 3)
