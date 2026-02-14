document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     FADE ANIMATION
  ========================= */
  const fades = document.querySelectorAll('.fade');

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    },
    { threshold: 0.2 }
  );

  fades.forEach(el => observer.observe(el));


  /* =========================
     TEAM SECTION
  ========================= */
  const teamItems = document.querySelectorAll('.team-list li');
  const teamImage = document.getElementById('teamImage');
  const teamCareer = document.getElementById('teamCareer');

  const careers = {
    "이 도 엽": ["[연극] 나무위의군대 앙리할아버지와나 데스트랩"],
    "이 선": ["[애니메이션] 뽀로로 포켓몬스터"],
    "하 동 준": ["[연극] 갈매기 메디아 댓글부대"],
    "지 민 영": ["[연극] 무인도로가는길"],
    "진 정 윤": ["[연극] 준생"]
  };

  teamItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      const name = item.textContent.trim();
      const newImage = item.getAttribute('data-image');

      teamImage.style.opacity = 0;

      setTimeout(() => {
        teamImage.src = newImage;
        teamImage.style.opacity = 1;

        if (careers[name]) {
          teamCareer.innerHTML = careers[name].join("<br>");
        }
      }, 200);
    });
  });


  /* =========================
     MODAL
  ========================= */
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modalImg");
  const closeBtn = document.querySelector(".close");
  const images = document.querySelectorAll(".program-image img");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");

  let currentIndex = 0;

  images.forEach((img, index) => {
    img.addEventListener("click", () => {
      currentIndex = index;
      modal.classList.add("show");
      modalImg.src = img.src;
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.classList.remove("show");
  });

  modal.addEventListener("click", () => {
    modal.classList.remove("show");
  });

  modalImg.addEventListener("click", (e) => {
    e.stopPropagation();
  });

  prevBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    modalImg.src = images[currentIndex].src;
  });

  nextBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    currentIndex = (currentIndex + 1) % images.length;
    modalImg.src = images[currentIndex].src;
  });

  document.addEventListener("keydown", (e) => {
    if (!modal.classList.contains("show")) return;

    if (e.key === "ArrowRight") nextBtn.click();
    if (e.key === "ArrowLeft") prevBtn.click();
    if (e.key === "Escape") modal.classList.remove("show");
  });


  /* =========================
     INTRO INK ANIMATION
  ========================= */
  const inks = document.querySelectorAll("#intro .intro-ink");

  const introObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        inks.forEach((ink, index) => {
          setTimeout(() => {
            ink.classList.add("animate");
          }, index * 300);
        });
      }
    });
  }, { threshold: 0.5 });

  const introSection = document.getElementById("intro");
  if (introSection) introObserver.observe(introSection);

});
