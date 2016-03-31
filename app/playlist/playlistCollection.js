import { Playlist } from './PlaylistModel.js';

const Playlists = Backbone.Collection.extend({
  model: Playlist,
});

export { Playlists };
