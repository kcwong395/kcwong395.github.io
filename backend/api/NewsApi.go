package api

import (
	"context"
	"fmt"
	"github.com/gin-gonic/gin"
	"github.com/kcwong395/backend/dbUtil"
	"go.mongodb.org/mongo-driver/bson"
	"log"
)

type NewsApi struct {
	DBWrapper *dbUtil.DBWrapper
}

func (api *NewsApi) GetNews(ginContext *gin.Context) {

	newsCollection := api.DBWrapper.DB.Collection("news")

	cursor, err := newsCollection.Find(context.Background(), bson.M{})
	if err != nil {
		log.Fatal(err)
	}

	var news []bson.M
	if err := cursor.All(context.Background(), &news); err != nil {
		log.Fatal(err)
	}
	fmt.Println(news)

	ginContext.IndentedJSON(200, news)
}
