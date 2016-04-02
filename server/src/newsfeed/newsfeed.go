package newsfeed

import (
  "fmt"
  "net/http"
  "../di"
  "gopkg.in/mgo.v2/bson"
  "encoding/json"
)

type Newsfeed struct {
  MusicTitle string `json:"musicTitle" bson:"musicTitle"`
  Artist string `json:"artist" bson:"artist"`
  Inst string `json:"inst" bson:"inst"`
}

func GetNewsFeed (di *di.DI) func (w http.ResponseWriter, req *http.Request) {
  return func (w http.ResponseWriter, req *http.Request) {

    var newsfeedData []Newsfeed
    mongoErr := di.NewsfeedCollection.Find(bson.M{}).All(&newsfeedData)

    if mongoErr != nil {fmt.Printf("OOOPSSS")}

    newsfeedJSON, newsfeedError := json.Marshal(newsfeedData)

    if newsfeedError != nil {fmt.Printf("OOOOPSS")}

    w.Write(newsfeedJSON)
    fmt.Printf("GETTING NEWSFEED!\n")
  }
}

func AddNewsFeed (di *di.DI) func (w http.ResponseWriter, req *http.Request) {
  return func (w http.ResponseWriter, req *http.Request) {

    decoder := json.NewDecoder(req.Body)
    var n Newsfeed
    decodeErr := decoder.Decode(&n)

    if decodeErr != nil {fmt.Printf("OOOPPSSSS")}

    err := di.NewsfeedCollection.Insert(&n)

    if err != nil {fmt.Printf("OOOPPSSSS")}

    fmt.Printf("ADDING NEWSFEED!\n")
  }
}
