function strpos (haystack, needle, offset) {
    // http://kevin.vanzonneveld.net
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: Onno Marsman    
    // +   bugfixed by: Daniel Esteban
    // *     example 1: strpos('Kevin van Zonneveld', 'e', 5);
    // *     returns 1: 14

    var i = (haystack+'').indexOf(needle, (offset ? offset : 0));
    return i === -1 ? false : i;
}