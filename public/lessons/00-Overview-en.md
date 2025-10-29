# 00: Orientation

## Description
Go is a statically typed, compiled programming language designed for simplicity and efficiency. This lesson introduces the Go language, its features, and how to set up the development environment.

## Example Code
```go
package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")
}
```

## How to Run
Open a terminal and run:
```bash
go run hello.go
```

## Practice Problems
Create a simple Go program that prints your name and age.

<details>
<summary>Answer & Explanation</summary>

```go
package main

import "fmt"

func main() {
    fmt.Println("John Doe, 25 years old")
}
```

This program demonstrates the basic structure of a Go program:
1. `package main` - Declares the package name
2. `import "fmt"` - Imports the formatting package for console output
3. `func main()` - The entry point of the program
4. `fmt.Println()` - Prints text to the console followed by a newline

</details>
