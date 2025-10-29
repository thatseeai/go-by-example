# 08: Error Handling

## Description
Go handles errors differently than many other languages. Instead of exceptions, Go uses explicit error return values. This approach forces programmers to handle errors explicitly.

## Example Code
```go
package main

import (
    "fmt"
    "math"
)

// Function that can return an error
func divide(a, b float64) (float64, error) {
    if b == 0 {
        return 0, fmt.Errorf("cannot divide by zero")
    }
    return a / b, nil
}

// Function that panics on error (not recommended)
func sqrt(value float64) float64 {
    if value < 0 {
        panic("cannot take square root of negative number")
    }
    return math.Sqrt(value)
}

func main() {
    // Handle error explicitly
    result, err := divide(10, 2)
    if err != nil {
        fmt.Printf("Error: %v\n", err)
    } else {
        fmt.Printf("Result: %.2f\n", result)
    }
    
    // Handle error with zero division
    result, err = divide(10, 0)
    if err != nil {
        fmt.Printf("Error: %v\n", err)
    } else {
        fmt.Printf("Result: %.2f\n", result)
    }
    
    // Using defer, panic, and recover
    defer func() {
        if r := recover(); r != nil {
            fmt.Printf("Recovered from panic: %v\n", r)
        }
    }()
    
    // This will cause a panic
    fmt.Println("About to panic...")
    sqrt(-4)
}
```

## How to Run
Open a terminal and run:
```bash
go run error-handling.go
```

## Practice Problems
Create a function that reads a file and returns its content or an error if the file doesn't exist.

<details>
<summary>Answer & Explanation</summary>

```go
package main

import (
    "fmt"
    "io/ioutil"
    "os"
)

// Function to read file content
func readFile(filename string) (string, error) {
    // Try to open the file
    file, err := os.Open(filename)
    if err != nil {
        return "", fmt.Errorf("failed to open file %s: %v", filename, err)
    }
    defer file.Close()
    
    // Read the file content
    content, err := ioutil.ReadAll(file)
    if err != nil {
        return "", fmt.Errorf("failed to read file %s: %v", filename, err)
    }
    
    return string(content), nil
}

func main() {
    // Try to read a non-existent file
    content, err := readFile("nonexistent.txt")
    if err != nil {
        fmt.Printf("Error: %v\n", err)
    } else {
        fmt.Printf("File content:\n%s\n", content)
    }
    
    // Create a test file and read it
    testFile := "test.txt"
    err = ioutil.WriteFile(testFile, []byte("Hello, Go!"), 0644)
    if err != nil {
        fmt.Printf("Error creating test file: %v\n", err)
        return
    }
    
    content, err = readFile(testFile)
    if err != nil {
        fmt.Printf("Error reading file: %v\n", err)
    } else {
        fmt.Printf("File content:\n%s\n", content)
    }
    
    // Clean up
    os.Remove(testFile)
}
```

This program demonstrates:
1. Creating custom error messages using `fmt.Errorf()`
2. Explicit error handling with `if err != nil` checks
3. Using `defer` to ensure resources are closed
4. The importance of handling errors explicitly in Go
5. Using `ioutil` for file operations (though in modern Go, `os.ReadFile` is preferred)

</details>
