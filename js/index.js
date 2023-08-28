
const element = document.getElementById('phone');
const maskOptions = {
  mask: '+{7}(000)000-00-00',
  lazy: false
};
const mask = IMask(element, maskOptions);


const accordions = document.getElementsByClassName('exercise-one__btn')
const panels = document.getElementsByClassName('panel')

for (let i = 0; i < accordions.length; i++) {
  accordions[i].addEventListener('click', function () {
    let isActive = this.classList.contains('active')

    for (let j = 0; j < accordions.length; j++) {
      accordions[j].classList.remove('active')
      panels[j].style.display = 'none'
    }

    if (!isActive) {
      this.classList.toggle('active')
      const panel = this.nextElementSibling
      panel.style.display = 'block'
    }
  })
}

const form = document.getElementById('myForm')

function handleSubmit(event) {
  event.preventDefault()

  const name = form.elements['name'].value
  const phone = form.elements['phone'].value
  const email = form.elements['email'].value

  console.log('Имя:', name)
  console.log('Телефон:', phone)
  console.log('Email:', email)
  form.reset()
}

form.addEventListener('submit', handleSubmit)

const data = {
  datasets: [
    {
      data: [168, 117, 50],
      backgroundColor: [
        'rgba(232, 61, 70, 1)',
        'rgba(249, 166, 32, 1)',
        'rgba(0, 0, 0, 1)',
      ],
    },
  ],
}

const dataTwo = {
  datasets: [
    {
      data: [177, 350, 177, 177, 177],
      backgroundColor: [
        'rgba(232, 61, 70, 1)',
        'rgba(0, 95, 167, 1)',
        'rgba(249, 166, 32, 1)',
        'rgba(128, 128, 128, 1)',
        'rgba(0, 0, 0, 1)',
      ],
    },
  ],
}

const dataThree = {
  datasets: [
    {
      data: [65, 45, 20],
      backgroundColor: [
        'rgba(232, 61, 70, 1)',
        'rgba(249, 166, 32, 1)',
        'rgba(0, 0, 0, 1)',
      ],
    },
  ],
}


const dataFour = {
  datasets: [
    {
      data: [21, 44, 21, 21, 21],
      backgroundColor: [
        'rgba(232, 61, 70, 1)',
        'rgba(0, 95, 167, 1)',
        'rgba(249, 166, 32, 1)',
        'rgba(128, 128, 128, 1)',
        'rgba(0, 0, 0, 1)',
      ],
    },
  ],
}


const options = {
  responsive: true,
  cutout: '80%',
  rotation: 270,
}

const sliceThickness = {
  id: 'sliceThickness',
}

// Создаем диаграмму
const ctxOne = document.getElementById('chart-one').getContext('2d')
const ctxTwo = document.getElementById('chart-two').getContext('2d')
const ctxThree = document.getElementById('chart-three').getContext('2d')
const ctxFour = document.getElementById('chart-four').getContext('2d')

const chartOne = new Chart(ctxOne, {
  type: 'doughnut',
  data: data,
  options: options,
  plugins: [sliceThickness],
})

const chartTwo = new Chart(ctxTwo, {
  type: 'doughnut',
  data: dataTwo,
  options: options,
  plugins: [sliceThickness],
})


const chartThree = new Chart(ctxThree, {
  type: 'doughnut',
  data: dataThree,
  options: options,
  plugins: [sliceThickness],
})

const chartFour = new Chart(ctxFour, {
  type: 'doughnut',
  data: dataFour,
  options: options,
  plugins: [sliceThickness],
})


