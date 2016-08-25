import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['chat-message'],
  messageStore: Ember.inject.service(),
  isEditing: false,
  message: {},
  editInput: Ember.computed.oneWay('message.text'),
  actions: {
    editMessage() {
      this.set('isEditing', true);
    },
    updateMessage() {
      let input = this.get('editInput');
      let message = this.get('message');
      this.get('messageStore').updateMessage(message, input);
      this.set('isEditing', false);
    }
  }
});
