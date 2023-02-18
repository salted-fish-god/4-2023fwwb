package main

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"strings"

	_ "github.com/go-sql-driver/mysql" // 导入使用 MySQL 数据库所需要的驱动
)

// 定义数据库表写入的数据结构
type Login_table struct {
	id       string
	name     string
	account  string
	identity string
	password string
}

// 定义好登录数据库要用的相关常量
const (
	Username     = "root"
	Password     = "BH(3abrrhp>Dji"
	Ip           = "120.26.13.156"
	Port         = "3306"
	DatabaseName = "1-fwwb"
)

// 数据库（操作）句柄，代表一个具有零到多个底层连接的连接池
var DB *sql.DB

// 初始化函数
func initDB() {
	path := strings.Join([]string{Username, ":", Password, "@tcp(", Ip, ":", Port, ")/", DatabaseName, "?charset=utf8"}, "")
	// 连接数据库
	DB, _ = sql.Open("mysql", path)
	// 设置最大连接总数
	DB.SetConnMaxLifetime(100)
	// 设置数据库的最大空闲数
	DB.SetMaxIdleConns(10)
	// 判断是否连接成功
	if err := DB.Ping(); err != nil {
		fmt.Println("Open database fail")
		return
	}
	fmt.Println("Open database success")
}

// 写入login表
func Insert_Login() bool {
	// 开启事务
	tx, err := DB.Begin()
	if err != nil { // 事务开启成功判断
		fmt.Println("数据库 —— 事务开启失败！")
		return false
	}

	// /* 删除先前创建的表 */
	// // 准备 MySQL 语句
	// stmt, err := tx.Prepare("drop table if exists `login`;")
	// // defer stmt.Close() // 及时Close stmt
	// if err != nil {
	// 	fmt.Println("删除先前表 准备失败, ", err)
	// 	return false
	// }
	// // 执行 MySQL 语句
	// _, err = stmt.Exec()
	// if err != nil {
	// 	fmt.Println("删除先前表 执行失败, ", err)
	// 	return false
	// }
	// stmt.Close()

	// /*创建表*/
	// stmt, err = tx.Prepare("create table `login` ( id varchar(20), name varchar(30), account varchar(20), identity varchar(10), password varchar(20) );")
	// if err != nil {
	// 	fmt.Println("创建表 准备失败, ", err)
	// 	return false
	// }
	// _, err = stmt.Exec()
	// if err != nil {
	// 	fmt.Println("创建表 执行失败, ", err)
	// 	return false
	// }
	// stmt.Close()

	// // 读取登录数据
	// dataset := Csv_Read("./data/login.csv")
	// // 数据写入
	// for i := 0; i < len(dataset); i += 3 {
	// 	str_sql := "insert into login(id, name, account, identity, password) values "
	// 	length := i + 3
	// 	if (i + 3) > len(dataset) {
	// 		length = len(dataset)
	// 	}
	// 	for j := i; j < length; j++ {
	// 		if j != i {
	// 			str_sql += ", "
	// 		}
	// 		str_sql += "("
	// 		for z := 0; z < len(dataset[j]); z++ {
	// 			if z != 0 {
	// 				str_sql += ", "
	// 			}
	// 			str_sql += "'" + dataset[j][z] + "'"
	// 		}
	// 		str_sql += ")"
	// 	}
	// 	stmt, err = tx.Prepare(str_sql)
	// 	if err != nil {
	// 		fmt.Println(i, "写入 准备失败, ", err)
	// 		return false
	// 	}
	// 	_, err = stmt.Exec()
	// 	if err != nil {
	// 		fmt.Println(i, "写入 执行失败, ", err)
	// 		return false
	// 	}
	// 	stmt.Close()
	// }

	// 查询
	rows, err := tx.Query("select * from login where account = ? and password = ?", "20211004050", "123")
	if err != nil {
		fmt.Println("query failed, err is ", err)
		return false
	}
	defer rows.Close() // 释放rows持有的数据库链接

	le_ := 0
	for rows.Next() {
		le_ += 1
	}
	fmt.Println(le_)

	// 提交事务
	tx.Commit()
	return true
}

// 数据库操作集成函数
func Database_main() {
	initDB()
	// if Insert_Login() {
	// 	fmt.Println("success")
	// } else {
	// 	fmt.Println("Fail !!!")
	// }
}

/* 登录查询 */
type database_login_type struct {
	Id       string `json:"id"`
	Name     string `json:"name"`
	Account  string `json:"account"`
	Identity string `json:"identity"`
	Password string `json:"password"`
}

func Database_Login(w http.ResponseWriter, r *http.Request) {
	// 解决跨域问题：
	w.Header().Set("Access-Control-Allow-Origin", "*")             //允许访问所有域
	w.Header().Add("Access-Control-Allow-Headers", "Content-Type") //header的类型
	w.Header().Set("content-type", "application/json")             //返回数据格式是json
	if r.Method == "POST" {
		// 接收前端传入的数据
		decoder := json.NewDecoder(r.Body)
		var params map[string]string
		decoder.Decode(&params)
		if params != nil {
			tx, err := DB.Begin()
			if err != nil { // 事务开启成功判断
				fmt.Println("数据库 —— 事务开启失败！")
				io.WriteString(w, "")
				return
			}
			// 查询
			rows, err := tx.Query("select * from login where account = ? and password = ? and identity = ?", params["account"], params["password"], params["identity"])
			if err != nil {
				fmt.Println("query failed, err is ", err)
				io.WriteString(w, "")
				return
			}
			defer rows.Close() // 释放rows持有的数据库链接
			for rows.Next() {
				var data_item database_login_type
				err := rows.Scan(&data_item.Id, &data_item.Name, &data_item.Account, &data_item.Identity, &data_item.Password)
				if err != nil {
					fmt.Println("database query login fail, ", err)
					io.WriteString(w, "")
				}
				data_item_json, _ := json.Marshal(data_item)
				io.WriteString(w, string(data_item_json))
				fmt.Println(data_item.Name, "登录成功！")
				break
			}
			// 提交事务
			tx.Commit()
		}
	}
}
