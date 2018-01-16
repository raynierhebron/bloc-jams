var collectionItemTemplate =
    '<div class="collection-album-container column fourth">'
  + '  <img src="assets/images/album_covers/01.png"/>'
  + '  <div class="collection-album-info caption">'
  + '    <p>'
  + '      <a class="album-name" href="album.html"> The Colors </a>'
  + '      <br/>'
  + '      <a href="album.html"> Pablo Picasso </a>'
  + '      <br/>'
  + '      X songs'
  + '      <br/>'
  + '    </p>'
  + '  </div>'
  + '</div>'
  ;

  window.onload = function() {
    // #1 selects first element with an album-covers class name
    var collectionContainer = document.getElementsByClassName('album-covers')[0];
    // #2 assign an empty string to collectionContainers innerHTML property to clear its content
    collectionContainer.innerHTML = '';

    // #3 create for loop that insterts 12 albums using the += operator
    for (var i = 0; i < 12; i++) {
        collectionContainer.innerHTML += collectionItemTemplate;
    }
}
