const switchContent = switchData => {
  const title = document.querySelector(`#${switchData.title}`);
  const content = document.querySelector(`#${switchData.content}`);
  if (title && content) {
    switchData.btns.forEach(btn => {
      const btnElement = document.querySelector(`#${btn.id}`);
      btnElement.addEventListener('click', e => {
        title.textContent = btn.title;
        content.textContent = btn.content;
        
      });
    });
  }
};
export default switchContent;
