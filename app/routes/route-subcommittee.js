import config from '../config/environment';
import Ember from 'ember';


export default Ember.Route.extend({

  model: function(params) {
    var key = config.myApiKey;
    var url = "http://congress.api.sunlightfoundation.com/committees?subcommittee=true&parent_committee_id=" + params.parent_committee_id + "&apikey=" + key + "&per_page=100";
    console.log(url);

    return Ember.$.getJSON(url).then(function(responseJSON) {
      return responseJSON.results;
    });

  }
});
