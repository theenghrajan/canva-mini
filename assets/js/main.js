//Dropdown
window.onclick = function (event) {
	openCloseDropdown(event)
}

function closeAllDropdown() {
	const dropdowns = document.getElementsByClassName('ss-dropdown__expand')
	for (let i = 0; i < dropdowns.length; i++) {
		dropdowns[i].classList.remove('ss-dropdown__expand')
	}
}

function openCloseDropdown(event) {
	if (!event.target.matches('.ss-dropdown__toggle')) {
		// 
		// Close dropdown when click out of dropdown menu
		// 
		closeAllDropdown()
	} else {
		const toggle = event.target.dataset.toggle
		const content = document.getElementById(toggle)
		if (content.classList.contains('ss-dropdown__expand')) {
			closeAllDropdown()
		} else {
			closeAllDropdown()
			content.classList.add('ss-dropdown__expand')
		}
	}
}



// Continue another way
const continueAnotherWay = document.getElementById('continueAnotherWay');
const signUpemail = document.getElementById('signUpemail');
const ssModalContentFirst = document.getElementById('ssModalContentFirst');
const ssModalContentSecond = document.getElementById('ssModalContentSecond');
const ssModalContentThird = document.getElementById('ssModalContentThird');
const ssBackModalContent = document.getElementById('ssBackModalContent');
const ssBackModalContent2 = document.getElementById('ssBackModalContent2');

if (ssModalContentFirst || ssModalContentSecond || ssModalContentThird) {
	ssModalContentSecond.style.display = 'none';
	ssModalContentThird.style.display = 'none';

	continueAnotherWay.addEventListener('click', function () {
		ssModalContentFirst.style.display = 'none';
		ssModalContentSecond.style.display = 'block';
	});

	ssBackModalContent.addEventListener('click', function () {
		ssModalContentFirst.style.display = 'block';
		ssModalContentSecond.style.display = 'none';
	});

	signUpemail.addEventListener('click', function () {
		ssModalContentFirst.style.display = 'none';
		ssModalContentSecond.style.display = 'none';
		ssModalContentThird.style.display = 'block';
	});

	ssBackModalContent2.addEventListener('click', function () {
		ssModalContentFirst.style.display = 'block';
		ssModalContentSecond.style.display = 'none';
		ssModalContentThird.style.display = 'none';
	});
}



//Modal
const ssModalTriggerButtons = document.querySelectorAll("[data-modal-target]");
const ssModals = document.querySelectorAll(".ss-modal");
const ssModalCloseButtons = document.querySelectorAll(".ss-modal__close");

ssModalTriggerButtons.forEach(elem => {
	elem.addEventListener("click", event => toggleModal(event.currentTarget.getAttribute("data-modal-target")));
});

ssModalCloseButtons.forEach(elem => {
	elem.addEventListener("click", event => toggleModal(event.currentTarget.closest(".ss-modal").id));
});

ssModals.forEach(elem => {
	elem.addEventListener("click", event => {
		if (event.currentTarget === event.target) toggleModal(event.currentTarget.id);
	});
});

// Maybe also close with "Esc"...
document.addEventListener("keydown", event => {
	if (event.keyCode === 27 && document.querySelector(".ss-modal.ss-modal-show")) {
		toggleModal(document.querySelector(".ss-modal.ss-modal-show").id);
	}
});

function toggleModal(modalId) {
	const ssModal = document.getElementById(modalId);

	if (getComputedStyle(ssModal).opacity === "1") {
		ssModal.classList.add("ss-modal-hide");
		document.body.style.overflow = "initial"; // Optional: in order to enable/disable page scrolling while modal is hidden/shown - in this case: "initial" <=> "visible"
		ssModal.classList.remove("ss-modal-show", "ss-modal-hide");
		ssModal.style.opacity = "0";
	} else {
		document.body.style.overflow = "hidden"; // Optional: in order to enable/disable page scrolling while modal is hidden/shown
		ssModal.style.opacity = "1";
		ssModal.classList.add("ss-modal-show");
	}
}

//sidebar
const ssHamburger = document.querySelector(".ss-hamburger");
if (ssHamburger) {
	ssHamburger.addEventListener("click", function () {
		document.querySelector("body").classList.toggle("active");
	});
}

// tabs
var ssTabLinks = document.querySelectorAll(".ss-tab-links");
var ssTabContent = document.querySelectorAll(".ss-tab-content");


ssTabLinks.forEach(function(el) {
   el.addEventListener("click", openTabs);
});


function openTabs(el) {
   var btnTarget = el.currentTarget;
   var tab = btnTarget.dataset.tab;

   ssTabContent.forEach(function(el) {
      el.classList.remove("active");
   });

   ssTabLinks.forEach(function(el) {
      el.classList.remove("active");
   });

   document.querySelector("#" + tab).classList.add("active");
   
   btnTarget.classList.add("active");
}
