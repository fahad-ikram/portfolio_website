document.addEventListener("DOMContentLoaded", function () {
  const checkbox = document.getElementById("check");
  const menuList = document.querySelector(".menu_list");
  const menuItems = document.querySelectorAll(".menu_list ul li");
  const outerboxes = document.querySelectorAll(".right-box .outerbox");

  let currentBox = null;

  // Show introduction box by default
  outerboxes.forEach((ob) => {
    if (ob.classList.contains("introduction")) {
      ob.classList.add("active");
      currentBox = ob;
    } else {
      ob.classList.remove("active");
    }
  });

  document.querySelectorAll(".left-box .boxes").forEach((box) => {
    box.addEventListener("click", () => {
      const key = box.classList[1];
      const newBox = Array.from(outerboxes).find((ob) =>
        ob.classList.contains(key)
      );

      if (!newBox || newBox === currentBox) return;

      if (currentBox) {
        currentBox.classList.remove("active");
      }

      newBox.classList.add("active");
      currentBox = newBox;
    });
  });

  function toggleMenu() {
    menuList.classList.toggle("visible", checkbox.checked);
  }

  toggleMenu();
  checkbox.addEventListener("change", toggleMenu);

  menuItems.forEach((li) => {
    li.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.querySelector("a").getAttribute("href");
      checkbox.checked = false;
      toggleMenu();
      setTimeout(() => {
        if (targetId !== "#") {
          document
            .querySelector(targetId)
            .scrollIntoView({ behavior: "smooth" });
        }
      }, 600);
    });
  });

  document.getElementById("background-video").playbackRate = 0.6;
});
