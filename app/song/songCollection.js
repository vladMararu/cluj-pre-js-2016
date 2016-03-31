import { Song } from './SongModel.js';

const Songs = Backbone.Collection.extend({
  model: Song,
});

export { Songs };
