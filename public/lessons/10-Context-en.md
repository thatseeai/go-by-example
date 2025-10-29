# 10: Context

## Description
The context package in Go provides a way to propagate cancellation signals and deadlines across API boundaries and between processes. It's essential for handling timeouts and cancellation in concurrent programs.

## Example Code
```go
package main

import (
    "context"
    "fmt"
    "time"
)

// Function that respects context cancellation
func doWork(ctx context.Context, workID string) error {
    // Simulate some work
    for i := 0; i < 5; i++ {
        select {
        case <-ctx.Done():
            fmt.Printf("Work %s cancelled: %v\n", workID, ctx.Err())
            return ctx.Err()
        default:
            fmt.Printf("Work %s progress: %d/5\n", workID, i+1)
            time.Sleep(200 * time.Millisecond)
        }
    }
    
    fmt.Printf("Work %s completed\n", workID)
    return nil
}

func main() {
    // Create a context with 1 second timeout
    ctx, cancel := context.WithTimeout(context.Background(), 1*time.Second)
    defer cancel()
    
    // Start multiple goroutines
    go doWork(ctx, "A")
    go doWork(ctx, "B")
    
    // Wait for context to timeout
    <-ctx.Done()
    fmt.Printf("Context done: %v\n", ctx.Err())
    
    // Create a new context with cancellation
    ctx2, cancel2 := context.WithCancel(context.Background())
    go doWork(ctx2, "C")
    
    // Cancel after 500ms
    time.Sleep(500 * time.Millisecond)
    cancel2()
    
    // Give some time for cancellation to be processed
    time.Sleep(100 * time.Millisecond)
    fmt.Println("Main program finished")
}
```

## How to Run
Open a terminal and run:
```bash
go run context.go
```

## Practice Problems
Create a function that uses context with a deadline to fetch data from an API (simulated) and handles cancellation properly.

<details>
<summary>Answer & Explanation</summary>

```go
package main

import (
    "context"
    "fmt"
    "net/http"
    "time"
)

// Simulated API call that respects context
func fetchData(ctx context.Context, url string) (string, error) {
    // Simulate network delay
    select {
    case <-time.After(2 * time.Second):
        return fmt.Sprintf("Data from %s", url), nil
    case <-ctx.Done():
        return "", fmt.Errorf("request to %s cancelled: %v", url, ctx.Err())
    }
}

func main() {
    // Example 1: Context with timeout
    fmt.Println("=== Example 1: Timeout ===")
    ctx1, cancel1 := context.WithTimeout(context.Background(), 500*time.Millisecond)
    defer cancel1()
    
    data, err := fetchData(ctx1, "https://api.example.com/data")
    if err != nil {
        fmt.Printf("Error: %v\n", err)
    } else {
        fmt.Printf("Received: %s\n", data)
    }
    
    // Example 2: Context with cancellation
    fmt.Println("\n=== Example 2: Manual Cancellation ===")
    ctx2, cancel2 := context.WithCancel(context.Background())
    
    // Start a goroutine that will try to fetch data
    go func() {
        data, err := fetchData(ctx2, "https://api.example.com/data")
        if err != nil {
            fmt.Printf("Error in goroutine: %v\n", err)
        } else {
            fmt.Printf("Received in goroutine: %s\n", data)
        }
    }()
    
    // Cancel the context after 100ms
    time.Sleep(100 * time.Millisecond)
    cancel2()
    
    // Give some time for cleanup
    time.Sleep(50 * time.Millisecond)
    fmt.Println("Manual cancellation completed")
    
    // Example 3: Using context in HTTP request (simulated)
    fmt.Println("\n=== Example 3: HTTP Request Context ===")
    ctx3, cancel3 := context.WithTimeout(context.Background(), 1*time.Second)
    defer cancel3()
    
    // Simulate making an HTTP request with context
    reqCtx, cancelReq := context.WithTimeout(ctx3, 800*time.Millisecond)
    defer cancelReq()
    
    // Simulate request processing
    select {
    case <-reqCtx.Done():
        fmt.Printf("HTTP request cancelled: %v\n", reqCtx.Err())
    default:
        fmt.Println("Processing HTTP request...")
        time.Sleep(300 * time.Millisecond)
        fmt.Println("HTTP request completed successfully")
    }
}
```

This program demonstrates:
1. Creating contexts with timeouts using `context.WithTimeout()`
2. Creating contexts with cancellation using `context.WithCancel()`
3. Using `select` statements to check for context cancellation
4. Propagating context through goroutines and function calls
5. Proper cleanup with `defer cancel()` to prevent resource leaks
6. Simulating context-aware operations like HTTP requests

</details>
