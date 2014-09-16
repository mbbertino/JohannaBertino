import Ember from 'ember';

var Router = Ember.Router.extend({
  location: JohannaBertinoENV.locationType
});

Router.map(function() {
  this.route('home', {path: '/'});
  this.route('login');
});

export default Router;
