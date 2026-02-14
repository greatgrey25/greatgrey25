document.addEventListener('DOMContentLoaded', () => {

  /* =======================
     FADE ANIMATION
  ======================= */
  const fades = document.querySelectorAll('.fade');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, { threshold: 0.2 });

  fades.forEach(el => observer.observe(el));


  /* =======================
     TEAM (ARTIST)
  ======================= */
  const teamItems = document.querySelectorAll('.team-list li');
  const teamImage = document.getElementById('teamImage');
  const teamCareer = document.getElementById('teamCareer');

  const careers = {
    "이 도 엽": [
      "[연극] 나무위의군대 앙리할아버지와나 데스트랩",
      "[영화] 가석방심사관이한신 우씨왕후 감사합니다",
      "[드라마] 소방서옆경찰서 낭만닥터김사부3 갯마을차차차",
      "[수상] 2008 핀터페스티벌 남자연기상 / 2008 밀양연극제 젊은예술가상 / 2007 서울연극제 남자연기상"
    ],

    "이 선": [
      "[애니메이션] 뽀로로 포켓몬스터",
      "[연극] 만선 햄릿아바따",
      "[영화] 씬 커미션 짐작보다따뜻하게",
      "[유아방송] 딩동댕유치원 번개맨",
      "[수상] 2018 대한민국대중문화예술상 문체부장관상 / 2012 KBS라디오 최우수연기상 / 1994 KBS라디오 신인상"
    ],

    "하 동 준": [
      "[연극] 갈매기 메디아 댓글부대",
      "[뮤지컬] 미스사이공 웨스트사이드스토리 토요일밤의열기",
      "[영화] 야당 행복의나라 전지적독자시점",
      "[드라마] 고려거란전쟁 이상한변호사우영우 끝내주는해결사"
    ],

    "지 민 영": [
      "[연극] 무인도로가는길 인수_나쁜부모들 백석을기다리다",
      "[영화] 비밀의언덕 편집의묘미 다정의시간",
      "[웹드라마] Shorts&Strange2",
      "[수상] 2025 국제아동청소년연극협회 자랑스런연극인상"
    ],

    "진 정 윤": [
      "[연극] 준생 2인실 그대이름은아빠",
      "[영화] 사나운애착 토마토달걀볶음 산악회",
      "[드라마] 우리집",
      "[웹드라마] 더캠퍼스"
    ]
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


  /* =======================
     MODAL
  ======================= */
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
      modal.style.display = "flex";
      modalImg.src = img.src;
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  modal.addEventListener("click", () => {
    modal.style.display = "none";
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
    if (modal.style.display !== "flex") return;

    if (e.key === "ArrowRight") {
      currentIndex = (currentIndex + 1) % images.length;
      modalImg.src = images[currentIndex].src;
    }

    if (e.key === "ArrowLeft") {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      modalImg.src = images[currentIndex].src;
    }

    if (e.key === "Escape") {
      modal.style.display = "none";
    }
  });


  /* =======================
     INTRO INK
  ======================= */
  const inks = document.querySelectorAll('#intro .intro-ink');

  const introObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        inks.forEach((ink, i) => {
          setTimeout(() => {
            ink.classList.add("animate");
          }, i * 300);
        });
      }
    });
  }, { threshold: 0.5 });

  introObserver.observe(document.querySelector("#intro"));

});
