var saveButton = $('#save-js');
var titleInput = $('#title-input-value');
var bodyInput = $('#body-input-value');
var ideaList = $('.cards-container');
var qualitySwill = 'swill';
var qualityPlausible = 'plausible';
var qualityGenius = 'genius';


saveButton.on('click', displayNewIdea);
// titleInput.on('input', toggleSaveDisabled);
// bodyInput.on('input', toggleSaveDisabled);

function displayNewIdea(event) {
  event.preventDefault();
  ideaList.prepend(`
  <aside class=""
  <h2> ${titleInput.val()}</h2>
  <button class="delete icon"></button>
  <p>${bodyInput.val()}</p>
  <button class="upvote icon"></button>
  <button class="downvote icon"></button>
  <p class="">Quality: ${qualitySwill}</p>`);
  clearTitleInput();
  clearBodyInput();
};

function clearTitleInput() {
  titleInput.val('');
}

function clearBodyInput() {
  bodyInput.val('');
}

// function toggleSaveDisabled() {
//   if (titleInput.val('')) || (title.Input.val('')) {
//     saveButton.prop('disabled', true);
//   } else {
//     saveButton.prop('disabled', false);
//   }
// }