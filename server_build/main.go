package main

import (
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()
	r.StaticFS("../build", http.Dir("../build/"))
	r.LoadHTMLFiles("../build/index.html")

	r.StaticFile("/favicon.ico", "../build/favicon.ico")
	r.StaticFile("/logo192.png", "../build/logo192.png")
	r.StaticFile("/manifest.json", "../build/manifest.json")
	r.StaticFile("/static/js/main.74775574.js", "../build/static/js/main.74775574.js")

	r.StaticFile("/static/css/main.f695e34f.css", "../build/static/css/main.f695e34f.css")

	r.StaticFile("/static/css/main.f695e34f.css.map", "../build/static/css/main.f695e34f.css.map")

	r.StaticFile("/static/js/main.74775574.js.map", "../build/static/js/main.74775574.js.map")

	r.GET("/", func(ctx *gin.Context) {
		ctx.HTML(http.StatusOK, "index.html", nil)
	})
	fmt.Println("启动成功！")
	r.Run(":5002")
}
