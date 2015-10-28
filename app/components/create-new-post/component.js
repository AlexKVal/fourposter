import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    createPost: function(model) {
      console.log('component#createPost', model.title);

      this.sendAction('createPost', model);

      this.set('newPost.title', null);
      this.set('newPost.author', null);
      this.set('newPost.text', null);
    }
  }
});
