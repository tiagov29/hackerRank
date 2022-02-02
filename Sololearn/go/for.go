package main

import "fmt"

func main() {
	// a := make([]int, 5)
	// a[1] = 2
	// a[2] = 3

	// for i, v := range a {
	// 	fmt.Println(i, v)
	// }
	// x := "hello"
	// for _, c := range x {
	// fmt.Println(c) //for the unicode code points
	// fmt.Printf("%c \n", c) // for the values
	// }
	res := 0
	nums := [3]int{2, 4, 6}
	for i, v := range nums {
		if i%2 == 0 {
			res += v
		}
	}
	fmt.Println(res)
}

//The Printf() function is similar to the one in C,
// taking the format of the output as its argument.
// %c in our case denotes a character,
// while \n defines a new line.
