### 💡<API 설계>
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
⇒
