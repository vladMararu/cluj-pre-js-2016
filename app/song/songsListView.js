var songsListView = BaseView.extend({
  initialize: function () {
    this.listenTo(this.collection, 'all', this.render);
  },
  template: function () {
    return this.renderTemplate('#template-SongsListView');
  },
  render: function () {
    var that = this;
    this.$el.html(this.template());
    this.collection.models.forEach( function (model) {
      var view = new songItemView({model: model});
      view.render();
      that.$el.append(view.el);
    });
  }
});
