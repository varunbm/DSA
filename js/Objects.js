let collections = {
    "1988": {
        "album": "Track_1_1988",
        "artist": "Tailor",
        "tracks": [
            "Let it rock",
            "YOu give love"
        ]
    },
    "2008": {
        "album": "Track_2_2008",
        "artist": "Prince",
        "tracks": [
            "2008",
            "Love red"
        ]
    },
    "2000": {
        "artist": "Robert",
        "tracks": []
    },
    "1976": {
        "artist": "Gold"
    }
}

var collectionCopy = JSON.parse(JSON.stringify(collections))

function updateCollection(id, property, value){
 
    if(value === ""){
        delete collections[id][property]
    }else if(property === "tracks"){
        collections[id][property] = collections[id][property] || []
        collections[id][property].push(value);
    }else{
        collections[id][property] = value;
    }


    return collections
}