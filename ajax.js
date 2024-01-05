/*
UI = User Interface => user tương tác với user thông qua giao diện
CLI = CommandLine Interface => user tương tác với system thông qua dòng lệnh
API = Application Programming Interface => system tương tác với system
*/

/*
HTTP response code:

2xx: Success
200 -> Thành công
201 -> Thêm mới thành công 

4xx: Client error
401 -> Không được xác thực
404 -> Không tìm thấy

5xx: Server error
500 -> Server lỗi
*/

/* 
HTTP request methods:

GET: Truy cập, truy xuất tài nguyên đã có sẵn
POST: Bổ sung, thêm mới tài nguyên
PUT || PATH: Cập nhật toàn bộ || Cật nhật 1 phần
DELETE: Xoá đi tài nguyên đã có sẵn

*/

/*
JSON.stringify() => convert object to json
JSON.parse() => convert json to object
*/

/*
0	UNSENT	Client has been created. open() not called yet.
1	OPENED	open() has been called.
2	HEADERS_RECEIVED	send() has been called, and headers and status are available.
3	LOADING	Downloading; responseText holds partial data.
4	DONE	The operation is complete.
*/
