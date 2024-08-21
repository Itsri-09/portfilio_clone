let values = document.querySelectorAll('.counter');
let intervales = 5000;
 
values.forEach(getvalues=>{
    let start = 0;
    let end = parseInt(getvalues.getAttribute('data-val'));
    let duration = Math.floor(intervales / end);
    let counterup = setInterval( function(){
        start += 1;
        getvalues.textContent = start;
        if(start == end){
            clearInterval(counterup)
        }
    },70)
})

// loader animation 

document.onreadystatechange = function () {
    if (document.readyState !== "complete") {
        document.querySelector(
            "body").style.visibility = "hidden";
        document.querySelector(
            "#loader").style.visibility = "visible";
    } else {
        document.querySelector(
            "#loader").style.display = "none";
        document.querySelector(
            "body").style.visibility = "visible";
    }
};

// select the data filters 

  document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-button'); // Add buttons with class 'filter-button' for filtering
    const galleryItems = document.querySelectorAll('.gallery_image_1');

    filterButtons.forEach(button => {
      button.addEventListener('click', function() {
        const filterValue = this.getAttribute('data-filter');

        galleryItems.forEach(item => {
          const itemName = item.getAttribute('data-name');

          if (filterValue === 'all' || filterValue === itemName) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  });

  // for cursor moves 
  const container = document.querySelector('.subtitle');
  const icon = document.querySelector('.icon');

  container.addEventListener('mousemove', (e) => {
      // Get container's position
      const rect = container.getBoundingClientRect();

      // Calculate cursor position relative to the container
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Calculate the transformation to center the icon
      const centerX = x - icon.clientWidth / 2;
      const centerY = y - icon.clientHeight / 2;

      // Apply the transformation to move the icon
      icon.style.transform = `translate(${centerX}px, ${centerY}px)`;
  });

  container.addEventListener('mouseleave', () => {
      // Reset icon position to center when the cursor leaves the container
      icon.style.transform = 'translate(50%, 50%)';
  });




