package newsfeed

import (
  "fmt"
  "net/http"
  "../di"
  "gopkg.in/mgo.v2/bson"
  "encoding/json"
)

type Newsfeed struct {
  Title string `json:"title" bson:"title"`
  Artist string `json:"artist" bson:"artist"`
  Inst string `json:"inst" bson:"inst"`
}

func GetNewsFeed (di *di.DI) func (w http.ResponseWriter, req *http.Request) {
  return func (w http.ResponseWriter, req *http.Request) {

    var newsfeedData []Newsfeed
    mongoErr := di.NewsfeedCollection.Find(bson.M{}).All(&newsfeedData)

    if mongoErr != nil {
      http.Error(w, "Internal error", 500)
      return
    }

    newsfeedJSON, newsfeedError := json.Marshal(newsfeedData)

    if newsfeedError != nil {
      http.Error(w, "Internal error", 500)
      return
    }

    w.Write(newsfeedJSON)

    return
  }
}

func AddNewsFeed (di *di.DI) func (w http.ResponseWriter, req *http.Request) {
  return func (w http.ResponseWriter, req *http.Request) {

    decoder := json.NewDecoder(req.Body)
    n := Newsfeed{}
    decodeErr := decoder.Decode(&n)

    if decodeErr != nil {
      http.Error(w, "Internal error", 500)
      return
    }

    insertErr := di.NewsfeedCollection.Insert(&n)

    if insertErr != nil {
      http.Error(w, "Internal error", 500)
      return
    }

    fmt.Printf("ADDING NEWSFEED!\n")

    return
  }
}
