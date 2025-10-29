# 09: Goroutines and Channels

## Description
Go's concurrency model is based on goroutines and channels. Goroutines are lightweight threads managed by the Go runtime, while channels are used to communicate between goroutines.

## Example Code
```go
package main

import (
    "fmt"
    "time"
)

func main() {
    // Create a channel
    messages := make(chan string)
    
    // Start a goroutine
    go func() {
        time.Sleep(1 * time.Second)
        messages <- "Hello from goroutine!"
    }()
    
    // Receive from channel
    msg := <-messages
    fmt.Println(msg)
    
    // Buffered channel example
    buffered := make(chan int, 2)
    buffered <- 1
    buffered <- 2
    
    fmt.Printf("Buffered channel has %d items\n", len(buffered))
    
    // Reading from buffered channel
    fmt.Printf("Received: %d\n", <-buffered)
    fmt.Printf("Received: %d\n", <-buffered)
    
    // Using channel with range
    numbers := make(chan int, 5)
    go func() {
        for i := 1; i <= 5; i++ {
            numbers <- i
        }
        close(numbers)
    }()
    
    fmt.Println("Reading from channel:")
    for num := range numbers {
        fmt.Printf("Number: %d\n", num)
    }
}
```

## How to Run
Open a terminal and run:
```bash
go run goroutines-channels.go
```

## Practice Problems
Create a program that uses multiple goroutines to calculate the sum of numbers from 1 to 1000, with each goroutine handling a portion of the numbers.

<details>
<summary>Answer & Explanation</summary>

```go
package main

import (
    "fmt"
    "sync"
)

func sumRange(start, end int, result chan int, wg *sync.WaitGroup) {
    defer wg.Done()
    
    sum := 0
    for i := start; i <= end; i++ {
        sum += i
    }
    
    result <- sum
}

func main() {
    const total = 1000
    const numGoroutines = 4
    
    // Calculate chunk size
    chunkSize := total / numGoroutines
    
    // Channel to collect results
    result := make(chan int, numGoroutines)
    
    // WaitGroup to wait for all goroutines
    var wg sync.WaitGroup
    
    // Start goroutines
    for i := 0; i < numGoroutines; i++ {
        wg.Add(1)
        start := i*chunkSize + 1
        end := (i+1)*chunkSize
        
        // Handle the last chunk to include remaining numbers
        if i == numGoroutines-1 {
            end = total
        }
        
        go sumRange(start, end, result, &wg)
    }
    
    // Close channel when all goroutines are done
    go func() {
        wg.Wait()
        close(result)
    }()
    
    // Collect results
    finalSum := 0
    for sum := range result {
        finalSum += sum
    }
    
    fmt.Printf("Sum of numbers from 1 to %d: %d\n", total, finalSum)
    
    // Verify with mathematical formula: n(n+1)/2
    expected := total * (total + 1) / 2
    fmt.Printf("Expected (using formula): %d\n", expected)
}
```

This program demonstrates:
1. Creating goroutines with `go func()`
2. Using channels to communicate between goroutines
3. Using `sync.WaitGroup` to wait for all goroutines to complete
4. Buffered channels and channel closing
5. Using `range` to iterate over channel values
6. Concurrent computation with proper synchronization

</details>
