var saveButton = $('#save-js');
var titleInput = $('#title-input-value');
var bodyInput = $('#body-input-value');
var ideaList = $('.bottom');
var qualitySwill = 'swill';
var qualityPlausible = 'plausible';
var qualityGenius = 'genius';


saveButton.on('click', displayNewIdea);

function displayNewIdea(event) {
  event.preventDefault();
  var titleInput = $('#title-input-value');
  var bodyInput = $('#body-input-value');
  var ideaList = $('.bottom');
  ideaList.prepend(`
  <h2> ${titleInput.val()}</h2>
  <p>${bodyInput.val()}</p>
  <button class="upvote"></button>
  <button class="downvote"></button>
  <p>Quality: ${qualityPlausible}</p>`);
  clearTitleInput();
classlearBodyInput();
};

function clearTitleInput() {
  titleInput.val('');
}

function clearBodyInput() {
  bodyInput.val('');
}

