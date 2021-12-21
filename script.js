const imagesURL = document.querySelector('.starbucks');
const circle = document.querySelector('.circle');
const link = document.querySelector('.thumb');

// Function Arrow
const imgSlider = image => (imagesURL.src = image);
const changeCircleColor = color => (circle.style.background = color);

link.addEventListener('click', function (e) {
  const id = e.target.src.at(-5);

  const link = `images/img${id}.png`;
  imgSlider(link);

  if (link === 'images/img1.png') changeCircleColor('#017143');
  if (link === 'images/img2.png') changeCircleColor('#eb7495');
  if (link === 'images/img3.png') changeCircleColor('#d752b1');
});
