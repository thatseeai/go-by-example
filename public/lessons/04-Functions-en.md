# 04: Functions and Variadic Arguments

## Description
Functions are the building blocks of Go programs. They allow you to organize code into reusable components. Go supports variadic functions, which can accept a variable number of arguments.

## Example Code
```go
package main

import "fmt"

// Regular function
func add(a int, b int) int {
    return a + b
}

// Function with variadic arguments
func sum(numbers ...int) int {
    total := 0
    for _, num := range numbers {
        total += num
    }
    return total
}

// Function that returns multiple values
func divide(a, b int) (int, int) {
    quotient := a / b
    remainder := a % b
    return quotient, remainder
}

func main() {
    // Call regular function
    result := add(5, 3)
    fmt.Printf("5 + 3 = %d\n", result)
    
    // Call variadic function
    total := sum(1, 2, 3, 4, 5)
    fmt.Printf("Sum of 1,2,3,4,5 = %d\n", total)
    
    // Call function returning multiple values
    q, r := divide(17, 5)
    fmt.Printf("17 ÷ 5 = %d remainder %d\n", q, r)
}
```

## How to Run
Open a terminal and run:
```bash
go run functions.go
```

## Practice Problems
Create a function that takes a variable number of strings and returns them concatenated with spaces between them.

<details>
<summary>Answer & Explanation</summary>

```go
package main

import "fmt"
import "strings"

// Function that concatenates strings with spaces
func joinStrings(strs ...string) string {
    return strings.Join(strs, " ")
}

func main() {
    result := joinStrings("Hello", "Go", "Programming")
    fmt.Printf("Joined string: %s\n", result)
}
```

This program demonstrates:
1. Using variadic parameters (`...string`) to accept a variable number of string arguments
2. Using `strings.Join()` function to efficiently concatenate strings with a separator
3. The function can accept any number of string arguments (0, 1, 2, or more)

</details>
