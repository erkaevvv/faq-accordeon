const listItems = document.querySelectorAll('.accordeon-item');
listItems.forEach((listItem) => {listItem.addEventListener('click', toggleAccordeonItem)});

function toggleAccordeonItem(event) {
	const button = this.querySelector('.accordeon-item__button');
	const content = this.querySelector('.accordeon-item__content');

	if (event.target !== content) {
		this.lastElementChild.classList.toggle('accordeon-item__content_closed');
		button.classList.toggle('accordeon-item__button_minus-icon');
	}
}