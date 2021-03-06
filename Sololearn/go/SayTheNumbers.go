// Say The Numbers


// You are making a robot that can speak numbers.
// Your robot should take 3 numbers in the range of 0-10 as input and output the corresponding texts in English.

// Sample Input:
// 8
// 0
// 5

// Sample Output:
// Eight
// Zero
// Five

package main
import "fmt"

func switchFunc(o int){
    switch o {
        case 1:
        fmt.Println("One")
        case 2:
        fmt.Println("Two")
        case 3:
        fmt.Println("Three")
        case 4:
        fmt.Println("Four")
        case 5:
        fmt.Println("Five")
        case 6:
        fmt.Println("Six")
        case 7:
        fmt.Println("Seven")
        case 8:
        fmt.Println("Eight")
        case 9:
        fmt.Println("Nine")
        case 10:
        fmt.Println("Ten")
        default:
        fmt.Println("Zero")
    }
}

func main() {
    //your code goes here
    var i,m,n int
    fmt.Scanln(&i)
    fmt.Scanln(&m)
    fmt.Scanln(&n)
    switchFunc(i)
    switchFunc(m)
    switchFunc(n)
}

//alternative solution
package main
import "fmt"

func main() {
	robotNumbers := []string{
		"Zero", "One", "Two", "Three",
		"Four", "Five", "Six", "Seven",
		"Eight", "Nine", "Ten",
	}

	var x, y, z int
	ScanTerminal(&x, &y, &z)

	TextOutput(robotNumbers, x, y, z)
}


func ScanTerminal(x *int, y *int, z *int) {
	fmt.Scanln(x)
	fmt.Scanln(y)
	fmt.Scanln(z)
}

func TextOutput(slice []string, num ...int) {
	if num == nil || len(num) < 3 {
		fmt.Println("Invalid value. Must have three numbers")
	}

	for _, v := range num {
		for n := range slice {
			if n == v {
				fmt.Println(slice[n])
			}
		}
	}
}