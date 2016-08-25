import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['chat-room'],
  messageStore: Ember.inject.service(),
  messages: Ember.computed.alias('messageStore.messages'),
  title: 'Application Title',

  appTitle: Ember.computed('title', function() {
    return `App: ${this.get('title')}`;
  }),

  actions: {
    newMessage(message) {
      this.get('messageStore').newMessage(message);
    }
  }
});
