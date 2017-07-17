import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    setQuery(){
      var newQuery = this.get('newQuery');

      // new Query record
      var nextQuery = this.store.createRecord('ingrid',{
        userQuery: newQuery
      });

      //Clear
      this.setProperties({
        newQuery: ''
      });
    }
  }

});
