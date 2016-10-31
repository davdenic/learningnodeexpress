/**
 * Created by david on 31/10/16.
 */

var fortunes = [
    "Conquer your fears or they will conquer you.",
    "Rivers need springs.",
    "Do not fear what you don't know.",
    "You will have a pleasant surprise.",
    "Whenever possible, keep it simple.",
    "Enjoy the small things."
];

exports.getFortune = function() {
    var id = Math.floor(Math.random() * fortunes.length);
    return fortunes[id];
};

