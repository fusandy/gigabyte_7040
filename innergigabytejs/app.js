// fullpage init
new fullpage('#fullpage', {
  navigation: true,
  navigationPosition: 'right',
  navigationTooltips: [
    'AMD Ryzen 7040 U series Ultimate Mlni PC',
    'Video',
    'New Modular Chassis',
    'Performance / Low Noise / Upgrade Kit',
    'AMD / Connectivity / Out Put / DDRS / VESA',
    'Small Outside, Powerful Inside',
    'Product Pictures',
    'Windows 11'
  ],
  scrollOverflow: true,
  normalScrollElements: '.modal',
  onLeave: () => {
    $('.section [data-aos]').removeClass("aos-animate")
  },
  onSlideLeave: () => {
    $('.slide [data-aos]').removeClass("aos-animate")
  },
  afterSlideLoad: () => {
    $('.slide.active [data-aos]').addClass("aos-animate")
  },
  afterLoad: () => {
    $('.section.active [data-aos]').addClass("aos-animate")
    $('.fp-table.active .aos-init').addClass('aos-animate')
  }
})

// s03 New Modular Phassis animation
const collapseBtn = document.querySelector('.collapse-btn')    
let collapse = false
  
$('.collapse-btn').click(e => {
  e.preventDefault()
  // close -> open
  if (!collapse) {
    $('.collapse-btn').addClass('invisible')
    $('.box-product').addClass('fly-item')
    $('.box-bottom').removeClass('hidden-item').removeClass('invisible').addClass('display-item')

    $('.box-01').animate({
      opacity: 1,
      top: "-=280"
    }, 1500)
    $('.box-02').animate({
      opacity: 1,
      top: "-=225",
      left: "+=30"
    }, 1500)
    $('.box-03').animate({
      opacity: 1,
      top: "-=185",
      left: "-=30"
    }, 1500)
    $('.box-04').animate({
      opacity: 1,
      top: "-=75",
      left: "-=50"
    }, 1500)
    $('.box-05').animate({
      opacity: 1,
      top: "-=75",
      left: "+=30"
    }, 1500)
    $('.box-06').animate({
      opacity: 1,
      top: "-=75",
      left: "+=120"
    }, 1500)
    $('.box-07').animate({
      opacity: 1,
      top: "-=30"
    }, 1500)
    $('.box-product').animate({
      top: "-=410"
    }, 1500, () => {
      // Animation complete.
      $('.collapse-btn').removeClass('invisible')
      collapse = true
      collapseBtn.innerHTML = 'Recovery'
    })
  } else {
    // open -> close
    $('.collapse-btn').addClass('invisible')

    $('.box-01').animate({
      opacity: 0,
      top: "+=280"
    }, 1500)
    $('.box-02').animate({
      opacity: 0,
      top: "+=225",
      left: "-=30"
    }, 1500)
    $('.box-03').animate({
      opacity: 0,
      top: "+=185",
      left: "+=30"
    }, 1500)
    $('.box-04').animate({
      opacity: 0,
      top: "+=75",
      left: "+=50"
    }, 1500)
    $('.box-05').animate({
      opacity: 0,
      top: "+=75",
      left: "-=30px"
    }, 1500)
    $('.box-06').animate({
      opacity: 0,
      top: "+=75",
      left: "-=120"
    }, 1500)
    $('.box-07').animate({
      opacity: 0,
      top: "+=30"
    }, 1500)
    $('.box-product').animate({
      top: "+=410"
    }, 1500, () => {
      // Animation complete.
      $('.collapse-btn').removeClass('invisible')
      $('.box-bottom').removeClass('display-item').addClass('hidden-item').addClass('invisible')
      $('.box-product').removeClass('fly-item')
      collapse = false
      collapseBtn.innerHTML = 'Details'
    })
  }
})

// s04 tab actions
let s04TabId = 's04_tab_01'
$('.s04_tab').click(function () {
  const tabId = $(this).data('tab')

  if (s04TabId === tabId) return

  $('.s04_tab').removeClass('active')
  $(this).addClass('active')

  const removeTabContent = `#${s04TabId}_content`
  const activeTabContent = `#${tabId}_content`

  $(removeTabContent).removeClass('active')
  $(activeTabContent).addClass('active')

  s04TabId = tabId
})

// s04 progress bar animation
const progressBars = document.querySelectorAll(".progressbar")

// Set up an Intersection Observer to trigger the progress bar animation
const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5,
}

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    // console.log(entry.isIntersecting)
    if (entry.isIntersecting) {
      // Start the animation when the element is in the viewport
      const percentage = parseInt(entry.target.getAttribute("data-percentage"))
      entry.target.style.width = percentage + "%"
      // Stop observing the element once the animation has started
      // observer.unobserve(entry.target)
    } else {
      // Reset the width to 0 when the element is not in the viewport
      entry.target.style.width = 0 + "%"
    }
  })
}, options)

// Observe all the progress bar elements
progressBars.forEach(progressBar => {
  observer.observe(progressBar)
})

// Todo: Swiper initialize failed cause swiper-button disabled
const swiper = new Swiper(".mySwiper", {
  allowTouchMove: false,
  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
})

console.log('swiper:', swiper)
const swiperWrapper = document.querySelector(".swiper-wrapper");

swiper.on("slideChange", function () {
  // Get the current slide index
  const currentSlideIndex = swiper.activeIndex;
  if (currentSlideIndex === 1 || currentSlideIndex === 2) {
    if (window.innerWidth < 576) {
      swiperWrapper.style.height = "100vw";
    } else {
      swiperWrapper.style.height = "500px";
    }
  } else {
    swiperWrapper.style.height = "auto";
  }
})

// s05 tab actions
let s05TabId = 's05_tab_01'
$('.s05_tab').click(function () {
  const tabId = $(this).data('tab')

  if (s05TabId === tabId) return

  $('.s05_tab').removeClass('active')
  $(this).addClass('active')

  const removeTabContent = `#${s05TabId}_content`
  const activeTabContent = `#${tabId}_content`

  $(removeTabContent).removeClass('active')
  $(activeTabContent).addClass('active')

  s05TabId = tabId
})

// s05 connectivity tab actions
let s05ConnectivityTabId = 's05_connectivity_tab_01'
$('.s05_connectivity_tab').click(function () {
  const tabId = $(this).data('tab')

  if (s05ConnectivityTabId === tabId) return

  $('.s05_connectivity_tab').removeClass('active')
  $(this).addClass('active')

  const removeTabContent = `#${s05ConnectivityTabId}_content`
  const activeTabContent = `#${tabId}_content`

  $(removeTabContent).removeClass('active')
  $(activeTabContent).addClass('active')

  s05ConnectivityTabId = tabId
})

// s06 tab actions
let s06TabId = 's06_tab_01'
$('.s06_tab').click(function () {
  const tabId = $(this).data('tab')

  if (s06TabId === tabId) return

  $('.s06_tab').removeClass('active')
  $(this).addClass('active')

  const removeTabContent = `#${s06TabId}_content`
  const activeTabContent = `#${tabId}_content`

  $(removeTabContent).removeClass('active')
  $(activeTabContent).addClass('active')

  s06TabId = tabId
})