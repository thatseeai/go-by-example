# 01: Hello, World

## Description
The "Hello, World!" program is the traditional first program for beginners learning a new programming language. In Go, this program demonstrates the basic structure and syntax of a Go application.

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
Modify the program to print "Welcome to Go Programming!" instead of "Hello, World!".

<details>
<summary>Answer & Explanation</summary>

```go
package main

import "fmt"

func main() {
    fmt.Println("Welcome to Go Programming!")
}
```

This program demonstrates:
1. `package main` - Every Go program must start with a package declaration
2. `import "fmt"` - Imports the formatting package for console output
3. `func main()` - The entry point where program execution begins
4. `fmt.Println()` - Prints the string and adds a newline at the end

</details>
