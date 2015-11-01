import Reflux from 'reflux';
import Actions from '../actions/actions';

let messages = [
  "We like it here",
  "Lingus",
  "Snarky Puppy!"
];

let Store = Reflux.createStore({
  init () {
    this.message = messages[0];
    this.listenToMany(Actions);
  },

  onUpdateMessage () {
    while(true) {
      let newMessage = messages[Math.floor(Math.random() * messages.length)];

      if (newMessage !== this.message) {
        this.message = newMessage;
        break;
      }
    }

    this.trigger(this.message);
  }
});

export default Store;
