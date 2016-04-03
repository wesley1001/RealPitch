package user

import (
  "net/http"
  "../di"
  "encoding/json"
  "gopkg.in/mgo.v2/bson"
)

type User struct {
  ID       bson.ObjectId `json:"_id,omitempty" bson:"_id,omitempty"`
  Email    string `json:"email" bson:"email"`
  Password string `json:"password" bson:"password"`
}

func SignUpUser(di *di.DI) func(w http.ResponseWriter, req *http.Request) {
  return func(w http.ResponseWriter, req *http.Request) {
    decoder := json.NewDecoder(req.Body)
    user := User{ID: bson.NewObjectId()}
    decodeErr := decoder.Decode(&user)

    if decodeErr != nil {
      http.Error(w, "Error decoding POST body", 400)
      return
    }

    duplicateUser := User{}
    duplicateErr := di.UserCollection.Find(bson.M{"email": user.Email}).One(&duplicateUser)

    if duplicateErr == nil {
      http.Error(w, "Duplicate email", 400)
      return
    }

    singupErr := di.UserCollection.Insert(&user)

    if singupErr != nil {
      http.Error(w, "Internal error while singing up", 500)
      return
    }

    w.Write([]byte(user.ID.Hex()))

    return
  }
}

func LoginUser(di *di.DI) func(w http.ResponseWriter, req *http.Request) {
  return func(w http.ResponseWriter, req *http.Request) {
    decoder := json.NewDecoder(req.Body)
    user := User{}
    decodeErr := decoder.Decode(&user)

    if decodeErr != nil {
      http.Error(w, "Error decoding POST body", 500)
      return
    }

    result := User{}
    mongoErr := di.UserCollection.Find(bson.M{"email": user.Email, "password": user.Password}).One(&result)

    if mongoErr != nil {
      http.Error(w, "Not a valid email or password", 500)
      return
    }

    w.Write([]byte(result.ID.Hex()))

    return
  }
}