document.addEventListener("DOMContentLoaded", function () {
  const checkbox = document.getElementById("check");
  const menuList = document.querySelector(".menu_list");
  const menuItems = document.querySelectorAll(".menu_list ul li");

  function toggleMenu() {
    menuList.classList.toggle("visible", checkbox.checked);
  }

  // Initial check
  toggleMenu();

  // Toggle on checkbox change
  checkbox.addEventListener("change", toggleMenu);

  // Close menu when clicking any <li> item
  menuItems.forEach((li) => {
    li.addEventListener("click", function () {
      checkbox.checked = false; // Uncheck the checkbox
      toggleMenu(); // Apply the class change
    });
  });
});

// Slow down background video
document.getElementById("background-video").playbackRate = 0.6;
