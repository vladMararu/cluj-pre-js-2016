var BaseView = Backbone.View.extend({
  renderTemplate: function (selectorString, options) {
    var templateText = document.querySelector(selectorString).innerText;
    var compiled = _.template(templateText);
    if (options !== null) {
      return compiled(options);
    }
    return compiled();
  }
});
