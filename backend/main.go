package main

import (
	"github.com/gin-gonic/gin"
	"github.com/kcwong395/backend/api"
	"github.com/kcwong395/backend/dbUtil"
	"log"
)

func main() {

	dbw, err := dbUtil.Init()
	if err != nil {
		panic(err)
	}
	defer dbw.Close()

	// init gin
	engine := gin.Default()
	engine.Use(func(c *gin.Context) {
		c.Header("Access-Control-Allow-Origin", "*")
		c.Next()
	})

	projectApi := api.ProjectApi{DBWrapper: dbw}
	newsApi := api.NewsApi{DBWrapper: dbw}
	profileApi := api.ProjectApi{DBWrapper: dbw}
	engine.GET("/profile", profileApi.GetProjects)
	engine.GET("/news", newsApi.GetNews)
	engine.GET("/projects", projectApi.GetProjects)

	// Start the go server
	if err := engine.Run(); err != nil {
		log.Fatal(err.Error())
	}
}
