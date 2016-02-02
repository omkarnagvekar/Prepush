import Ember from "ember";

export default Ember.Route.extend({
  // activate: function() {},
  // deactivate: function() {},
  // setupController: function(controller, model) {},
  // renderTemplate: function() {},
  // beforeModel: function() {},
  // afterModel: function() {},

  model() {
  	if (true) {
      console.log("if executed successfully");
  	} else {
  		console.log("else executed");
  	}
    return "Test route";
  }
});
