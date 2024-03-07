const navbarLinks = document.querySelectorAll('.navbar .container-fluid .collapse .navbar-nav .nav-item a');
  navbarLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      navbarLinks.forEach(link => {
        link.classList.remove('active');
      });
      this.classList.add('active');
      const targetId = this.getAttribute('href').substring(1);
      document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
  });

//   document.getElementById("searchButton").addEventListener("click", function() {
//     document.getElementById("searchInput").focus();
//     document.getElementById("searchButton").style.display = "none";
//     document.getElementById("closeButton").style.display = "block";
// });

// document.getElementById("closeButton").addEventListener("click", function() {
//     document.getElementById("searchInput").value = "";
//     document.getElementById("searchInput").blur();
//     document.getElementById("closeButton").style.display = "none";
//     document.getElementById("searchButton").style.display = "block";
// });
// document.querySelector('#search-icon').onclick =() =>{
//     document.querySelector('#search-form').classList.toggle('active');
// }
// // .container-fluid .collapse .navbar-nav 
// document.querySelector('#close').onclick =() =>{
//     document.querySelector('#search-form').classList.remove('active');
// }
