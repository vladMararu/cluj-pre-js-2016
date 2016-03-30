var playlistTableView = BaseView.extend({
  template: function (values) {
    return this.renderTemplate('#template-playlist-table-view', values);
  },
  render: function () {
    this.$el.html(this.template(this.model.attributes));
  }
});
