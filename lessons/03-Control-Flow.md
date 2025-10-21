---
id: 03
title: 제어문(if, for, switch)
summary: Go의 단일 반복문 for와 switch 패턴을 익힌다.
version: 1.0.0
tags: [Go, 제어문]
---

# 제어문(if, for, switch)

## 예제 1: for 반복문
```go
package main
import "fmt"
func main(){
    sum := 0
    for i:=0; i<5; i++ { sum += i }
    fmt.Println(sum)
}
```

**출력**
```
10
```

## 예제 2: switch
```go
package main
import "fmt"
func main(){
    d := 3
    switch d {
    case 1,2: fmt.Println("low")
    case 3: fmt.Println("mid")
    default: fmt.Println("high")
    }
}
```

**출력**
```
mid
```

## 연습 문제
1. 1부터 100까지의 합을 구하라.
2. 점수에 따른 등급을 switch로 출력하라.

## 참고
- https://go.dev/ref/spec#For_statements
- https://go.dev/ref/spec#Switch_statements
