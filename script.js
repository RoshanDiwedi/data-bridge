$(document).ready(function(){


        
});



// Testimonial slider
let slides = document.getElementsByClassName("mySlides");
let dots = document.getElementsByClassName("dot");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");

if (!slides.length == 0) {
  let slideIndex = 1;
  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides((slideIndex += n));
  }

  let currentSlide = function (n) {
    showSlides((slideIndex = n));
  };

  function showSlides(n) {
    if (n > slides.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" dot-active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " dot-active";
  }
}


prev.addEventListener("click", () => {
  plusSlides(-1);
});

next.addEventListener("click", () => {
  plusSlides(1);
}); 

setInterval(() => {
  plusSlides(1)
}, 2000);
// End testimonial




// CHALLENGES Section
var modalInfo = {
  1: {
    title: "Project 1",
    info: "...",
    link: "#",
    github: "#"
  },
  2: {
    title: "Project 2",
    info: "...",
    link: "#",
    github: "#"
  },
  3: {
    title: "Project 3",
    info: "...",
    link: "#",
    github: "#"
  },
  4: {
    title: "Project 4",
    info: "....",
    link: "#",
    github: "#"
  },
  5: {
    title: "Project 5",
    info: "...",
    link: "#",
    github: "#"
  },
  6: {
    title: "Project 6",
    info: "...",
    link: "#",
    github: "#"
  }
};

// Get the modal
var modal = document.getElementById('preview');

// button that opens the modal
var btn = document.getElementsByClassName("button");

// <span> that closes the modal
var span = document.getElementsByClassName("close")[0];

// open modal 
for(let i = 0; i < btn.length; i++){
  btn[i].addEventListener("click", function() {
    var project = btn[i].parentElement;
    openModal(project);
  })
};

function openModal(project){
  var id = project.id;
  var img = project.getElementsByTagName("img")[0].src;
  fillOut(id, img);
  modal.style.display = "block";
  document.getElementsByClassName("modal-content")[0].classList.add("scale");
}

function fillOut(id, img){
  document.getElementById("title").innerHTML = modalInfo[id].title;
  document.getElementById("info").innerHTML = modalInfo[id].info;
  document.getElementById("img").src = img;
  document.getElementById("live").onclick = function(){
    window.open(modalInfo[id].link,'_blank');
  }
  document.getElementById("github").onclick = function(){
    window.open(modalInfo[id].github,'_blank');
  }
}

// close the modal
span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
} // End of CHALLENGES Section


// Open menu in mobile mode

// $(".hamburger").click(function(){
//   console.log("clicked");
// navHandler();
// });
// function navHandler() {
//   var navbar =$("#navbar ul");
//   console.log(navbar.css("display"));
//   if (navbar.css("display")=== "block") {
//     navbar.css("display", "none") ;
//   } else {
//     console.log("enter");
//     navbar.css("display","block");
//   }
// }



// <------- mobile hamburger----->
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((link) =>
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    navMenu.css("display","none")
  })
);

// <-----------------New counter--------------->
$('.counter-count').each(function () {
  $(this).prop('Counter',0).animate({
      Counter: $(this).text()
  }, {
    
    //chnage count up speed here
      duration: 4000,
      easing: 'swing',
      step: function (now) {
          $(this).text(Math.ceil(now));
      }
  });
});