---
id: 07
title: 인터페이스
summary: 암시적 구현, 빈 인터페이스, 타입 단언/스위치 패턴을 익힌다.
version: 1.0.0
tags: [Go, 인터페이스]
---

# 인터페이스

## 예제 1: 인터페이스 암시적 구현
```go
package main
import "fmt"
type Stringer interface{ String() string }
type User struct{ Name string }
func (u User) String() string { return "User:"+u.Name }
func Print(s Stringer){ fmt.Println(s.String()) }
func main(){ Print(User{"Lee"}) }
```

**출력**
```
User:Lee
```

## 예제 2: 타입 스위치
```go
package main
import "fmt"
func kind(x any){
    switch x.(type){
    case int: fmt.Println("int")
    case string: fmt.Println("string")
    default: fmt.Println("other")
    }
}
func main(){ kind(1); kind("a"); kind(3.14) }
```

**출력**
```
int
string
other
```

## 연습 문제
1. `error` 인터페이스를 사용자 정의 타입으로 구현하라.
2. io.Reader를 만족하는 가짜(reader) 타입을 만들어보라.

## 참고
- https://go.dev/ref/spec#Interface_types
