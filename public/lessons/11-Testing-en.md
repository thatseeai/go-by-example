# 11: Testing and Benchmarks

## Description
Go has built-in support for testing with the `testing` package. You can write unit tests, benchmark tests, and even integration tests. Go's testing framework is designed to be simple and effective.

## Example Code
```go
package main

import (
    "fmt"
    "math"
    "testing"
)

// Function to test
func Add(a, b int) int {
    return a + b
}

func IsEven(n int) bool {
    return n%2 == 0
}

// Example of a simple test function (this would be in a separate _test.go file)
func TestAdd(t *testing.T) {
    result := Add(2, 3)
    if result != 5 {
        t.Errorf("Add(2, 3) = %d; expected 5", result)
    }
}

func TestIsEven(t *testing.T) {
    if !IsEven(4) {
        t.Errorf("IsEven(4) = false; expected true")
    }
    
    if IsEven(3) {
        t.Errorf("IsEven(3) = true; expected false")
    }
}

// Example of a benchmark function (this would be in a separate _test.go file)
func BenchmarkAdd(b *testing.B) {
    for i := 0; i < b.N; i++ {
        Add(i, i+1)
    }
}

func main() {
    // Example usage
    fmt.Println("Testing example:")
    fmt.Printf("Add(2, 3) = %d\n", Add(2, 3))
    fmt.Printf("IsEven(4) = %t\n", IsEven(4))
    
    // This would normally be run with: go test
    // For demonstration, we'll just show the logic
    fmt.Println("Tests would be run with: go test")
}
```

## How to Run
Open a terminal and run:
```bash
go run testing.go
```

## Practice Problems
Create a function that calculates the factorial of a number and write tests for it.

<details>
<summary>Answer & Explanation</summary>

```go
package main

import (
    "fmt"
    "testing"
)

// Factorial function
func Factorial(n int) (int, error) {
    if n < 0 {
        return 0, fmt.Errorf("factorial of negative number is undefined")
    }
    
    if n == 0 || n == 1 {
        return 1, nil
    }
    
    result := 1
    for i := 2; i <= n; i++ {
        result *= i
    }
    
    return result, nil
}

// Test function (would normally be in factorials_test.go)
func TestFactorial(t *testing.T) {
    // Test cases
    tests := []struct {
        input    int
        expected int
        hasError bool
    }{
        {0, 1, false},
        {1, 1, false},
        {5, 120, false},
        {3, 6, false},
        {-1, 0, true}, // Error case
    }
    
    for _, test := range tests {
        result, err := Factorial(test.input)
        
        if test.hasError {
            if err == nil {
                t.Errorf("Factorial(%d) should have returned an error but didn't", test.input)
            }
        } else {
            if err != nil {
                t.Errorf("Factorial(%d) returned error: %v", test.input, err)
            }
            
            if result != test.expected {
                t.Errorf("Factorial(%d) = %d; expected %d", test.input, result, test.expected)
            }
        }
    }
}

func main() {
    // Example usage
    fmt.Println("Factorial examples:")
    
    result, err := Factorial(5)
    if err != nil {
        fmt.Printf("Error: %v\n", err)
    } else {
        fmt.Printf("5! = %d\n", result)
    }
    
    result, err = Factorial(-1)
    if err != nil {
        fmt.Printf("Error for -1: %v\n", err)
    } else {
        fmt.Printf("-1! = %d\n", result)
    }
    
    // This would normally be run with: go test factorials_test.go
    fmt.Println("Tests would be run with: go test")
}
```

This program demonstrates:
1. Creating a factorial function with error handling
2. Writing test cases using table-driven tests (more readable for multiple test cases)
3. Testing both normal and error conditions
4. Using `testing.T` for assertion failures
5. How to structure tests properly in Go
6. The `go test` command usage for running tests

</details>
