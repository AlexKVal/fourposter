import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deletePost: function(post) {
      console.log('deletePost');
      post.destroyRecord();
    }
  }
});
