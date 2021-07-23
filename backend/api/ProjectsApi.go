package api

import (
	"context"
	"fmt"
	"github.com/gin-gonic/gin"
	"github.com/kcwong395/backend/dbUtil"
	"go.mongodb.org/mongo-driver/bson"
	"log"
)

type ProjectApi struct {
	DBWrapper *dbUtil.DBWrapper
}

func (api *ProjectApi) GetProjects(ginContext *gin.Context) {

	projectCollection := api.DBWrapper.DB.Collection("project")

	cursor, err := projectCollection.Find(context.Background(), bson.M{})
	if err != nil {
		log.Fatal(err)
	}

	var projects []bson.M
	if err := cursor.All(context.Background(), &projects); err != nil {
		log.Fatal(err)
	}
	fmt.Println(projects)

	ginContext.IndentedJSON(200, projects)
}
