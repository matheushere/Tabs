let links = document.querySelectorAll('.links');

for(let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', activateTab);
}

function activateTab() {
  let links = document.querySelectorAll('.links');
  for(let i = 0; i < links.length; i++) {
    links[i].classList.remove('active');
  }
  this.classList.add('active');
  
  let tabContent = document.querySelectorAll('.tabContent');
  for(let i = 0; i < tabContent.length; i++) {
    tabContent[i].classList.remove('active')
  }
  
  let idTarget = this.getAttribute('data-target');
  
  let tabTarget = document.querySelector(idTarget);
  tabTarget.classList.add('active');
}
