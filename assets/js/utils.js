'use strict';

function functiontofindIndexByKeyValue(arraytosearch, key, valuetosearch) { 
    for (var i = 0; i < arraytosearch.length; i++) {
            if (arraytosearch[i][key] == valuetosearch) {
                return i;
            }
        }
    
    return null;
}

function __log(message)
{
    console.log(message);
}