let notes = [
	{
		id: new Date(),
		title: 'Sample Note',
		body: 'This is a description for our sample note',
		bgColor: 'pink'
	}
]

const createElement = (tag, classes = []) => {
	const element = document.createElement(tag);
	classes.forEach(cl => {
		element.classList.add(cl);
	})
	return element;
}

const createNoteView = (note) => {
	const noteDiv = createElement('div', ['note']);
	noteDiv.id = note.id;
	const textDiv = createElement('div', ['text']);
	textDiv.style.background = note.bgColor;
	const titleP = createElement('b', ['title']);
	titleP.innerHTML = note.title;
	const bodyP = createElement('p', ['body']);
	bodyP.innerHTML = note.body;
	const editButton = createElement('button', ['edit']);
	editButton.innerHTML = 'Edit Note';
	const deleteButton = createElement('button', ['delete']);
	deleteButton.innerHTML = 'Delete Note';

	textDiv.append(titleP)
	textDiv.append(bodyP)
	noteDiv.append(textDiv)
	noteDiv.append(editButton)
	noteDiv.append(deleteButton)
	return noteDiv;
}

const saveNote = () => {
	const titleInput = document.querySelector('input#title');
	const bodyInput = document.querySelector('input#body');
	const bgColorInput = document.querySelector('select');
	const id = new Date().getTime();
	const note = {
		id, title: titleInput.value, body: bodyInput.value, bgColor: bgColorInput.value
	}
	const noteDiv = createNoteView(note);
	notesDiv.prepend(noteDiv);
	titleInput.value = '';
	bodyInput.value = '';
	bgColorInput.value = '';
}

document.querySelector('button.add').onclick = () => saveNote();
const notesDiv = document.querySelector('.notesDiv');
notes.forEach(note => {
	const noteDiv = createNoteView(note);
	notesDiv.append(noteDiv);
})