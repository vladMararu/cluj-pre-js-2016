var playllistArray = JSON.parse(playlistsJSON);

function Playlist(id, title, imgSmall, imgBig, songs, description){
  this.id = id;
  this.title = title;
  this.imgSmall = imgSmall;
  this.imgBig = imgBig;
  this.songs = songs;
  this.description = description;
}

Playlist.prototype.setId = function(id){
  this.id = id;
}

Playlist.prototype.getId = function(){
  return this.id;
}

Playlist.prototype.setSongs = function(songs){
  this.songs = songs;
}

Playlist.prototype.getSongs = function(){
  return this.songs
}

Playlist.prototype.setTitle = function(title){
  this.title = title;
}

Playlist.prototype.getTitle = function(){
  return this.title;
}

Playlist.prototype.setDescription = function(description){
  this.description = description;
}

Playlist.prototype.getDescription = function(){
  return this.description;
}
