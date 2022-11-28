## Installation

Please install this SDK in test folder by following the steps and then linking the SDK with npm .

1. cd sdk
2. npm install
3. npm run build (This would generate the dist folder)
4. cd .. (Go back to the root folder)
5. cd test
6. npm link ../sdk (This would temporarily link the sdk locally with the test app)
7. typescript package should be installed globally (npm install -g typescript)
7. run command tsc
8. node dist/app.js

## Creating an Instance

Create an instance in this way

const client = new LOTR({
apiKey: "your-api-key",
});

Then use it by calling one of the given Methods.

client
.getAllChaptersOfSingleBook("6091b6d6d58360f988133bc8")
.then((res) => {
console.log("All Books are: ", res);
})
.catch((err) => {
console.log("Encountered error: ", err);
});

## Methods

There are 5 catagories about which users can get information.

1. **Books**
2. **Movies**
3. **Characters**
4. **Chapters**
5. **Quotes**

- ### Books

* Get all books = getAllBooks()
* Get a single book by id = getBookById(book id (string))
* Get all chapters of a single book = getAllChaptersOfSingleBook(book id (string))

- ### Movies

* Get all movies = getAllMovies()
* Get a single movie by id = getMovieById(movie id (string))
* Get all quotes of a single movie = getAllQuotesOfSingleMovie(movie id (string))

- ### Characters

* Get all characters = getAllCharacters()
* Get a single character by id = getCharacterById(character id (string))
* Get all quotes of a single character = getAllQuotesOfSingleCharacter(character id (string))

- ### Chapters

* Get all chapters = getAllChapters()
* Get a single chapter by id = getChaptersByBookId(chapter id (string))

- ### Quotes

* Get all quotes = getAllQuotes()
* Get a single quote by id = getQuotesById(quote id (string))
