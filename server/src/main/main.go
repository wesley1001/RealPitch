package main

import (
  "fmt"
  "github.com/codegangsta/negroni"
  "github.com/gorilla/mux"
  "../newsfeed"
  "../di"
  mgo "gopkg.in/mgo.v2"
)

type DI struct {
  NewsfeedCollection *mgo.Collection
}

func main() {
  session, err := mgo.Dial("192.168.99.100:32772")
  if err != nil {
    fmt.Printf("%v", err)
    return
  }

  NewsfeedCollection := session.DB("real_pitch").C("newsfeed")
  UserCollection := session.DB("real_pitch").C("user")

  di := di.DI{NewsfeedCollection, UserCollection}

  router := mux.NewRouter()

  newsfeedRoute := router.Path("/newsfeed").Subrouter()
  newsfeedRoute.Methods("GET").HandlerFunc(newsfeed.GetNewsFeed(&di))
  newsfeedRoute.Methods("POST").HandlerFunc(newsfeed.AddNewsFeed(&di))

  n := negroni.New()
  n.UseHandler(router)

  n.Run(":8080")
}
