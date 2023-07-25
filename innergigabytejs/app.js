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
  onLeave: (e) => {
    // console.log('onLeave e:', e)
    $('.section [data-aos]').removeClass("aos-animate");
    // $('.section.active .s06 li [data-aos]').removeClass("aos-animate");
  },
  onSlideLeave: () => {
    // $('.slide [data-aos]').removeClass("aos-animate");
  },
  afterSlideLoad: () => {
    // $('.slide.active [data-aos]').addClass("aos-animate");
  },
  afterLoad: (e) => {
    // console.log('afterLoad e:', e)
    $('.section.active [data-aos]').addClass("aos-animate");
    $('.fp-table.active .aos-init').addClass('aos-animate');
    // $('.section.active .s06 li [data-aos]').addClass("aos-animate");
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
      top: "+=275"
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

// s05 tab actions
let s05TabId = 's05_tab_01'
console.log('s05TabId:', s05TabId)
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
  console.log('s05TabId:', s05TabId)
})

// s05 connectivity tab actions
let s05ConnectivityTabId = 's05_connectivity_tab_01'
console.log('s05ConnectivityTabId:', s05ConnectivityTabId)
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
  console.log('s05ConnectivityTabId:', s05TabId)
})

// s06 tab actions
let s06TabId = 's06_tab_01'
console.log('s06TabId:', s06TabId)

$('.s06_tab').click(function () {
  const tabId = $(this).data('tab')

  if (s06TabId === tabId) return

  $('.s06_tab').removeClass('active')
  $(this).addClass('active')

  const removeTabContent = `#${s06TabId}_content`
  const activeTabContent = `#${tabId}_content`

  $(removeTabContent).removeClass('active')
  $(activeTabContent).addClass('active')
  // $('.section.active [data-aos]').addClass("aos-animate");

  s06TabId = tabId
  // console.log('s06TabId:', s06TabId)

  // todo aos-animate 切換的時候再加上去
  // 取得該tab底下的li數量 forEach 加上 data-set 
})