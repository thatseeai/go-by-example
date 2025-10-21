---
id: 10
title: 컨텍스트(context)
summary: 취소, 데드라인, 값 전달 패턴을 익힌다.
version: 1.0.0
tags: [Go, context]
---

# 컨텍스트(context)

## 예제 1: 취소 전파
```go
package main
import (
    "context"
    "fmt"
    "time"
)
func work(ctx context.Context){
    for{
        select{
        case <-ctx.Done(): fmt.Println("cancelled"); return
        case <-time.After(50*time.Millisecond): fmt.Println("tick")
        }
    }
}
func main(){
    ctx, cancel := context.WithCancel(context.Background())
    go work(ctx)
    time.Sleep(120*time.Millisecond)
    cancel()
    time.Sleep(50*time.Millisecond)
}
```

**예상 출력**
```
tick
tick
cancelled
```

## 연습 문제
1. WithTimeout을 사용해 HTTP 요청을 타임아웃 처리하라.
2. 값 전달(Context WithValue) 남용의 문제점을 서술하라.

## 참고
- https://pkg.go.dev/context
