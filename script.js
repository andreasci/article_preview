const shareBtn = document.querySelector('.share-button');
const tooltip = document.querySelector('.share-tooltip');
const shareCnt = document.querySelector('.share-container');
const bottomBar = document.querySelector('.bottom-bar');

shareBtn.addEventListener('click', (event) => {
  event.stopPropagation();
  tooltip.style.visibility = 'visible';
  tooltip.style.opacity = '1';
  shareCnt.style.visibility = 'visible';
  shareCnt.style.opacity = '1';
  if (window.matchMedia('(max-width: 768px)').matches) {
    shareBtn.style.transform = 'translateY(13px)';
    shareBtn.classList.toggle('invertito');
    shareBtn.style.width = '30px';
    shareBtn.style.height = '30px';
  }
});

document.addEventListener('click', () => {
  tooltip.style.visibility = 'hidden';
  tooltip.style.opacity = '0';
  shareCnt.style.visibility = 'hidden';
  shareCnt.style.opacity = '0';
  if (window.matchMedia('(max-width: 768px)').matches) {
    shareBtn.style.transform = 'translateY(-0px)';
  }
});

tooltip.addEventListener('click', (event) => {
    event.stopPropagation();
});
  