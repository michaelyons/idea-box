var saveButton = $('#save-js');
var titleInput = $('#title-input-value');
var bodyInput = $('#body-input-value');
var ideaList = $('.cards-container');
var qualitySwill = 'swill';
var qualityPlausible = 'plausible';
var qualityGenius = 'genius';
var deleteButton = $('.delete')
var ideasArray = [];

ideasArray = JSON.parse(localStorage.getItem('ideas')) || [];

saveButton.on('click', function(e){
  e.preventDefault();
  createIdea();
  displayNewIdea();
});
titleInput.on('input', toggleSaveDisabled);
bodyInput.on('input', toggleSaveDisabled);
deleteButton.on('click', '.delete', removeIdea);
getIdeasAndRender();

function displayNewIdea() {
  ideaList.prepend(`
  <div class="entire-card">
  <aside class="title-text">
  <h2 class="idea"> ${titleInput.val()}</h2>
  <button class="delete icon"></button>
  </aside>
  <aside>
  <p class="light-text">${bodyInput.val()}</p>
  </aside>
  <aside class="footer-text">
  <button class="upvote icon"></button>
  <button class="downvote icon"></button>
  <p class="quality-text">quality: ${qualitySwill}</p>
  </aside>
  </div>`);
  clearTitleInput();
  clearBodyInput();
 };

function createIdea() {
  var ideaObject = {
    title: titleInput.val(),
    body: bodyInput.val(),
    quality: "swill"
  };
  ideasArray.push(ideaObject);
  localStorage.setItem('ideas', JSON.stringify(ideasArray));
 }

function getIdeasAndRender() {
  for(i = 0; i < ideasArray.length; i++) {
    ideaList.prepend(`
    <div class="entire-card">
    <aside class="title-text">
    <h2 class="idea"> ${ideasArray[i].title}</h2>
    <button class="delete icon"></button>
    </aside>
    <aside>
    <p class="light-text">${ideasArray[i].body}</p>
    </aside>
    <aside class="footer-text">
    <button class="upvote icon"></button>
    <button class="downvote icon"></button>
    <p class="quality-text">quality: ${ideasArray[i].quality}</p>
    </aside>
    <div>`);
    clearTitleInput();
    clearBodyInput();
   };
  }
  
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

var searchInput = $('#search-idea');

searchInput.on('keyup', function() {
  var searchTerm =$(this).val().toLowerCase();
  $('.entire-card').each(function(index, element){
  var text= $(element).text().toLowerCase();
  var match = !!text.match(searchTerm);
  $(element).toggle(match);
  })
});