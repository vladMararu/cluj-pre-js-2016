import { BaseView } from '../app/baseView.js';
import { SongsListView } from '../song/SongsListView.js';

const playlistTableView = BaseView.extend({
  tagName: 'div',
  className: 'albums-text',
  events: {
    'click .button-explore': 'renderSongsList',
  },

  template: function template(values) {
    return this.renderTemplate('#template-playlist-table-view', values);
  },
  render: function render() {
    this.$el.html(this.template(this.model.attributes));
  },
  renderSongsList: function renderSongs() {
    // debugger;
    const songListView = new SongsListView({
      // el: document.getElementsByClassName('albums-text'),
      // collection: playlistsJSON,
    });
    songListView.render();
  },
});

export { playlistTableView };
