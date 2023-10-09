



// Scroll event listener for handlescroll active links
window.addEventListener("scroll", handleScroll);


function handleScroll() {
    const homeSection = document.getElementById("home");
    const projectSection = document.getElementById("project");
    const aboutSection = document.getElementById("about");
    const contactSection = document.getElementById("contact");
    const navItems = document.querySelectorAll(".nav-items");
  
    
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
  

    const projectThreshold = projectSection.offsetTop - homeSection.offsetHeight;
    const aboutThreshold = aboutSection.offsetTop - projectSection.offsetHeight;
    const contactThreshold = contactSection.offsetTop - aboutSection.offsetHeight;
  

    if (scrollPosition < projectThreshold) {
        activateNavItem(navItems, 0);
    } else if (scrollPosition < aboutThreshold) {
        activateNavItem(navItems, 1);
    } else if (scrollPosition < contactThreshold) {
        activateNavItem(navItems, 2);
    } else {
        activateNavItem(navItems, 3);
    }
  }
  

  function activateNavItem(navItems, index) {
    navItems.forEach((item, i) => {
        if (i === index) {
            item.classList.add("active");
        } else {
            item.classList.remove("active");
        }
    });
  }
  
  
