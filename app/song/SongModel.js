const Song = Backbone.Model.extend({
  defaults: {
    songTitle: 'default song title',
    songAuthor: 'default song author',
    songLength: 'default song length',
    songListened: 'default song counter',
    img: 'default song image',
  },
});

export { Song };
