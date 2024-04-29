## 💡 1. <API 설계>
---
**1) 유튜버 개별 조회** <br>
⇒ GET /youtuber/:id <br>
⇒ id로 map에서 객체를 찾아서, 그 객체의 정보를 뿌려줌<br>
  -req : [params.id](http://params.id) ⇒ map에 저장된 key값을 전달<br>
-res : map에서 id로 객체를 조회해서 전달<br><br>

**2) 유튜버 등록**
⇒ POST /youtuber <br>
-req : body ⇒ channelTitle, sub=0, videoNum=0 신규 유튜버 정보 전달 ⇒ DB에 저장 <br>
-res : “channelTitle님, 유튜브 채널 생성 축하드립니다.” <br>
<br>

 **3) 유튜버 전체 조회** 
⇒ GET /youtubers<br>
-forEach문 사용하여 전체 출력<br>
<br>

**4) 유튜버 삭제** 
⇒ DELETE/youtuber/:id <br>
-req : pramas.id <br>
-res : “chnnelTitle님, 채널이 삭제되었습니다.” <br>
<br>

**5) 유튜버 전체 삭제**
⇒ DELETE/youtubers <br>
-req : X <br>
-res : “모든 채널이 삭제되었습니다.” <br>
<br>
**6) 개별 유튜버 수정**
⇒ PUT/youtubers/:id<br>
-req : [params.id](http://params.id), body ← channelTitle<br>
-res : “(이전)channelTitle님, 채널명이 channelTitle로 변경되었습니다.”
<br><br>

## 2. 리팩토링이란?

---

> **소프트웨어의 코드 내부(구조)를 변경하는 것**

*이해하기 쉽게… 성능 향상… 안정성…*
> 

🙄 **리팩토링은 언제하는 것이 좋을까..?** 

⇒ 에러(문제)가 n회 발견되었을 때 리팩토링

⇒ 리팩토링을 하면서 에러(문제)를 발견할 수 있음

⇒ 코드 리뷰할 때

**⇒** ⭐**기능을 추가하기 전**⭐ ex) API URL ‘설계’ 수정
<br><br>

## 3. HTTP 상태 코드

---

| 설명 | 상태코드 |
| --- | --- |
| 조회/수정/삭제 성공 | 200 |
| 등록 성공 | 201 |
| 찾는 페이지 없음 | 404 |
| 서버 오류 | 500 |
