const carousel = carouselId => {
  const carouselElement = document.querySelector(`#${carouselId}`);
  const carouselContainer = Array.from(carouselElement.children).find(
    child => child.classList.contains ( 'carousel__container')
  );
  const prevBtn = Array.from(carouselElement.children).find(
    child => child.id === 'carousel-prev-btn'
  );
  const nextBtn = Array.from(carouselElement.children).find(
    child => child.id === 'carousel-next-btn'
  );
  const carouselItems = carouselContainer.children;
  const carouselLength = carouselContainer.children.length;
  let current = 0;
  let currentItem = carouselItems[current];
  currentItem.classList.add('card--carousel--current');
  nextBtn.addEventListener('click', e => {
    console.log('nani')
    currentItem.classList.remove('card--carousel--current');
    current++;
    if (current === carouselLength) {
      current = 0;
    }
    currentItem = carouselItems[current];
    currentItem.classList.add(
      'card--carousel--current',
      'card--carousel--animate--left'
    );
    if (
      currentItem.classList.contains(
        'card--carousel--animate--right'
      )
    ) {
      currentItem.classList.remove('card--carousel--animate--right');
    }
  });
  prevBtn.addEventListener('click', e => {
    currentItem.classList.remove('card--carousel--current');
    if (current === 0) {
      current = carouselLength;
    }
    current--;
    currentItem = carouselItems[current];
    currentItem.classList.add(
      'card--carousel--current',
      'card--carousel--animate--right'
    );
    if (
      currentItem.classList.contains('card--carousel--animate--left')
    ) {
      currentItem.classList.remove('card--carousel--animate--left');
    }
  });
};
export default carousel
