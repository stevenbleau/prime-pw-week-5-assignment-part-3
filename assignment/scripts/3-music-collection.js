console.log('***** Music Collection *****')


const collection = [];

/**
 * Create new object and add to collection
 * 
 * @param title
 * @param artist
 * @param yearPublished
 * 
 * @return album
 */

function addToCollection(title, artist, yearPublished){
    let album = {
        title: title,
        artist: artist,
        yearPublished: yearPublished,
    }
    collection.push(album);
    return album;
}

addToCollection('DAMN.', 'Kendrick Lamar', '2017');
addToCollection('Awaken My Love', 'Childish Gambino', '2016');
addToCollection('Black Pumas', 'Black Pumas', '2019');
addToCollection('My Beautiful Dark Twisted Fantasy', 'Kanye West', '2010');
addToCollection('Acid Rap', 'Chance the Rapper', '2013');
addToCollection('KIDZ BOP 2022', 'KIDZ BOP', '2022');

console.log(collection);

/**
 * - Take in an array parameter. (This allows it to be reused to show any collection, like the results from the find or search.)
    - Console.log the number of items in the array.
    - Loop over the array and console.log each album's information formatted like: `TITLE by ARTIST, published in YEAR`.
 * @param array
 */

    function showCollection(array){
        console.log('There are ', array.length, ' items in the collection.');
        for(let i = 0; i<array.length; i++){
            console.log(array[i].title + ' by ' + array[i].artist + ' published in ' + array[i].yearPublished);
        }
    }


showCollection(collection);



/**
 *  Take in `artist` (a string) parameter
  - Create an array to hold any results, empty to start
  - Loop through the `collection` and add any objects with a matching artist to the array.
  - Return the array with the matching results. If no results are found, return an empty array.
 * 
 * @param artist
 * @param collection
 * @return array with matching results
 */

  function findByArtist(artist, collection){
    const matches = [];
    for (let i =0; i<collection.length; i++){
        if (artist === collection[i].artist){
            matches.push(collection[i]);
        }   
    }
    return matches;
  }

  console.log(findByArtist('Black Pumas', collection));
  console.log(findByArtist('Prince', collection));