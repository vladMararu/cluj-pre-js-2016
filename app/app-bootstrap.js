import { Songs } from './song/songCollection.js';
import { Playlists } from './playlist/playlistCollection.js';
import { HomepageView } from './app/homepageView.js';


export function startApp() {
  const mockSongs = [
    {
      songTitle: 'song 1',
      songAuthor: 'author 1',
      songLength: '1:03',
      songListened: 2,
      img: null,
    },
    {
      songTitle: 'song 2',
      songAuthor: 'author 1',
      songLength: '1:03',
      songListened: 2,
      img: null,
    },
    {
      songTitle: 'song 3',
      songAuthor: 'author 1',
      songLength: '1:03',
      songListened: 2,
      img: null,
    },
  ];

  const mockPlaylists = [
    {
      id: 0,
      title: 'title playlist 1',
      imgSmall: '../core/assets/up-all-night-small.png',
      imgBig: '../core/assets/up-all-night.png',
      description: 'playlist 1 descritpion',
    },
    {
      id: 1,
      title: 'title playlist 2',
      imgSmall: '../core/assets/up-all-night-small.png',
      imgBig: '../core/assets/up-all-night.png',
      description: 'playlist 2 descritpion',
    },
    {
      id: 2,
      title: 'title playlist 3',
      imgSmall: '../core/assets/up-all-night-small.png',
      imgBig: '../core/assets/up-all-night.png',
      description: 'playlist 3 descritpion',
    },
    {
      id: 3,
      title: 'title playlist 4',
      imgSmall: '../core/assets/up-all-night-small.png',
      imgBig: '../core/assets/up-all-night.png',
      description: 'playlist 4 descritpion',
    },
  ];

  const songsList = new Songs(mockSongs);
  const playlistsList = new Playlists(mockPlaylists);
  const homepageViewItem = new HomepageView({
    el: $('#page')[0],
    songsList: songsList,
    playlistsList: playlistsList
  });
  homepageViewItem.render();
}

// export { songsList };
