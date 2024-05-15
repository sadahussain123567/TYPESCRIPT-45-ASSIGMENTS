"use strict";
////creating function using rest parameter\\\\\\\\
function make_sandwich(...items) {
    console.log("\nMAKING A SANDWISH WITH FOLLOWING ITEMS");
    items.forEach(single => console.log(single));
    console.log("\nNOW ENJOY SANDWICH");
}
/////call function 3 times\\\\\\\\\
make_sandwich("chicken", "cheese", "mayo", "egg");
make_sandwich("bread", "butter");
make_sandwich("bread", "butter", "chicken", "cheese", "mayo", "egg");
