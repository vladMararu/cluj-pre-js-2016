
var JSON_Quote = {
    "success": {
        "total": 1
    },
    "contents": {
        "quotes": [
            {
                "quote": "Be not afraid of greatness. Some are born great, some achieve greatness, and some have greatness thrust upon 'em....",
                "length": "116",
                "author": "William Shakespeare",
                "tags": [
                    "inspire"
                ],
                "category": "inspire",
                "date": "2016-03-28",
                "title": "Inspiring Quote of the day",
                "background": "https://theysaidso.com/img/bgs/man_on_the_mountain.jpg",
                "id": "FG7_PlYnhPFaWL79P5076QeF"
            }
        ]
    }
};

function closePlaylist(){
	var divPlaylistContainer = document.getElementById('playlist-container');
	if (divPlaylistContainer) {
		divPlaylistContainer.parentNode.removeChild(divPlaylistContainer);
	}
 }

function generateCloseButton(){
	 var closeButtonDiv = document.createElement('div');
	 closeButtonDiv.id = 'divContainerButton';
	 document.getElementById('playlist-container').appendChild(closeButtonDiv);

	 var buttonClose = document.createElement('input');
   buttonClose.id = 'button-close-playlist';
   buttonClose.type = 'button';
   buttonClose.value = 'CLOSE';
   buttonClose.onclick = closePlaylist;

	 closeButtonDiv.appendChild(buttonClose);
}

function generateHeaderPlaylist(idOfPlaylist){
	var currentPlaylist = collectionPlaylistObjects[idOfPlaylist];
	var headerPlaylist = document.createElement('div');
	headerPlaylist.id = 'header-playlist';
	document.getElementById('playlist-container').appendChild(headerPlaylist);


	var img = document.createElement("img");
	img.id = 'img-playlist';
	img.src = currentPlaylist.imgSmall;  ///////TO DO!

	headerPlaylist.appendChild(img);

 var paragraph = document.createElement('p');
 var titlePlaylist = document.createElement('p');

 paragraph.id = 'parag-playlist';
 paragraph.className = 'text-header';

 titlePlaylist.id = 'title-playlist';
 titlePlaylist.className = 'text-header';

 paragraph.textContent = 'Playing from:';
 titlePlaylist.textContent = 'test name of playlist';

 headerPlaylist.appendChild(paragraph);
 headerPlaylist.appendChild(titlePlaylist);
}

function generateTablePlaylist(idOfPlaylist){
	var currentPlaylist = collectionPlaylistObjects[idOfPlaylist];

	var songsObjCurrentPlaylist = currentPlaylist.songs.map(function(obj){
  return new Song(obj.songTitle, obj.songAuthor, obj.songLength, obj.songListened, obj.image);
  });

	var innerDiv = document.createElement('div');
	innerDiv.id = 'divSong';

	document.getElementById('playlist-container').appendChild(innerDiv);



	 var table = document.createElement('TABLE');
   table.border='1';

   var tableBody = document.createElement('TBODY');
   table.appendChild(tableBody);

	 innerDiv.appendChild(table);




	for(var i = 0; i < songsObjCurrentPlaylist.length; i++){
		var song = songsObjCurrentPlaylist[i];

		var songTitle = document.createElement('div');
		songTitle.innerText = song.getSongTitle();
		innerDiv.appendChild(songTitle);

		var songAuthor = document.createElement('div');
		songAuthor.innerText = song.getSongAuthor();
		innerDiv.appendChild(songAuthor);

		var songLength = document.createElement('div');
		songLength.innerText = convertSecToMin(song.getSongLength());
		innerDiv.appendChild(songLength);

		var songListened = document.createElement('div');
		songListened.innerText = song.getSongListened();
		innerDiv.appendChild(songListened);

		var img = document.createElement('div');
		img.innerHTML = '<img src="' + song.getImg() + '"/>';
		innerDiv.appendChild(img);
	}


	//////////////// table////////////////
	/* var innerTableDiv = document.createElement('div');
		innerTableDiv.id = 'divTable';
		iDiv.appendChild(innerTableDiv);

		var parag = document.createElement('div');
		parag.innerText = 'first parag';

		innerTableDiv.appendChild(parag); */

	/////////////end if table //////////////////

}

function generatePlaylist(idOfPlaylist){
  var myElem = document.getElementById('playlist-container');

  if(myElem === null){
		 var iDiv = document.createElement('div');
	   iDiv.id = 'playlist-container';
	   iDiv.className = 'container-playlist';

	   document.body.appendChild(iDiv);

		 generateCloseButton();
		 generateHeaderPlaylist(idOfPlaylist);
		 generateTablePlaylist(idOfPlaylist);

   }
 }

 function getQuote() {
  return new Promise(function(resolve, reject) {
    var req = new XMLHttpRequest();
    req.open('GET', 'http://quotes.rest/qod.json');

    req.onload = function() {
      if (req.status >= 200 && req.status < 300) {
        resolve(req.response);
      }
      else {
        reject(Error(req.statusText));
      }
    };

    req.onerror = function() {
      reject(Error("Network Error"));
    };

    req.send();
  });
}

function getQuote(){
	var promise = new Promise(function(resolve, reject) {
  var request = new XMLHttpRequest();

  request.open('GET', 'http://quotes.rest/qod.json');
  request.onload = function() {
      if (request.status >= 200 && request.status < 300) {
        resolve(request.response);
      } else {
        reject(Error(request.statusText));
      }
    };

   request.onerror = function() {
      reject(Error('Error fetching data.'));
    };

   request.send();
  });

  promise.then(function(data) {
    //document.getElementsByTagName('body')[0].textContent = JSON.parse(data).value;
		document.getElementById('quote').innerHTML = data.contents.quotes[0].quote;
  }, function(error) {
    document.getElementById('quote').innerHTML = JSON_Quote.contents.quotes[0].quote;
  });
}

getQuote();
