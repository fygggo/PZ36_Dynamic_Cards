const cardForm = document.querySelector('#card-form');
const cardInput = document.querySelector('#card-input');
const cardList = document.querySelector('#card-list');

function createCard(text) {
    const cardHTML = `
        <li class="item-card" data-card>
            <span class="item-title">${text}</span>
            <button class="remove-card" type="button" aria-label="Удалить карточку">×</button>
        </li>
    `;
    cardList.insertAdjacentHTML('beforeend', cardHTML);
}

cardList.addEventListener('click', (event) => {
    const card = event.target.closest('.item-card');
    if (!card) return;

    if (event.target.closest('.remove-card')) {
        card.remove();
        return;
    }

    card.classList.toggle('selected');
});

if (cardForm) {
    cardForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const taskText = cardInput.value.trim();

        if (taskText) {
            createCard(taskText);
            cardForm.reset();
        }
    });
}
