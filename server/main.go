package main

import (
	"fmt"
	"net/http"
)

func main() {
	// 初始化数据库
	Database_main()

	// 接口函数
	http.HandleFunc("/database_login", Database_Login)

	fmt.Println("启动成功")
	http.ListenAndServe(":5001", nil)
}
