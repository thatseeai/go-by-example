---
id: 02
title: 변수와 타입
summary: 짧은 선언(:=), 타입 추론, 기본 타입을 다룬다.
version: 1.0.0
tags: [Go, 변수, 타입]
---

# 변수와 타입

## 예제 1: 짧은 선언과 타입 확인
```go
package main
import "fmt"
func main() { 
    i := 42
    var s string = "go"
    fmt.Printf("%T %v\n", i, i)
    fmt.Printf("%T %q\n", s, s)
}
```

**출력**
```
int 42
string "go"
```

## 예제 2: 상수와 iota
```go
package main
import "fmt"
const (
    A = iota
    B
    C
)
func main(){ fmt.Println(A, B, C) }
```

**출력**
```
0 1 2
```

## 연습 문제
1. bool, float64, rune 변수를 각각 선언하고 값을 출력하라.
2. 상수 iota를 이용해 요일 열거형을 만들어 보라.

## 참고
- https://go.dev/ref/spec#Variables
- https://go.dev/ref/spec#Constants
