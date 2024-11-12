const data = [
  { url: 'portpolio_img/17.상계동양메이저2024/KakaoTalk_20240828_133205855_17.jpg', description: '노원 상계동양메이저',link: 'ptpo_8.html', text:'블루&화이트인테리어의 정석', balanceBeam: 30, amount: 250 },
  { url: 'portpolio_img/16.중랑구아파트/1.jpg', description: '중랑구 아파트 43평',link: 'ptpo_7.html', text:'새롭게 재탄생된', balanceBeam: 40, amount: 250 },
  { url: 'portpolio_img/15.상계현대3차아파트/Sum.jpg', description: '상계현대3차 아파트',link: 'ptpo_6.html', text:'고객님의 취향이 고스란히 반영된', balanceBeam: 30, amount: 250 },
  { url: 'portpolio_img/14.중랑숲 금호어울림/5.jpg', description: '중랑숲 금호어울림',link: 'ptpo_5.html', text:'더욱 아름다운 하우스로', balanceBeam: 30, amount: 200 },
  { url: 'portpolio_img/13.서해아파트/7.jpg', description: '의정부 서해아파트',link: 'ptpo_4.html', text:'공간의 분리로 생동감있게', balanceBeam: 30, amount: 200 },
  { url: 'portpolio_img/12.올림픽선수기자촌/올림픽선수기자촌_송파구.jpg', description: '송파 올림픽선수기자촌 아파트', link: 'list8.html', text:'화이트톤과 브라운 톤의 조화로 깔끔하고 따듯한 집의 분위기', balanceBeam: 30, amount: 150 },
  { url: 'portpolio_img/11.중계건영/중계건영_노원구.jpg', description: '노원 중계건영아파트',link: 'list2.html', text:'너무 모던하지 않으며, 따듯하고 세련된 느낌아파트', balanceBeam: 30, amount: 250 },
  { url: 'portpolio_img/10.학여울청구/학여울청구_노원구.jpg', description: '노원 학여울청구아파트', link: 'list3.html', text:'전반적으로 따뜻한 느낌의 아파트', balanceBeam: 30, amount: 250 },
  { url: 'portpolio_img/9.대림벽산/대림벽산_노원구.jpg', description: '노원 대림벽산아파트',link: 'list4.html', text:'고급진 느낌의 아파트', balanceBeam: 50, amount: 250 },
  { url: 'portpolio_img/8.수락리버시티/수락리버시티_노원구.jpg', description: '노원 수락리버시티', link: 'list5.html', text:'화사한 느낌의 인테리어', balanceBeam: 20, amount: 150 },
  { url: 'portpolio_img/7.프레미엄엠코/프레미엄엠코_노원구.jpg', description: '노원 프레미어스 엠코',link: 'list6.html', text:'개방적인 느낌의 인테리어', balanceBeam: 30, amount: 100 },
  { url: 'portpolio_img/6.상계동양메이저/상계동양메이저_노원구.jpg', description: '노원 상계동양메이저',link: 'list7.html', text:'아늑한 느낌의 아파트', balanceBeam: 30, amount: 250 },
  { url: 'portpolio_img/5.창동대우그린/1.jpg', description: '도봉 창동대우그린',link: 'list9.html', text:'공간의 활용도와 디자인 둘 모두를 챙긴 아파트', balanceBeam: 30, amount: 250 },
  { url: 'portpolio_img/4.하계현대2차/1.jpg', description: '노원 하계현대2차 아파트',link: 'list10.html', text:'새하얀 도화지같은 아파트', balanceBeam: 30, amount: 200 },
  { url: 'portpolio_img/3.별내푸르지오_32평/6.jpg', description: '별내푸르지오',link: 'ptpo_1.html', text:'화이트톤으로 깔끔한 느낌을 주는 아파트', balanceBeam: 30, amount: 150 },
  { url: 'portpolio_img/2.신내6단지_24평/1.jpg', description: '중랑 신내6단지',link: 'ptpo_2.html', text:'은은한 분위기를 자아내는 인테리어', balanceBeam: 20, amount: 200 },
  { url: 'portpolio_img/1.수락리버시티_34평/거실1.jpg', description: '노원 수락리버시티',link: 'ptpo_3.html', text:'깔끔하며 고급스럽게', balanceBeam: 30, amount: 200 },
];

const itemsPerPage = 6;
let currentPage = 1;
let filteredData = data;

function displayData(page, dataList) {
  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const pageData = dataList.slice(start, end);

  const photoListElement = document.getElementById('photoList');
  photoListElement.innerHTML = pageData.map(item => `
      <div class="photo-item"><a href="${item.link}">
          <img src="${item.url}" alt="${item.description}">
          <h3 style="text-align:left;">${item.description}</h3>
          <p style="color:black; text-align:left; margin-top:20px;">${item.text}</p></a>
      </div>
  `).join('');
}

function setupPagination(dataList) {
  const totalPages = Math.ceil(dataList.length / itemsPerPage);
  const paginationElement = document.getElementById('pagination');
  paginationElement.innerHTML = '';

  for (let i = 1; i <= totalPages; i++) {
      const button = document.createElement('button');
      button.innerText = i;
      button.classList.add('page-btn');
      if (i === currentPage) {
          button.classList.add('active');
      }
      button.addEventListener('click', () => {
          currentPage = i;
          displayData(currentPage, dataList);
          updatePagination(dataList);
      });
      paginationElement.appendChild(button);
  }
}

function updatePagination(dataList) {
  const buttons = document.querySelectorAll('#pagination button');
  buttons.forEach(button => {
      button.classList.remove('active');
      if (parseInt(button.innerText) === currentPage) {
          button.classList.add('active');
      }
  });
}

function filterData() {
  const squareCheckboxes = document.querySelectorAll('.squareCheckbox:checked');
  const priceCheckboxes = document.querySelectorAll('.priceCheckbox:checked');

  let squareValues = Array.from(squareCheckboxes).map(checkbox => parseInt(checkbox.value));
  let priceValues = Array.from(priceCheckboxes).map(checkbox => parseInt(checkbox.value));

  return data.filter(item => {
      if (squareValues.length > 0 && !squareValues.includes(item.balanceBeam)) {
          return false;
      }
      if (priceValues.length > 0 && !priceValues.includes(item.amount)) {
          return false;
      }
      return true;
  });
}

document.getElementById('searchInput').addEventListener('input', (event) => {
const searchTerm = event.target.value.toLowerCase();
filteredData = filterData().filter(item => 
  item.description.toLowerCase().includes(searchTerm) || 
  item.text.toLowerCase().includes(searchTerm)
);
currentPage = 1;
displayData(currentPage, filteredData);
setupPagination(filteredData);
});


document.querySelectorAll('.squareCheckbox, .priceCheckbox').forEach(checkbox => {
  checkbox.addEventListener('change', () => {
      filteredData = filterData();
      currentPage = 1;
      displayData(currentPage, filteredData);
      setupPagination(filteredData);
  });
});
// Initial display
displayData(currentPage, filteredData);
setupPagination(filteredData);
document.querySelector('.filter-icon').addEventListener('click', () => {
  document.getElementById('overlay').style.display = 'flex';
});

document.getElementById('overlay').addEventListener('click', (event) => {
  if (event.target === document.getElementById('overlay')) {
      document.getElementById('overlay').style.display = 'none';
  }
});

document.getElementById('closeFilterOptions').addEventListener('click', () => {
  document.getElementById('overlay').style.display = 'none';
});


