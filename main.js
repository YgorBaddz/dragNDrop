const item = document.querySelector('.item'),
placeholders = document.querySelectorAll('.placeholder'),
body = document.querySelector('body');

for (const placeholder of placeholders) {
    placeholder.addEventListener('dragover', dragover);
    placeholder.addEventListener('dragenter', dragenter);
    placeholder.addEventListener('dragleave', dragleave);
    placeholder.addEventListener('drop', dragdrop);
};

item.addEventListener('dragstart', dragstart);
item.addEventListener('dragend', dragend);

function dragstart(event) {
    event.target.classList.add('hold');
    setTimeout(() => {
        event.target.classList.add('hide');
    }, 0);
};

function dragend (event) {
    event.target.classList.remove('hold', 'hide');
};

function dragover (event) {
    event.preventDefault();
};

function dragenter (event) {
    event.target.classList.add('hovered');
    event.target.classList.remove('item');
};

function dragleave (event) {
    event.target.classList.remove('hovered');
    body.style.background = '#ccc';
};

function dragdrop (event) {
    event.target.classList.remove('hovered');
    event.target.append(item);
    body.style.background = '#e5e5e5';
};
