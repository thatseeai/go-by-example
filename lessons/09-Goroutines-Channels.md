---
id: 09
title: 고루틴과 채널
summary: 동시성 기본: 고루틴, 버퍼 채널, select를 익힌다.
version: 1.0.0
tags: [Go, 동시성]
---

# 고루틴과 채널

## 예제 1: 고루틴 + 채널
```go
package main
import (
    "fmt"
    "time"
)
func worker(out chan<- int){
    for i:=1;i<=3;i++{ out<-i; time.Sleep(50*time.Millisecond) }
    close(out)
}
func main(){
    ch := make(chan int, 2)
    go worker(ch)
    for v := range ch { fmt.Println(v) }
}
```

**출력**
```
1
2
3
```

## 예제 2: select 타임아웃
```go
package main
import (
    "fmt"
    "time"
)
func main(){
    ch := make(chan string)
    go func(){
        time.Sleep(200*time.Millisecond)
        ch <- "done"
    }()
    select{
    case v:=<-ch: fmt.Println(v)
    case <-time.After(100*time.Millisecond): fmt.Println("timeout")
    }
}
```

**예상 출력**
```
timeout
```

## 연습 문제
1. N개의 작업을 워커 풀로 처리하고 합계를 구하라.
2. 컨텍스트 취소를 이용해 고루틴 누수를 방지하라(다음 장 연계).

## 참고
- https://go.dev/doc/effective_go#concurrency
