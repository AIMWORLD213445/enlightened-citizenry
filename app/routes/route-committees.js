import config from '../config/environment';
import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var key = config.myApiKey;
    var url = "http://congress.api.sunlightfoundation.com/committees?per_page=100&apikey=" + key;
    return Ember.$.getJSON(url).then(function(responseJSON) {
      return responseJSON.results;
    });
  },
  actions: {
    subcommitteeLookup(params) {
      this.transitionTo('route-subcommittee', params);
    }
  }
});
