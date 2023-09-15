# framework ที่ใช้
คือ exexpress generator เป็น framework ของ nodejs
# วิธีการติดตั้ง
1.install nodejs (ถ้ายังไม่มีnodejs)

2.clone git 
    
* เลือกโฟเดอร์ที่เราจะเอา project นี้ไปไว้
    
* คลิก path โฟเดอร์ เเล้วพิมพ์ cmd เพื่อเปิด command
* คัดลอกคำสังข้างล่างนี้ ไปไว้ที่ command

```sh
    git clone https://github.com/korn9480/api_challenge.git
```
3.install node_modules

```sh
    cd api_challenge
    npm i
```
# คำสั่ง run
```sh
    npm start
```
# วิธีทดสอบ api 
api ที่ได้รับมอบให้ทำมี 1 api คือ

* http://localhost:3000/api/v1/test/:number

## ตัวอย่างการเรียกใช้ api
### เเบบไม่มีข้อผิดพลาด
```sh
    http://localhost:3000/api/v1/test/8
```
ผลลัพธ์ที่ได้
```
{
    "member_count": "8",
    "sequence": [0,1,1,2,3,5,8,13],
    "total": 33
}
```

## เเบบที่มีข้อผิดพลาด
```sh
    http://localhost:3000/api/v1/test/-1
```
ผลลัพธ์ที่ได้ จะขึ้นข้อความ error ว่า
* เลข -1 ไม่ได้อยู่ในช่วง 1-100

___________________________________
```sh
    http://localhost:3000/api/v1/test/101
```
ผลลัพธ์ที่ได้ จะขึ้นข้อความ error ว่า
* เลข 101 ไม่ได้อยู่ในช่วง 1-100