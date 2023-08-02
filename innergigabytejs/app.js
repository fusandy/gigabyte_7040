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

  // $('.s04_tab').removeClass('active')
  // $(this).addClass('active')

  const removeTabContent = `#${s04TabId}_content`
  const activeTabContent = `#${tabId}_content`

  $(removeTabContent).removeClass('active')
  $(activeTabContent).addClass('active')

  s04TabId = tabId
})

const s04Tabs = document.querySelectorAll('.s04_tab');
const s04ActiveIndicator = document.querySelector('.s04_tab_area .active_indicator');

// 初始化 .active_indicator 的寬度和位置
const s04InitialTab = document.querySelector('.s04_tab.active');
const s04InitialRect = s04InitialTab.getBoundingClientRect();
s04ActiveIndicator.style.width = `${s04InitialRect.width}px`;
s04ActiveIndicator.style.left = `0px`;
s04ActiveIndicator.style.height = `${s04InitialRect.height + window.scrollY}px`;

s04Tabs.forEach((tab) => {
  tab.addEventListener('click', (e) => {
    e.preventDefault()
    // 獲取被點擊標籤的位置和寬度
    const rect = tab.getBoundingClientRect();
    const screenWidth = window.innerWidth;
    const indicatorLeft = (screenWidth - s04InitialTab.parentElement.getBoundingClientRect().width)/2 + 1;
    // 設定紅色區塊的寬度和位置
    s04ActiveIndicator.style.width = `${rect.width}px`;
    s04ActiveIndicator.style.left = `${rect.left - indicatorLeft + window.scrollX}px`;
    s04ActiveIndicator.style.height = `${rect.height + window.scrollY}px`;
    // console.log(rect.left , 'rect.left')
    // console.log(window.scrollX,'window.scrollX')
  });
});

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

// s05 tab actions
let s05TabId = 's05_tab_01'
$('.s05_tab').click(function () {
  const tabId = $(this).data('tab')

  if (s05TabId === tabId) return

  // $('.s05_tab').removeClass('active')
  // $(this).addClass('active')

  const removeTabContent = `#${s05TabId}_content`
  const activeTabContent = `#${tabId}_content`

  $(removeTabContent).removeClass('active')
  $(activeTabContent).addClass('active')

  s05TabId = tabId
})

const s05Tabs = document.querySelectorAll('.s05_tab');
const s05ActiveIndicator = document.querySelector('.s05_tab_area .active_indicator');

// 初始化 .active_indicator 的寬度和位置
const s05InitialTab = document.querySelector('.s05_tab.active');
const s05InitialRect = s05InitialTab.getBoundingClientRect();
s05ActiveIndicator.style.width = `${s05InitialRect.width}px`;
s05ActiveIndicator.style.left = `0px`;
s05ActiveIndicator.style.height = `${s05InitialRect.height + window.scrollY}px`;

s05Tabs.forEach((tab) => {
  tab.addEventListener('click', (e) => {
    e.preventDefault()
    // 獲取被點擊標籤的位置和寬度
    const rect = tab.getBoundingClientRect();
    const screenWidth = window.innerWidth;
    const indicatorLeft = (screenWidth - s05InitialTab.parentElement.getBoundingClientRect().width)/2 + 1;
    // 設定紅色區塊的寬度和位置
    s05ActiveIndicator.style.width = `${rect.width}px`;
    s05ActiveIndicator.style.left = `${rect.left - indicatorLeft + window.scrollX}px`;
    s05ActiveIndicator.style.height = `${rect.height + window.scrollY}px`;
    console.log(rect.left , 'rect.left')
    console.log(window.scrollX,'window.scrollX')
  });
});

// s05 connectivity tab actions
let s05ConnectivityTabId = 's05_connectivity_tab_01'
$('.s05_connectivity_tab').click(function () {
  const tabId = $(this).data('tab')
  const redDotElement = $(this).find('.red_dot')

  if (s05ConnectivityTabId === tabId) return

  // $('.s05_connectivity_tab').removeClass('active')
  // $(this).addClass('active')

  $('.s05_connectivity_tab .red_dot').removeClass('active')
  const removeTabContent = `#${s05ConnectivityTabId}_content`
  $(redDotElement).addClass('active')
  const activeTabContent = `#${tabId}_content`

  $(removeTabContent).removeClass('active')
  $(activeTabContent).addClass('active')

  s05ConnectivityTabId = tabId
})

const s05ConnectivityTabs = document.querySelectorAll('.s05_connectivity_tab');
const s05ConnectivityActiveIndicator = document.querySelector('.s05_connectivity_tab_area .active_indicator');

// 初始化 .active_indicator 的寬度和位置
const s05ConnectivityInitialTab = document.querySelector('.s05_connectivity_tab.active');
const s05ConnectivityInitialRect = s05ConnectivityInitialTab.getBoundingClientRect();
s05ConnectivityActiveIndicator.style.width = `${s05ConnectivityInitialRect.width}px`;
s05ConnectivityActiveIndicator.style.left = `0px`;
s05ConnectivityActiveIndicator.style.height = `${s05ConnectivityInitialRect.height + window.scrollY}px`;

s05ConnectivityTabs.forEach((tab) => {
  tab.addEventListener('click', (e) => {
    e.preventDefault()
    // 獲取被點擊標籤的位置和寬度
    const rect = tab.getBoundingClientRect();
    const screenWidth = window.innerWidth;
    const indicatorLeft = (screenWidth - s05ConnectivityInitialTab.parentElement.getBoundingClientRect().width)/2 + 1;
    // 設定紅色區塊的寬度和位置
    s05ConnectivityActiveIndicator.style.width = `${rect.width}px`;
    s05ConnectivityActiveIndicator.style.left = `${rect.left - indicatorLeft + window.scrollX}px`;
    s05ConnectivityActiveIndicator.style.height = `${rect.height + window.scrollY}px`;
    // console.log(rect.left , 'rect.left')
    // console.log(window.scrollX,'window.scrollX')
  });
});

// s05 output tab actions
let s05OutputTabId = 's05_output_tab_01'
$('.s05_output_tab').click(function () {
  const tabId = $(this).data('tab')
  const redDotElement = $(this).find('.red_dot')

  if (s05OutputTabId === tabId) return

  // $('.s05_output_tab').removeClass('active')
  $('.s05_output_tab .red_dot').removeClass('active')
  // $(this).addClass('active')
  $(redDotElement).addClass('active')

  const removeTabContent = `#${s05OutputTabId}_content`
  const activeTabContent = `#${tabId}_content`

  $(removeTabContent).removeClass('active')
  $(activeTabContent).addClass('active')

  s05OutputTabId = tabId
})

const s05OutputTabs = document.querySelectorAll('.s05_output_tab');
const s05OutputActiveIndicator = document.querySelector('.s05_output_tab_area .active_indicator');

// 初始化 .active_indicator 的寬度和位置
const s05OutputInitialTab = document.querySelector('.s05_output_tab.active');
const s05OutputInitialRect = s05OutputInitialTab.getBoundingClientRect();
s05OutputActiveIndicator.style.width = `${s05OutputInitialRect.width}px`;
s05OutputActiveIndicator.style.left = `0px`;
s05OutputActiveIndicator.style.height = `${s05OutputInitialRect.height + window.scrollY}px`;

s05OutputTabs.forEach((tab) => {
  tab.addEventListener('click', (e) => {
    e.preventDefault()
    // 獲取被點擊標籤的位置和寬度
    const rect = tab.getBoundingClientRect();
    const screenWidth = window.innerWidth;
    const indicatorLeft = (screenWidth - s05OutputInitialTab.parentElement.getBoundingClientRect().width)/2 + 1;
    // 設定紅色區塊的寬度和位置
    s05OutputActiveIndicator.style.width = `${rect.width}px`;
    s05OutputActiveIndicator.style.left = `${rect.left - indicatorLeft + window.scrollX}px`;
    s05OutputActiveIndicator.style.height = `${rect.height + window.scrollY}px`;
    // console.log(rect.left , 'rect.left')
    // console.log(window.scrollX,'window.scrollX')
  });
});

// s06 tab actions
let s06TabId = 's06_tab_01'
$('.s06_tab').click(function () {
  const tabId = $(this).data('tab')

  if (s06TabId === tabId) return

  // $('.s06_tab').removeClass('active')
  // $(this).addClass('active')

  const removeTabContent = `#${s06TabId}_content`
  const activeTabContent = `#${tabId}_content`

  $(removeTabContent).removeClass('active')
  $(activeTabContent).addClass('active')

  s06TabId = tabId
})

const s06Tabs = document.querySelectorAll('.s06_tab');
const s06ActiveIndicator = document.querySelector('.s06_tab_area .active_indicator');

// 初始化 .active_indicator 的寬度和位置
const s06InitialTab = document.querySelector('.s06_tab.active');
const s06InitialRect = s06InitialTab.getBoundingClientRect();
s06ActiveIndicator.style.width = `${s06InitialRect.width}px`;
s06ActiveIndicator.style.left = `0px`;
s06ActiveIndicator.style.height = `${s06InitialRect.height + window.scrollY}px`;

s06Tabs.forEach((tab) => {
  tab.addEventListener('click', (e) => {
    e.preventDefault()
    // 獲取被點擊標籤的位置和寬度
    const rect = tab.getBoundingClientRect();
    const screenWidth = window.innerWidth;
    const indicatorLeft = (screenWidth - s06InitialTab.parentElement.getBoundingClientRect().width)/2 + 1;
    // 設定紅色區塊的寬度和位置
    s06ActiveIndicator.style.width = `${rect.width}px`;
    s06ActiveIndicator.style.left = `${rect.left - indicatorLeft + window.scrollX}px`;
    s06ActiveIndicator.style.height = `${rect.height + window.scrollY}px`;
    // console.log(rect.left , 'rect.left')
    // console.log(window.scrollX,'window.scrollX')
  });
});