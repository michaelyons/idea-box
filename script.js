var saveButton = $('#save-js');
var titleInput = $('#title-input-value');
var bodyInput = $('#body-input-value');
var ideaList = $('.cards-container');
var qualitySwill = 'swill';
var qualityPlausible = 'plausible';
var qualityGenius = 'genius';
var deleteButton = $('.delete')


saveButton.on('click', displayNewIdea);
titleInput.on('input', toggleSaveDisabled);
bodyInput.on('input', toggleSaveDisabled);
deleteButton.on('click', '.delete', removeIdea);

function displayNewIdea(event) {
  event.preventDefault();
  ideaList.prepend(`
  <aside class="title-text">
  <h2 class="idea"> ${titleInput.val()}</h2>
  <button class="delete icon"></button>
  </aside>
  <aside class="body-text">
  <p class="light-text">${bodyInput.val()}</p>
  </aside>
  <aside class="footer-text">
  <button class="upvote icon"></button>
  <button class="downvote icon"></button>
  <p class="quality-text">Quality: ${qualitySwill}</p>
  </aside>`);
  clearTitleInput();
  clearBodyInput();
 };

function clearTitleInput() {
  titleInput.val('');
}

function clearBodyInput() {
  bodyInput.val('');
}

function toggleSaveDisabled() {
  if (titleInput.val() === '' || bodyInput.val() === '') {
    saveButton.prop('disabled', true);
  } else {
    saveButton.prop('disabled', false);
  }
}

function removeIdea() {
  (this).parent().remove();
}
