//Immediate Invoked function
(function(){
	const saveBtn = document.querySelector('#btnSave');
	const bookTitle = document.querySelector('#booktitle');
	const ul = document.querySelector('#books');

	let booksToRead = [];

	if(localStorage.books) 
		booksToRead = JSON.parse(localStorage.books);

	const displayBooks = () => {
		removeBooks();
		booksToRead.forEach((element) => {
			let li = document.createElement('li');
			li.title = 'Click me to complete reading';
			li.appendChild(document.createTextNode(element));
			li.addEventListener('click', completeReading)
			ul.appendChild(li);
		})
	}

	const completeReading = (e) => {
		e.target.parentNode.removeChild(e.target);
		const index = booksToRead.findIndex(t=>t === e.target.textContent);
		booksToRead.splice(index, 1);
		localStorage.books = JSON.stringify(booksToRead);
	}

	const removeBooks = () => {
		while(ul.hasChildNodes()) {
			ul.removeChild(ul.lastChild);
		}
	}

	const save = () => {
		if(!booksToRead.includes(bookTitle.value)){
			booksToRead.push(bookTitle.value);
			localStorage.books = JSON.stringify(booksToRead);
			bookTitle.value = '';
			displayBooks();
		} else {
			alert('Book already added to the list, please try with different book!');
		}
	}
	saveBtn.addEventListener('click', save);
	displayBooks();
})();
