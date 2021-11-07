function chooseProject(e) {
  e.stopPropagation();
  const target = e.target;
  const projects = document.querySelectorAll(".project");
  const projectInputs = document.querySelectorAll(".project--input");
  const projectForms = document.querySelectorAll(".project--form");
  const projectOptionTarget = target.closest(".project");
  const projectInput = projectOptionTarget.querySelector(".project--input");
  const projectForm = projectOptionTarget.querySelector(".project--form");

  if (
    projectOptionTarget &&
    !projectOptionTarget.classList.contains("disabled")
  ) {
    projects.forEach((x) => {
      x.classList.remove("card--selected");
    });
    projectInputs.forEach((x) => {
      x.classList.add("card--separator-hidden");
    });
    projectForms.forEach((x) => {
      x.classList.add("card--form-hidden");
    });
    projectOptionTarget.classList.add("card--selected");

    if (projectInput) {
      projectInput.classList.remove("card--separator-hidden");
    }

    if (projectForm) {
      projectForm.classList.remove("card--form-hidden");
    }
    projectOptionTarget.querySelector("input[name='project']").click();
  }
}

function projectListInit() {
  const projectList = document.querySelectorAll(".select-project");
  if (projectList.length) {
    projectList.forEach((x) => {
      x.addEventListener("click", chooseProject);
    });
  }
}

function navBarhandler(e) {
  const mobileNav = document.getElementById("mobileNav");
  const body = document.body;
  const backdrop = document.querySelector(".blackdrop-1");
  const state = mobileNav.classList;
  const stateBtn = menuBtn.classList;
  const bodyClass = body.classList;
  const backdropClass = backdrop.classList;
  if (!state.contains("fade-in")) {
    bodyClass.add("no-scroll");
    stateBtn.add("open");
    backdropClass.add("fade-in");
    backdropClass.remove("fade-out");
    state.add("fade-in");
    state.remove("fade-out");
  } else {
    bodyClass.remove("no-scroll");
    stateBtn.remove("open");
    backdropClass.add("fade-out");
    backdropClass.remove("fade-in");
    state.add("fade-out");
    state.remove("fade-in");
  }
}

function modalHandler(e) {
  e.preventDefault();
  const btnToggle = e.target;
  const btnState = btnToggle.classList;
  const modalTarget = btnToggle.getAttribute("data-target");
  const backdrop = document.querySelector(".blackdrop-2");
  const backdropClass = backdrop.classList;
  if (btnState.contains("modal--toggle") && modalTarget) {
    const modal = document.getElementById(modalTarget);
    const modalState = modal.classList;
    if (!modalState.contains("modal--open")) {
      backdropClass.add("fade-in");
      backdropClass.remove("fade-out");
      modalState.add("modal--open");
    } else {
      modalState.remove("modal--open");
      backdropClass.add("fade-out");
      backdropClass.remove("fade-in");
    }
  }
}

function closeModalHandler(e) {
  e.preventDefault();
  const target = e.target;
  const allModalOpened = document.querySelectorAll(".modal--open");
  const modalParent = target.closest(".modal--open");
  const closeBtn = target.closest(".modal__dismiss");
  const backdrop = document.querySelector(".blackdrop-2");
  const backdropClass = backdrop.classList;
  if (modalParent && closeBtn) {
    modalParent.classList.remove("modal--open");
    if (allModalOpened.length == 1) {
      backdropClass.add("fade-out");
      backdropClass.remove("fade-in");
    }
  }
}

function closeModalInit() {
  const closeBtn = document.querySelectorAll(".modal__dismiss");
  closeBtn.forEach((elem) => {
    elem.addEventListener("click", closeModalHandler);
  });
}

function modalInit() {
  const modals = document.querySelectorAll(".modal--toggle");
  modals.forEach((elem) => {
    elem.addEventListener("click", modalHandler);
  });
}

function navbarInit() {
  const btn = document.getElementById("menuBtn");
  btn.addEventListener("click", navBarhandler);
}

function bookmarkInit() {
  const bookmarkedBtn = document.getElementById("bookmarkedBtn");
  bookmarkedBtn.addEventListener("click", (e) => {
    bookmarkedBtn.classList.toggle("active");
  });
}

function init() {
  navbarInit();
  modalInit();
  closeModalInit();
  bookmarkInit();
  projectListInit();
}

init();
