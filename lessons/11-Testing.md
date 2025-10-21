---
id: 11
title: 테스트와 벤치마크
summary: 표준 testing 패키지로 단위 테스트/벤치마크를 작성한다.
version: 1.0.0
tags: [Go, 테스트]
---

# 테스트와 벤치마크

## 예제 1: 단위 테스트
```go
// 파일: sum.go
package sum
func Sum(nums ...int) int { s:=0; for _,n := range nums { s+=n }; return s }

// 파일: sum_test.go
package sum
import "testing"
func TestSum(t *testing.T){
    if got:=Sum(1,2,3); got!=6 { t.Fatalf("got %d", got) }
}
```

**실행**
```bash
go test ./...
```

## 예제 2: 벤치마크
```go
// 파일: sum_test.go
package sum
import "testing"
func BenchmarkSum(b *testing.B){
    for i:=0;i<b.N;i++{ Sum(1,2,3,4,5) }
}
```

**실행**
```bash
go test -bench=.
```

## 연습 문제
1. 테이블 주도 테스트를 작성하라.
2. b.ReportAllocs로 할당을 측정하라.

## 참고
- https://pkg.go.dev/testing
