var HomepageView = BaseView.extend({
  initialize: function () {
    this.SongsList = new songsListView({
      collection: songsList
    });
    this.PlaylistsList = new playlistsListView({
      collection: playlistsList
    });

  },
  render: function () {
      //this.SongsList.render();
      //this.$el.append(this.SongsList.el);
      this.PlaylistsList.render();
      this.$el.append(this.PlaylistsList.el);

  }
});
