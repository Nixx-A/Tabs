const getId = id => document.getElementById(id)

const btns = document.querySelectorAll('.btn')
const infoContainer = document.querySelector('.information-container')
const sections = document.querySelectorAll('.content')

infoContainer.addEventListener('click', e => {
  const id = e.target.dataset.id
  console.log(id);
  if (id) {
    btns.forEach(btn => {
      btn.classList.remove('active')
    })
    e.target.classList.add('active')
    
    sections.forEach(section => {
      section.classList.remove('active')
    })
    element = getId(id)
    element.classList.add('active')
    console.log(element);
  }
})
