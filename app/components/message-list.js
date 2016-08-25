import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['message-list'],
  messages: Ember.A([
    {
      id: 1,
      text: 'hello world'
    },
    {
      id: 2,
      text: 'whatever'
    }
  ]),

  onMessagesChange: Ember.observer('messages.[]', function() {
    Ember.run.later(() => {
      var ele = this.$('.message-list-content')[0];
      ele.scrollTop = ele.scrollHeight;
    });
  })
});
