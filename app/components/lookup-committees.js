// import config from '../config/environment';
import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    committeesLookup() {
      this.sendAction('committeesLookup');
    }
  }
});
