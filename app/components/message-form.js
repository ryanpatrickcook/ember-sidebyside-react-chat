import Ember from 'ember';

export default Ember.Component.extend({
  input: '',
  messageStore: Ember.inject.service(),

  actions: {
    submitMessage() {
      let input = this.get('input');
      if (Ember.isEmpty(input)) {
        return;
      }
      this.sendAction('addMessage', this.get('input'));
      this.set('input', '');
    }
  }
});
