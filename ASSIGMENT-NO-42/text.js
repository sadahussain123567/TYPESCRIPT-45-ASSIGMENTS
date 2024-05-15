"use strict";
function show_magicians(magicians) {
    magicians.forEach(name => console.log(name));
}
function make_great(magicians) {
    return magicians.map(names => `the great ${names}`);
}
let magician_names = ["harry", "ajjubhai", "munna"];
let great_magicians = make_great(magician_names);
show_magicians(magician_names);
