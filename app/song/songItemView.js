var songItemView = BaseView.extend({
  template: function (values) {
    return this.renderTemplate('#template-SongInListView', values);
  },
  render: function () {
    this.$el.html(this.template(this.model.attributes));
  }
});
