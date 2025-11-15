// ===================== Navbar Initialization Function =====================
// This will be called after navbar.html is loaded via fetch()

function initNavbar() {
  // ========== USER LOGIN DISPLAY ==========
  const userData = localStorage.getItem("zensaUser");
  const loginDropdown = document.getElementById("loginDropdown");
  const userInfo = document.getElementById("userInfo");
  const userName = document.getElementById("userName");
  const logoutBtn = document.getElementById("logoutBtn");

  if (userData && loginDropdown && userInfo) {
    const user = JSON.parse(userData);
    // Show user name and hide login dropdown
    loginDropdown.style.display = "none";
    userInfo.style.display = "flex";
    userName.textContent = user.name;
  }

  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("zensaUser");
      window.location.reload(); // Refresh to update UI
    });
  }

  // ========== DROPDOWN TOGGLE ==========
  const dropdown = document.querySelector(".dropdown");
  if (dropdown) {
    dropdown.addEventListener("click", (e) => {
      e.stopPropagation();
      dropdown.classList.toggle("active");
    });
    document.addEventListener("click", () => dropdown.classList.remove("active"));
  }

  // ========== MOBILE MENU TOGGLE ==========
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      menuToggle.classList.toggle("active");
      navLinks.classList.toggle("active");
    });
  }

  // ========== NAVBAR SCROLL EFFECT ==========
  window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");
    if (nav) {
      if (window.scrollY > 10) nav.classList.add("scrolled");
      else nav.classList.remove("scrolled");
    }
  });

  // ================= script for load card ====================
  const cards = document.querySelectorAll(".featured-card");
  const loadMoreBtn = document.getElementById("loadMoreBtn");
  let visibleCount = 6; // show 6 initially

  function updateCards() {
    if (!cards.length) return; // no cards on some pages
    cards.forEach((card, index) => {
      card.classList.toggle("show", index < visibleCount);
    });
    if (loadMoreBtn && visibleCount >= cards.length) {
      loadMoreBtn.style.display = "none";
    }
  }

  updateCards();

  if (loadMoreBtn) {
    loadMoreBtn.addEventListener("click", () => {
      visibleCount += 2; // show 2 more each click
      updateCards();
    });
  }
}

// ===================== Run logic on normal pages (with navbar inline) =====================
document.addEventListener("DOMContentLoaded", () => {
  // If the navbar already exists on the page (not fetched dynamically)
  if (document.querySelector("nav")) {
    initNavbar();
  }
});












 
            function isLoggedIn() {
                return sessionStorage.getItem("loggedIn") === "true";
            }

            function openCreateAd() {
                if (!isLoggedIn()) {
                    // User is not logged in → send to login page
                    window.location.href = "login.html";
                } else {
                    // User logged in → allow posting
                    window.location.href = "createAds.html";
                }
            }
