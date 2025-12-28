document.addEventListener('DOMContentLoaded', () => {
window.addEventListener("load", () => {
  modal.style.display = "none";
});

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

  const teamItems = document.querySelectorAll('.team-list li');
  const teamImage = document.getElementById('teamImage');
  const teamCareer = document.getElementById('teamCareer');

const careers = {
  "이 도 엽": [
    "[연극] 나무위의군대 앙리할아버지와나 데스트랩",
    "[영화] 가석방심사관이한신 우씨왕후 감사합니다",
    "[드라마] 소방서옆경찰서 낭만닥터김사부3 갯마을차차차"
  ],
  "이 선": [
    "[애니메이션] 뽀로로 포켓몬스터",
    "[연극] 만선 햄릿아바따",
    "[영화] 씬 커미션 짐작보다따뜻하게",
    "[유아방송] 딩동댕유치원 번개맨"
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
      "[웹드라마] Shorts&Strange2"
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


        teamCareer.innerHTML = careers[name].join("<br>");
        teamCareer.style.transform = "translate(40px, 120px)";
      }, 200);
    });

   // item.addEventListener('mouseleave', () => {
   //   teamCareer.textContent = '';
   // });
  });
});const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.querySelector(".close");
const images = document.querySelectorAll(".program-image img");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentIndex = 0;

/* 이미지 클릭 → 모달 열기 */
images.forEach((img, index) => {
  img.addEventListener("click", () => {
    currentIndex = index;
    modal.style.display = "flex";
    modalImg.src = img.src;
  });
});

/* X 닫기 */
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

/* 배경 클릭 닫기 */
modal.addEventListener("click", () => {
  modal.style.display = "none";
});

/* 이미지 클릭 시 닫히지 않게 */
modalImg.addEventListener("click", (e) => {
  e.stopPropagation();
});

/* 이전 */
prevBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  modalImg.src = images[currentIndex].src;
});

/* 다음 */
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
const introInk = document.querySelector("#intro .intro-ink");
const introSection = document.getElementById("intro");

const introObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      introInk.classList.add("animate");
      introObserver.unobserve(entry.target); // 한 번만
    }
  });
}, {
  threshold: 0.5
});

introObserver.observe(introSection);

window.addEventListener("load", () => {
  document
    .querySelector("#intro .intro-ink")
    .classList.add("animate");
});
const inks = document.querySelectorAll('#intro .intro-ink');
inks.forEach((ink, i) => {
  setTimeout(() => ink.classList.add('animate'), i * 300); // 순차적 딜레이
});

document.addEventListener("DOMContentLoaded", function() {
  const inks = document.querySelectorAll("#intro .intro-ink");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        // 순차적 애니메이션
        inks.forEach((ink, index) => {
          // 이전 애니메이션 초기화 없이 scale 초기화만
          ink.style.transform = "translate(-50%, -50%) scale(0)";
          ink.style.opacity = 0;

          setTimeout(() => {
            ink.classList.add("animate");
          }, index * 300); // 등장 시간 간격
        });
      } else {
        // 섹션 벗어나면 애니메이션 초기화
        inks.forEach(ink => {
          ink.classList.remove("animate");
        });
      }
    });
  }, { threshold: 0.5 });

  observer.observe(document.querySelector("#intro"));
});

