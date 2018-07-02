var Trackster = {};
const API_KEY = '2fb57a71fac6ec22ae942500940fcb53';
$(document).ready(function() {
  $('#search-btn').click(function() {
    Trackster.searchTracksByTitle($('#search-box').val());
    $('#track-list').empty();
  });
});

/*
  Given an array of track data, create the HTML for a Bootstrap row for each.
  Append each "row" to the container in the body to display all tracks.
*/
Trackster.renderTracks = function(tracks) {
  tracks.forEach(function(track){

    var mediumAlbumArt = track.image[1]["#text"];
    var mockTrack =
        '<div class="row track">'+
          '<a class="col-xs-2 col-xs-offset-1" href="' + track.URL + '><i class="fa fa-play-circle-o"></i></a>' +
          '<div class="col-xs-2">' + track.name + '</div>' +
          '<div class="col-xs-2">' + track.artist + '</div>' +
          '<img class="col-xs-2" src=' + mediumAlbumArt + '>' +
          '<div class="col-xs-2">' + track.listeners + '</div>' +
        '</div>';
    $('#track-list').append(mockTrack);
    console.log(track);
  });
};

/*
  Given a search term as a string, query the LastFM API.
  Render the tracks given in the API query response.
*/
Trackster.searchTracksByTitle = function(title) {
  $.ajax({
    url: 'http://ws.audioscrobbler.com/2.0/?method=track.search&track=' + title + '&api_key=' + API_KEY + '&format=json',
    datatype: 'jsonp',
    success: function(tracks){
      Trackster.renderTracks(tracks.results.trackmatches.track);
    }
  });
};
