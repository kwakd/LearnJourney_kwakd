// STEP 1:
// - Create an array of objects called 'library'
// - Add 3 Objects with a property of 'title', 'author', 'status'
// - Title and author should be strings and status should be another object with
// properties of 'own', 'reading' and 'read' which should all be boolean values.
// - For all status set 'own' to 'true' and 'reading' and 'read' to false

const library = 
[
    {
        title: 'titleOne',
        author: 'authorOne',
        status:
        {
            own: true,
            reading: false,
            read: false,
        },
    },
    {
        title: 'titleTwo',
        author: 'authorTwo',
        status:
        {
            own: true,
            reading: false,
            read: false,
        },
    },
    {
        title: 'titleThree',
        author: 'authorThree',
        status:
        {
            own: true,
            reading: false,
            read: false,
        },
    },
];



// STEP 2:
// - You finished reading all of the books. Set the `read` value for all of them to
//   to true. Do not edit the initial object. Set the values using dot notation.
library[0].status['read'] = true;
library[1].status['read'] = true;
library[2].status['read'] = true;

// STEP 2: SOLUTION
// library[0].status.read = true;
// library[1].status.read = true;
// library[3].status.read = true;




// STEP 3:
// - Destructure the title from the first book and rename the variable to `firstBook`
library[0].title = 'firstBook';

//STEP 3: SOLUTION
// const { title: firstBook } = library[0];
// console.log(firstBook);




// STEP 4:
// - Turn the library object into a JSON string
const str1 = JSON.stringify(library);

// STEP 4: SOLUTION
// const libraryJSON = JSON.stringify(library);
// console.log(libraryJSON);

console.log(str1);