class Book {
	constructor(title = 'Unknown', author = 'Unknown', pages = '0', isRead = false) {
		this.title = title
		this.author = author
		this.pages = pages
		this.isRead = isRead
	}
}

class Library {
	constructor() {
		this.books = []
	}

	addBook(newBook) {
		if (!this.isInLibrary(newBook)) {
			this.books.push(newBook)
		}
	}

	removeBook(title) {
		this.books = this.books.filter((book) => book.title !== title)
	}

	getBook(title) {
		return this.books.find((book) => book.title === title)
	}

	isInLibrary(newBook) {
		return this.books.some((book) => book.title === newBook.title)
	}
}

const library = new Library()

const accountBtn = document.getElementById('accountBtn')
const accountModal = document.getElementById('accountModal')
const addBookBtn = document.getElementById('addBookBtn')
const addBookModal = document.getElementById('addBookModal')
const errorMssg = document.getElementById('errorMssg')
const overlay = document.getElementById('overlay')
const addBookForm = document.getElementById('addBookForm')
const booksGrid = document.getElementById('booksGrid')
const loggedIn = document.getElementById('loggedIn')
const loggedOut = document.getElementById('loggedOut')
const loadingRing = document.getElementById('loadingRing')

const setupNavBar = (user) => {
	if (user) {
		loggedIn.classList.add('active')
		loggedOut.classList.remove('active')
	} else {
		loggedIn.classList.remove('active')
		loggedOut.classList.add('active')
	}
	loadingRing.classList.remove('active')
}

