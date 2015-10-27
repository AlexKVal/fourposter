import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    createPost: function() {
      var newPost = this.get('newPost');
      console.log(newPost.author);
      console.log(newPost.text);
    }
  }
});
