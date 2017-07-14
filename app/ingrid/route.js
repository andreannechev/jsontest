import Ember from 'ember';

const { Route, set } = Ember;

export default Route.extend({
  // model() { //model hoock
  //   return this.store.findAll('ingrid'); //name of the model
  // }

  model() { //model hoock
    return this.store.queryRecord('ingrid', {
      query: "lets go",
      lang: "en",
      sessionId: '1234567890'

    }); //name of the model
  }
<<<<<<< HEAD
//
=======



>>>>>>> query
});
