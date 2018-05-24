var saveButton = $('#save-js');
var titleInput = $('#title-input-value');
var bodyInput = $('#body-input-value');
var ideaList = $('.cards-container');
var qualitySwill = 'swill';
var qualityPlausible = 'plausible';
var qualityGenius = 'genius';
var deleteButton = $('.delete')
var searchInput = $('#search-idea');
var ideasArray = [];
var counter = 0;

$(document).ready(retrieveFromLocalStorage);

function retrieveFromLocalStorage() {
  for (var i=0; i < localStorage.length; i++) {
    var storagePullBack = JSON.parse(localStorage.getItem(localStorage.key(i)));
    ideasArray.push(storagePullBack);
  }
  getIdeasAndRender();
}
// ideasArray = JSON.parse(localStorage.getItem('ideas')) || [];

saveButton.on('click', function(e){
  e.preventDefault();
  createIdea();
  displayNewIdea();
});
titleInput.on('input', toggleSaveDisabled);
bodyInput.on('input', toggleSaveDisabled);
ideaList.on('click', function(e) {
  e.preventDefault();
var buttonTarget = e.target.classList;
  if (buttonTarget.contains("upvote") || buttonTarget.contains("downvote")) {
    changeQuality(e.target);
  } else if (e.target.classList.contains("delete")) {
    removeIdea(e.target);
  } 
});
getIdeasAndRender();

function displayNewIdea() {
  ideaList.prepend(`
  <div id=${Date.now()} class="entire-card">
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
    id: Date.now(),
    quality: "swill"
  };
  ideasArray.push(ideaObject);
  localStorage.setItem([ideaObject.id], JSON.stringify(ideaObject));
 }

function getIdeasAndRender() {
  ideaList.val('');
  for(i = 0; i < ideasArray.length; i++) {
    ideaList.prepend(`
    <div id=${Date.now()} class="entire-card">
      <aside class="title-text">
        <h2 class="idea"> ${ideasArray[i].title}</h2>
        <button class="delete icon"></button>
      </aside>
      <aside>
        <p class="light-text">${ideasArray[i].body}</p>
      </aside>
      <aside class="footer-text">
          <button  class="upvote icon"></button>
          <button  class="downvote icon"></button>
        <p class="quality-text">quality: ${ideasArray[i].quality}</p>
      </aside>
    <div>`);
    clearTitleInput();
    clearBodyInput();
   };
  }
  
function clearTitleInput() {
  titleInput.val('');
  toggleSaveDisabled();
}

function clearBodyInput() {
  bodyInput.val('');
  toggleSaveDisabled();
}

function toggleSaveDisabled() {
  if (titleInput.val() === '' || bodyInput.val() === '') {
    saveButton.prop('disabled', true);
  } else {
    saveButton.prop('disabled', false);
  }
}

function changeQuality(cardIdea) {
  console.log($(cardIdea).siblings());
  var qualityValue = $(cardIdea).siblings()[1];
  var wordArray = ['quality: swill', 'quality: plausible', 'quality: genius'];
  $(cardIdea).hasClass('upvote') ? counter = counter + 1 : counter = counter - 1;
  counter > 2 ? counter = 2 : null;
  counter < 0 ? counter = 0 : null;
  $(qualityValue).text(wordArray[counter]);
}

function removeIdea(target) {
  $(target).parent().parent().remove();
  localStorage.removeItem([target.parentNode.parentNode.id]);
};

searchInput.on('keyup', function() {
  var searchTerm =$(this).val().toLowerCase();
  $('.entire-card').each(function(index, element){
  var text= $(element).text().toLowerCase();
  var match = !!text.match(searchTerm);
  $(element).toggle(match);
  })
});