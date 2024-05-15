"use strict";
function make_album(artist_name, album_title, tracks) {
    let albumss = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        albumss.tracks = tracks;
    }
    return albumss;
}
;
let album1 = make_album("hamza", "artist no-1");
let album2 = make_album("sadam", "artist no-2");
let album3 = make_album("ali", "artist no-3", 10);
console.log(album1);
console.log(album2);
console.log(album3);
