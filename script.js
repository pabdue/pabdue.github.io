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
  