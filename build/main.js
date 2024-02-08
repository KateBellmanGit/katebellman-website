



//Gallery Container
// document.addEventListener('DOMContentLoaded', function() {
//   const gridGallery = document.querySelector('.grid_gallery_component');
//   gridGallery.style.opacity = '1';
//   gridGallery.style.transition = 'opacity 2s ease';
// });









  //JSON Gallery Items

  const galleryItemList = {

    "galleryItems" : [
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
    ]

  }


  // Generate gallery from JSON
  galleryItemList.galleryItems.forEach((item, index) => {

    const itemContainer = document.createElement('div');
    itemContainer.classList.add("grid_item");
    itemContainer.innerHTML = `<img src="${item.url}" class="grid_image"/>`;
        const galleryItem1 = document.querySelector('.grid_gallery_inner');
    galleryItem1.appendChild(itemContainer)

  });

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
  


  // Menu icon animation

  var isOpen = false;

    function toggleMenu() {
        var rect1 = document.getElementById('rect1');
        var rect2 = document.getElementById('rect2');
        var rect3 = document.getElementById('rect3');
        var rect4 = document.getElementById('rect4');

        if (isOpen) {
            // Change to hamburger icon
            rect1.style.opacity = '1';
            rect4.style.opacity = '1';
            rect2.style.cssText = 'transform: rotate(0); transform-origin: center; ';
            rect3.style.cssText = 'transform: rotate(0); transform-origin: center; ';
        } else {
            // Change to X icon
            rect1.style.opacity = '0';
            rect4.style.opacity = '0';
            rect2.style.cssText = 'transform: rotate(-45deg); transform-origin: center; ';
            rect3.style.cssText = 'transform: rotate(45deg); transform-origin: center; ';
        }

        isOpen = !isOpen; // Toggle the state
    }

    document.getElementById('menuButton').onclick = function () {
        toggleMenu();
    };
