const cards = document.querySelectorAll('.card');
const dropzones = document.querySelectorAll('.dropzone');

function dragStart() {
  dropzones.forEach((dropzone) => {
    dropzone.classList.add('highlight');
  });

  this.classList.add('is-dragging');
}

function drag() {
  // console.log('drag');
}

function dragEnd() {
  dropzones.forEach((dropzone) => {
    dropzone.classList.remove('highlight');
  });

  this.classList.remove('is-dragging');
}

function dragEnter() {
  // console.log('enter');
}

function dragOver() {
  this.classList.add('over');

  const cardBeingDragged = document.querySelector('.is-dragging');

  this.appendChild(cardBeingDragged);
}

function dragLeave() {
  this.classList.remove('over');
}

function drop() {
  // console.log('drop');
}

cards.forEach((card) => {
  card.addEventListener('dragstart', dragStart);
  card.addEventListener('drag', drag);
  card.addEventListener('dragend', dragEnd);
});

dropzones.forEach((dropzone) => {
  dropzone.addEventListener('dragenter', dragEnter);
  dropzone.addEventListener('dragover', dragOver);
  dropzone.addEventListener('dragleave', dragLeave);
  dropzone.addEventListener('drop', drop);
});
