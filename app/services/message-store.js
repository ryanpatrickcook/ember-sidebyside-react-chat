import Ember from 'ember';

export default Ember.Service.extend({
  messages: Ember.A([
    Ember.Object.create({
      id: 1,
      text: 'hello world'
    }),
    Ember.Object.create({
      id: 2,
      text: 'whatever'
    })
  ]),

  newMessage(message) {
    let msg = Ember.Object.create({
      id: Date.now() + Math.round(Math.random()*10000),
      text: message
    });

    this.get('messages').pushObject(msg);
  },

  updateMessage(message, text) {
    let msg = this.get('messages').findBy('id', message.id);
    if (Ember.isPresent(msg)) {
      msg.set('text', text);
    }
  }
});
