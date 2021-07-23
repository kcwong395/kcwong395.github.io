package api

import (
	"context"
	"fmt"
	"github.com/gin-gonic/gin"
	"github.com/kcwong395/backend/dbUtil"
	"go.mongodb.org/mongo-driver/bson"
	"log"
)

type ProfileApi struct {
	DBWrapper *dbUtil.DBWrapper
}

func (api *ProfileApi) GetProfile(ginContext *gin.Context) {

	profileCollection := api.DBWrapper.DB.Collection("profile")

	cursor, err := profileCollection.Find(context.Background(), bson.M{})
	if err != nil {
		log.Fatal(err)
	}

	var profile []bson.M
	if err := cursor.All(context.Background(), &profile); err != nil {
		log.Fatal(err)
	}
	fmt.Println(profile)

	ginContext.IndentedJSON(200, profile)
}
