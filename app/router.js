import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('results', {path:'/results/:zip'});
  this.route('route-committees');
  this.route('route-subcommittee', {path:'/route-subcommittee/:parent_committee_id'});
});

export default Router;
