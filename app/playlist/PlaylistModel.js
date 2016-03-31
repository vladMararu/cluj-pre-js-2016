import { Songs } from '../song/songCollection.js';

const Playlist = Backbone.Model.extend({
  defaults: {
    id: 0,
    title: 'default title',
    imgSmall: 'default url-img-small',
    imgBig: 'default url-img-big',
    description: 'default description of the playlist',
  },
  constructor: function constructor() {
    this.songs = new Songs();
    Backbone.Model.apply(this, arguments);
  },
});

export { Playlist };
