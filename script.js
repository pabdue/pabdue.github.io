$(document).ready(function () {
    // Filter button click event
    $('.buttons button').click(function () {
      // Remove active class from all buttons
      $('.buttons button').removeClass('is-selected');
      $('.buttons button').removeClass('is-link');
      // Add active class to the clicked button
      $(this).addClass('is-selected');
      $(this).addClass('is-link');
  
      // Get the selected filter
      var filter = $(this).data('filter');
  
      // Show/hide project cards based on the selected filter
      $('#project-cards .column').hide();
      if (filter === 'all') {
        $('#project-cards .column').show();
      } else {
        $('#project-cards .column[data-labels*="' + filter + '"]').show();
      }
    });
  });

  document.addEventListener('DOMContentLoaded', () => {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
  
      // Add a click event on each of them
      $navbarBurgers.forEach(el => {
        el.addEventListener('click', () => {
  
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);
  
          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
  
        });
      });
    }
});
  