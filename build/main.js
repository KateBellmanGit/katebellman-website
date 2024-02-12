









//Gallery Container
document.addEventListener('DOMContentLoaded', function() {
  const gridGallery = document.querySelector('.grid_gallery_component');
  gridGallery.style.opacity = '1';
  gridGallery.style.transition = 'opacity 2s ease';
});









  //JSON Gallery Items

  const galleryItemList = {

    "graphic_design" : [
      {
        "name" : "Tropical Yardage",
        "url" : "images/image-1.jpg"
      },
      {
        "name" : "Tropical Yardage",
        "url" : "images/image-3.jpg"
      },
      {
        "name" : "Tropical Yardage",
        "url" : "images/image-2.jpg"
      },
      {
        "name" : "Tropical Yardage",
        "url" : "images/image-1.jpg"
      },
      {
        "name" : "Tropical Yardage",
        "url" : "images/image-3.jpg"
      },
      {
        "name" : "Tropical Yardage",
        "url" : "images/image-2.jpg"
      },
      {
        "name" : "Tropical Yardage",
        "url" : "images/image-1.jpg"
      },
      {
        "name" : "Tropical Yardage",
        "url" : "images/image-3.jpg"
      },
      {
        "name" : "Tropical Yardage",
        "url" : "images/image-2.jpg"
      },
      {
        "name" : "Tropical Yardage",
        "url" : "images/image-1.jpg"
      },
      {
        "name" : "Tropical Yardage",
        "url" : "images/image-3.jpg"
      },
      {
        "name" : "Tropical Yardage",
        "url" : "images/image-2.jpg"
      },
      {
        "name" : "Tropical Yardage",
        "url" : "images/image-1.jpg"
      },
      {
        "name" : "Tropical Yardage",
        "url" : "images/image-3.jpg"
      },
      {
        "name" : "Tropical Yardage",
        "url" : "images/image-2.jpg"
      },
      {
        "name" : "Tropical Yardage",
        "url" : "images/image-1.jpg"
      },
      {
        "name" : "Tropical Yardage",
        "url" : "images/image-3.jpg"
      },
      {
        "name" : "Tropical Yardage",
        "url" : "images/image-2.jpg"
      },
    ],
    "textile_design" : [
      {
        "name" : "Tropical Yardage",
        "url" : "images/image-1.jpg"
      },
      {
        "name" : "Tropical Yardage",
        "url" : "images/image-3.jpg"
      },
      {
        "name" : "Tropical Yardage",
        "url" : "images/image-2.jpg"
      },
      {
        "name" : "Tropical Yardage",
        "url" : "images/image-1.jpg"
      },
      
    ]

  }

  
const graphicGallery = document.querySelector('#graphicGallery');
if (graphicGallery) {
  galleryItemList.graphic_design.forEach((item, index) => {
    const itemContainer = document.createElement('div');
    itemContainer.classList.add("grid_item");
    itemContainer.innerHTML = `<img src="${item.url}" class="grid_image"/>`;
    graphicGallery.appendChild(itemContainer);
  });
}

const textileGallery = document.querySelector('#textileGallery');
if (textileGallery) {
  galleryItemList.textile_design.forEach((item, index) => {
    const itemContainer = document.createElement('div');
    itemContainer.classList.add("grid_item");
    itemContainer.innerHTML = `<img src="${item.url}" class="grid_image"/>`;
    textileGallery.appendChild(itemContainer);
  });
}



//   // Generate gallery from JSON
// // Graphic-design gallery
// galleryItemList.graphic_design.forEach((item, index) => {
//   const itemContainer1 = document.createElement('div');
//   itemContainer1.classList.add("grid_item");
//   itemContainer1.innerHTML = `<img src="${item.url}" class="grid_image"/>`;
//   const graphicGallery = document.querySelector('#graphicGallery'); // Use a unique variable name
//   graphicGallery.appendChild(itemContainer1);
// });

// // Textile-design gallery
// galleryItemList.textile_design.forEach((item, index) => {
//   const itemContainer = document.createElement('div');
//   itemContainer.classList.add("grid_item");
//   itemContainer.innerHTML = `<img src="${item.url}" class="grid_image"/>`;
//   const textileGallery = document.querySelector('#textileGallery'); // Use a unique variable name
//   textileGallery.appendChild(itemContainer);
// });





  // Fade in gallery items when user scrolls down
  document.addEventListener('DOMContentLoaded', function() {
    const gridItems = document.querySelectorAll('.grid_image');
    
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    });
    
    gridItems.forEach((item) => {
      observer.observe(item);
    });
  });
  









// Function to load header content
function loadHeader() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'header.html', true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      document.getElementById('header-placeholder').innerHTML = xhr.responseText;
      
      // Menu icon animation code
      var isOpen = false;

      function toggleMenu() {
        var rect1 = document.getElementById('rect1');
        var rect2 = document.getElementById('rect2');
        var rect3 = document.getElementById('rect3');
        var rect4 = document.getElementById('rect4');
        var menu = document.getElementById('mainMenu');

        if (isOpen) {
          // Change to hamburger icon
          rect1.style.opacity = '1';
          rect4.style.opacity = '1';
          rect2.style.cssText = 'transform: rotate(0); transform-origin: center; ';
          rect3.style.cssText = 'transform: rotate(0); transform-origin: center; ';
          menu.classList.remove("menu_active");

        } else {
          // Change to X icon
          rect1.style.opacity = '0';
          rect4.style.opacity = '0';
          rect2.style.cssText = 'transform: rotate(-45deg); transform-origin: center; ';
          rect3.style.cssText = 'transform: rotate(45deg); transform-origin: center; ';
          menu.classList.add("menu_active");
        }

        isOpen = !isOpen; // Toggle the state
      }

      document.getElementById('menuButton').onclick = function () {
        toggleMenu();
      };
    }
  };
  xhr.send();
}

loadHeader();
