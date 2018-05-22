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
  <h2> ${titleInput.val()}</h2>
  <button class="delete icon"></button>
  <p>${bodyInput.val()}</p>
  <button class="upvote icon"></button>
  <button class="downvote icon"></button>
  <p class="">Quality: ${qualityPlausible}</p>`);
  clearTitleInput();
  clearBodyInput();
};

function clearTitleInput() {
  titleInput.val('');
}

function clearBodyInpu3t() {
  bodyInput.val('');
}

// function toggleSaveDisabled() {
//   if (titleInput.val('')) || (title.Input.val('')) {
//     saveButton.prop('disabled', true);
//   } else {
//     saveButton.prop('disabled', false);
//   }
// }