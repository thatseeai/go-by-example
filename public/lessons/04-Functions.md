---
id: 04
title: 함수와 가변 인자
summary: 다중 반환값, 네임드 리턴, 가변 인자 처리법을 배운다.
version: 1.0.0
tags: [Go, 함수]
---

# 함수와 가변 인자

## 예제 1: 다중 반환값
```go
package main
import "fmt"
func divmod(a, b int) (q, r int) { q = a/b; r = a%b; return }
func main(){ q,r := divmod(7,3); fmt.Println(q, r) }
```

**출력**
```
2 1
```

## 예제 2: 가변 인자
```go
package main
import "fmt"
func sum(nums ...int) int { s:=0; for _,n:= range nums { s+=n }; return s }
func main(){ fmt.Println(sum(1,2,3)) }
```

**출력**
```
6
```

## 연습 문제
1. 피보나치 n번째 수를 반환하는 함수를 작성하라.
2. 에러와 값을 두 개 반환하는 함수를 작성하고 호출부에서 분기하라.

## 참고
- https://go.dev/ref/spec#Function_declarations
