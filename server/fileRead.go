/* 数据文件读取 */
package main

import (
	"encoding/csv"
	"os"
)

// 读取csv文件
func Csv_Read(path string) [][]string {
	file, _ := os.Open(path)
	defer file.Close()
	r := csv.NewReader(file)
	// 读取出csv数据的列名
	// columns, _ := r.Read()
	_, _ = r.Read()
	all, _ := r.ReadAll()
	return all
}
