var Trackster = {};
const API_KEY = '2fb57a71fac6ec22ae942500940fcb53';
$(document).ready(function() {
  $('#search-btn').click(function() {
    Trackster.searchTracksByTitle($('#search-box').val());
  });
});

/*
  Given an array of track data, create the HTML for a Bootstrap row for each.
  Append each "row" to the container in the body to display all tracks.
*/
Trackster.renderTracks = function(tracks) {
  tracks.forEach(function(track){
    var mockTrack =
        `<div class="row">
          <div class="container-fluid" id="track-list">
          <a href="https://youtu.be/eI_O5_tJ1hA"><i class="fa fa-play-circle-o col-xs-2 col-xs-offset-1"></i></a>
          <div class="col-xs-2">Learn to Fly</div>
          <div class="col-xs-2">Foo Fighters</div>
          <img src=#>
          <div class="col-xs-2">10898</div>
        </div>`;
    $('#track-list').append(mockTrack);
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
    success: function(data){
      console.log(data);
    }
  });
};
