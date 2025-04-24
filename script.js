window.addEventListener("scroll", function () {
    const header = document.getElementById("myHeader");
    const scrollY = window.scrollY;
  
    let opacity = Math.min(scrollY / 150, 1); 
    header.style.backgroundColor = `rgba(40, 40, 41, ${opacity})`;
  });
  

  function toggleMenu() {
    document.getElementById("overlayMenu").classList.toggle("open");
  }


  function closeMenu(event) {
    if (event.target === event.currentTarget) {
      toggleMenu();
    }
  }