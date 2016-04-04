import { Song } from './SongModel.js';

const Songs = Backbone.Collection.extend({
  model: Song,
  addMockUser: function () {
    this.add();
  },
});

export { Songs };
