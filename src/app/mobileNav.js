const menuBtn = document.querySelector('.header__nav--mobile--btn');
let menuState;
const toggleMenu = () => {
  if (menuState) {
    menuBtn.classList.remove('close');
    // Set Menu State
    menuState = false;
  } else if (!menuState) {
    menuBtn.classList.add('close');
    // Set Menu State
    menuState = true;
  }
};

const menu = () => {
  const menuMobileButton = document.querySelector('.header__nav--mobile--btn');
  menuMobileButton.addEventListener('click', e => {
    const menu = document.querySelector('.nav--mobile');
    const menuActiveClass = 'nav--mobile--active';
     const overFlowTarget = document.children[0]
    if(menuState){
      overFlowTarget.style.overflowY = 'auto'

    }else if(!menuState){
      overFlowTarget.style.overflowY = 'hidden'
    }
    toggleMenu();
    menu.classList.toggle(menuActiveClass)
  });
};
export default menu;
