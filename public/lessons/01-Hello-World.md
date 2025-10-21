---
id: 01
title: Hello, World
summary: Go 프로그램의 최소 구조와 빌드/실행을 배운다.
version: 1.0.0
tags: [Go, 시작]
---

# Hello, World

## 예제 1: 최소한의 Go 프로그램
```go
package main
import "fmt"
func main() { fmt.Println("Hello, World") }
```

**실행**
```bash
go run main.go
```

**출력**
```
Hello, World
```

## 예제 2: 빌드 후 실행
```go
// 파일: main.go
package main
import "fmt"
func main(){ fmt.Println("Hello, Build!") }
```

**빌드/실행**
```bash
go build -o app
./app
```

**출력**
```
Hello, Build!
```

## 연습 문제
1. `Hello, <당신의_이름>`을 출력하라.
2. 두 줄을 출력하도록 예제를 수정하라.

## 참고
- https://pkg.go.dev/fmt
- https://go.dev/doc/tutorial/
