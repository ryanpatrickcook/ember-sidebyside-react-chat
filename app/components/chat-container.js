import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['chat-room'],
  messageStore: Ember.inject.service(),
  messages: Ember.computed.alias('messageStore.messages'),
  title: 'Application Title',

  headingLabel: Ember.computed('title', 'messages.[]', function() {
    let messageCount = this.get('messages.length');
    return `App: ${this.get('title')} - (${messageCount})`;
  }),

  actions: {
    newMessage(message) {
      this.get('messageStore').newMessage(message);
    }
  }
});
