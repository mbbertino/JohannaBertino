import Ember from 'ember';

var Router = Ember.Router.extend({
  // location: JohannaBertinoENV.locationType
  location: 'hash',
  rootURL: JohannaBertinoENV.rootURL
});

Router.map(function() {
  this.route('home', {path: '/'});
  this.route('login');
});

export default Router;
