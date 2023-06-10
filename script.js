// JavaScript code for projects.html

$(document).ready(function () {
    // Filter button click event
    $('.buttons button').click(function () {
      // Remove active class from all buttons
      $('.buttons button').removeClass('is-selected');
      // Add active class to the clicked button
      $(this).addClass('is-selected');
  
      // Get the selected filter
      var filter = $(this).data('filter');
  
      // Show/hide project cards based on the selected filter
      if (filter === 'all') {
        $('#project-cards .card').show();
      } else {
        $('#project-cards .card').hide();
        $('#project-cards .card:contains(' + filter + ')').show();
      }
    });
  });
  