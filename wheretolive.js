//logo animations
  $('.brum').on('mouseover', function() {
    debugger;
    console.log('i have mouse over');
      $(this).toggleClass('brum2');
  });

  $('.in').on('mouseover', function() {
    console.log('i have mouse over');
      $(this).toggleClass('in2');
  });

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
//this shows the pic description when you click on the pic name
  $('.bhampic').on('click', function() {
      $(this).toggleClass('show-description');
  });
