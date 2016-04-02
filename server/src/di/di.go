package di

import (
  mgo "gopkg.in/mgo.v2"
)

type DI struct {
  NewsfeedCollection *mgo.Collection
  UserCollection *mgo.Collection
}
