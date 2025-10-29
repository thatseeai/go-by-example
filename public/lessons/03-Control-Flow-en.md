# 03: Control Flow

## Description
Go provides several control flow statements to manage the execution flow of your programs. These include conditional statements (if/else), loops (for, range), and switch statements.

## Example Code
```go
package main

import "fmt"

func main() {
    // If/else statement
    x := 10
    if x > 5 {
        fmt.Println("x is greater than 5")
    } else {
        fmt.Println("x is less than or equal to 5")
    }
    
    // For loop
    fmt.Println("For loop:")
    for i := 0; i < 5; i++ {
        fmt.Printf("i = %d\n", i)
    }
    
    // Range loop over slice
    numbers := []int{1, 2, 3, 4, 5}
    fmt.Println("Range loop:")
    for index, value := range numbers {
        fmt.Printf("Index: %d, Value: %d\n", index, value)
    }
    
    // Switch statement
    day := "Monday"
    switch day {
    case "Monday":
        fmt.Println("Start of the week")
    case "Friday":
        fmt.Println("End of the week")
    default:
        fmt.Println("Midweek")
    }
}
```

## How to Run
Open a terminal and run:
```bash
go run control-flow.go
```

## Practice Problems
Write a program that uses a for loop to calculate the sum of numbers from 1 to 10.

<details>
<summary>Answer & Explanation</summary>

```go
package main

import "fmt"

func main() {
    sum := 0
    for i := 1; i <= 10; i++ {
        sum += i
    }
    fmt.Printf("Sum of numbers from 1 to 10: %d\n", sum)
}
```

This program demonstrates:
1. Using a for loop to iterate from 1 to 10
2. Accumulating values in a variable (sum)
3. Using `fmt.Printf` to print the result with format specifier `%d` for integers

The sum of numbers from 1 to 10 is 55 (1+2+3+4+5+6+7+8+9+10).

</details>
