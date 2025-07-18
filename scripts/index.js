const editProfileBtn = document.querySelector(".profile__edit-btn");

const editProfileModal = document.querySelector("#edit-profile-modal");

const editProfileCloseBtn = editProfileModal.querySelector(".modal__close-btn");

editProfileBtn.addEventListener("click", function () {
  editProfileModal.classList.add("modal_is-opened");
});

editProfileCloseBtn.addEventListener("click", function () {
  editProfileModal.classList.remove("modal_is-opened");
});

//second modal
const addProfileBtn = document.querySelector(".profile__add-btn");

const newPostModal = document.querySelector("#new-post-modal");

const addProfileCloseBtn = newPostModal.querySelector(".modal__close-btn");

addProfileBtn.addEventListener("click", function () {
  newPostModal.classList.add("modal_is-opened");
});

addProfileCloseBtn.addEventListener("click", function () {
  newPostModal.classList.remove("modal_is-opened");
});
