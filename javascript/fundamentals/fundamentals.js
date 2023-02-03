function myFunc () {
	let one = 1;
	// console.log(one, 'outer');
	function myNewFunc () {
		const two = one + 1;
		// console.log(one, 'inner');
	}
	myNewFunc();
}
myFunc()

// symbol
const mySymbol = Symbol("foo");
const myNewSymbol = Symbol("foo");
console.log(mySymbol);
console.log(mySymbol === myNewSymbol);

const myInteger = 5;
console.log(typeof myInteger);
const myBoolean = true;

let bottle
console.log(typeof bottle);

const myObject = {
	key: "value",
	[myInteger]: myInteger,
}

console.log(myObject);
function mounted (callback) {
	console.log('is mounted');
	callback({
		dataset: {
			phone: '19823891293812',
			name: 'poqkdpokqwopd'
		}
	});
}
function createInstagramStoryHTMLElement (firstName, lastName, dateCreated, mediaType, onFinish) {
	const template = `
		<h2>${firstName}</h2>
		<p>${lastName}</p>
	`
	setTimeout(() => onFinish({

	}));
	return template;
}

const data = [
	{
		firstName: 'Nino',
		lastName: 'Nino',
		dateCreated: 'some-date',
		mediaType: 'post'
	},
	{
		firstName: 'Marija',
		lastName: 'Marija',
		dateCreated: 'some-date',
		mediaType: 'image'
	}
]

mounted((myData) => {
	console.log(myData);
	data.forEach((item) => {
		const newItem = createInstagramStoryHTMLElement(item.firstName, item.lastName, item.dateCreated, item.mediaType, () => {
			console.log('i am done with rendering');
		})
		document.querySelector('.instagram-grid').innerHTML += newItem;
	});
})

const button = document.querySelector('.button');

function clickHandler(event) {}

button.addEventListener('click', (event) => {
	clickHandler()
})

button.addEventListener('click', clickHandler)

class MovieClass {
	constructor(movie) {
		this.movie = movie;
	}

	getMovieName = () => {
		return this.movie;
	}

	getMovie () {
		return this.movie;
	}
}

const myMovie = new MovieClass('MovieName');
console.log(myMovie.getMovie());




