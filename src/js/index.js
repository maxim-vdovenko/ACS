window.onload = function() {
  loader.init()
  workSlider.init()
  shippingMethods.masonryItem() 
  trackPurchases.init() 

  $('body').on('click', 'a', (e) => {
    const th = $(e.currentTarget)
    if (th.attr('href') === '#') {
      e.preventDefault()
    }
  })
}



const loader = {
  bl: '.loader'
}

loader.init = function() {
  setTimeout(() => {
    $(this.bl).fadeOut(500, () => {
      $(this.bl).removeClass('active')
      this.launch()
    })
  }, 1000) 
}

loader.launch = function() {
  acs.init()
  cloudLogistics.init()
  interNetwork.init()
  blockContainer.init()
  shipping.init()
  integrateTools.init()
  inPress.init()
  orderFulfillment.init()
  mailForwarding.init()
  fulfillmentProcess.init()
  strategyInfo.init()
  orderAdvantages.init()
  faq.init()
  assistedPurchase.init()
  shippingMethods.init()
  shoppingAmerican.init()
  shoppingAdvantages.init()
  rates.init()
  shoppingOnline.init()
}



const animationAdd = {
  controller: null
}

animationAdd.act = function(block, h) {
  this.controller = new ScrollMagic.Controller()
  const scene = new ScrollMagic.Scene({
    triggerElement: block, 
    triggerHook: 'onEnter', 
    offset: h})
    .setTween(block)
    .addTo(this.controller)

  scene.on('enter', () => {
    $(block).addClass('active')
  })
}



const parallaxAdd = {
  controller: null
}

parallaxAdd.act = function(section, element, y, duration) {
  this.controller = new ScrollMagic.Controller()
  new ScrollMagic.Scene({triggerElement: section, triggerHook: 'onEnter', duration, offset: '0'})
  .setTween(element, {y, ease: Linear.easeNone})
  .addTo(this.controller)
}



const acs = {
  mask: '.acs__mask',
  circles: '.acs__circles',
  textBox: '.acs .textBox'
}

acs.init = function() {
  $(this.textBox).addClass('active')
  parallaxAdd.act(this.mask, this.mask + ' span', '-300px', '200%')
  parallaxAdd.act(this.circles, this.circles + ' span:nth-child(1)', '-550px', '100%')
  parallaxAdd.act(this.circles, this.circles + ' span:nth-child(2)', '-650px', '100%')

  $('body').on('mousemove', (e) => {
    const x = e.originalEvent.clientX / 70
    const y = e.originalEvent.clientY / 50
    const xMask = e.originalEvent.clientX / 300
    const yMask = e.originalEvent.clientY / 300

    window.requestAnimationFrame(() => {
      for (let i = 0; i < $(this.mask + ' span').length; i++) {
        $(this.mask + ' span').eq(i).find('i').css({
          'transform': 'translate3d(0, 0, 0) translate('  + ((i + 1) * xMask) + 'px, ' + ((i + 1) * yMask) + 'px)',
        })
      }
      for (let i = 0; i < $(this.circles + ' span').length; i++) {
        $(this.circles + ' span').eq(i).find('i').css({
          'transform': 'translate3d(0, 0, 0) translate('  + ((i + 1) * x) + 'px, ' + ((i + 1) * y) + 'px)',
        })
      }
    })
  })
}



const cloudLogistics = {
  block: '.cloudLogistics__block',
  cont: '.cloudLogistics__cont',
  box: '.cloudLogistics__box',
  picBox: '.cloudLogistics__box.active .cloudLogistics__box-img > div',
  pic: '.cloudLogistics__box.active .cloudLogistics__box-img i',
  menu: {
    bl: '.cloudLogistics__menu',
    button: '.cloudLogistics__menu > li > span'
  }
}

cloudLogistics.init = function() {

  $('body').on('click', this.menu.button, (e) => {
    const th = $(e.currentTarget)
    const index = th.parents('li').index()

    th.parents(this.block).find(this.box).removeClass('active')
    th.parents(this.block).find(this.box).eq(index).addClass('active')

    th.parents(this.menu.bl).find('li').removeClass('active')
    th.parents('li').addClass('active')
  })

  $('body').on('mousemove', this.block, (e) => {
    const x_block = e.originalEvent.clientX
    const y_block = e.originalEvent.clientY
    const x = x_block - ($(this.picBox).width() / 2) + parseInt($(this.picBox).css('marginLeft'), 10)
    const y = y_block - ($(this.picBox).height() / 2) - (parseInt($(this.picBox).css('marginTop'), 10) / 2)
  
    window.requestAnimationFrame(() => {
      for (let i = 0; i < $(this.picBox + ' span').length; i++) {
        $(this.picBox + ' span').eq(i).find('i').css({
          'transform': 'translate('  + (i + 1) * (x / 200) + 'px, ' + (i + 1) * (y / 150) + 'px)',
        })
      }
    })
  })
}



const blockContainer = {
  internationalShipping: '.blockContainer__animation--internationalShipping',
  storageFulfillment:  '.blockContainer__animation--storageFulfillment',
  softwarePlatform: '.blockContainer__animation--softwarePlatform',
  scaleCommerce: '.blockContainer__animation--scaleCommerce',
  flexibleShipping: '.blockContainer__animation--flexibleShipping',
  specialProjects: '.blockContainer__animation--specialProjects',
  packingFees: '.blockContainer__animation--packingFees',
  getAddress: '.blockContainer__animation--getAddress',
  goShopping: '.blockContainer__animation--goShopping',
  storeItems: '.blockContainer__animation--storeItems',
  confirmation: '.blockContainer__animation--confirmation',
  saveWithUs: '.blockContainer__animation--saveWithUs'
}

blockContainer.init = function() {
  animationAdd.act(this.internationalShipping, $(this.internationalShipping).outerHeight() / 2)
  animationAdd.act(this.storageFulfillment, $(this.storageFulfillment).outerHeight() / 2)
  animationAdd.act(this.softwarePlatform, $(this.softwarePlatform).outerHeight() / 2)
  animationAdd.act(this.scaleCommerce, $(this.scaleCommerce).outerHeight() / 2)
  animationAdd.act(this.flexibleShipping, $(this.flexibleShipping).outerHeight() / 2)
  animationAdd.act(this.specialProjects, $(this.specialProjects).outerHeight() / 2)
  animationAdd.act(this.packingFees, $(this.packingFees).outerHeight() / 2)
  animationAdd.act(this.getAddress, $(this.getAddress).outerHeight() / 2)
  animationAdd.act(this.goShopping, $(this.goShopping).outerHeight() / 2)
  animationAdd.act(this.storeItems, $(this.storeItems).outerHeight() / 2)
  animationAdd.act(this.confirmation, $(this.confirmation).outerHeight() / 2)
  animationAdd.act(this.saveWithUs, $(this.saveWithUs).outerHeight() / 2)
}



const interNetwork = {
  map: '.interNetwork__map',
  box: '.interNetwork__map-box',
  button: '.interNetwork__map-button'
}

interNetwork.init = function() {

  $('body').on('click', (e) => {
    if($(e.target).closest(this.box).length) return;
    $(this.box + '.active').removeClass('active')
  })
  
  $('body').on('click', this.button, (e) => {
    const th = $(e.currentTarget)

    if (th.parents(this.box).hasClass('active')) {
      th.parents(this.box).removeClass('active')
    } else {
      th.parents(this.map).find(this.box).removeClass('active')
      th.parents(this.box).addClass('active')
    }
  })
}



const shipping = {
  discounted: {
    bl: '.discountedShipping',
    mask: '.discountedShipping__mask',
    text: '.discountedShipping .textBox',
    logos: '.discountedShipping__logos',
    circles: [
      '.discountedShipping__circles--1',
      '.discountedShipping__circles--2',
      '.discountedShipping__circles--3'
    ]
  },
  flexibility: {
    bl: '.flexibilityShipping',
    mask: '.flexibilityShipping__mask',
    text: '.flexibilityShipping .textBox',
    circles: [
      '.flexibilityShipping__circles--1',
      '.flexibilityShipping__circles--2',
      '.flexibilityShipping__circles--3'
    ]
  },
  favorite: {
    bl: '.favoriteCarrier',
    mask: '.favoriteCarrier__mask',
    text: '.favoriteCarrier .textBox',
    circles: [
      '.favoriteCarrier__circles--1',
      '.favoriteCarrier__circles--2',
      '.favoriteCarrier__circles--3'
    ]
  },
  doesWork: {
    bl: '.doesWork__info',
    text: '.doesWork__info .textBox',
    circles: [
      '.doesWork__info-circles--1',
      '.doesWork__info-circles--2',
      '.doesWork__info-circles--3'
    ]
  }
}

shipping.init = function() {

  animationAdd.act(this.discounted.mask, $(this.discounted.mask).outerHeight() / 4)
  animationAdd.act(this.discounted.text, $(this.discounted.text).outerHeight() / 2)
  animationAdd.act(this.discounted.logos, $(this.discounted.logos).outerHeight() / 2)
  parallaxAdd.act(this.discounted.circles[0], this.discounted.circles[0] + ' span', '-450px', '100%')
  parallaxAdd.act(this.discounted.circles[1], this.discounted.circles[1] + ' span', '-200px', '100%')
  parallaxAdd.act(this.discounted.circles[2], this.discounted.circles[2] + ' span', '-150px', '100%')

  animationAdd.act(this.flexibility.mask, $(this.flexibility.mask).outerHeight() / 4)
  animationAdd.act(this.flexibility.text, $(this.flexibility.text).outerHeight() / 2)
  parallaxAdd.act(this.flexibility.circles[0], this.flexibility.circles[0] + ' span', '-450px', '100%')
  parallaxAdd.act(this.flexibility.circles[1], this.flexibility.circles[1] + ' span', '-200px', '100%')
  parallaxAdd.act(this.flexibility.circles[2], this.flexibility.circles[2] + ' span', '-150px', '100%')

  animationAdd.act(this.favorite.mask, $(this.favorite.mask).outerHeight() / 4)
  animationAdd.act(this.favorite.text, $(this.favorite.text).outerHeight() / 2)
  parallaxAdd.act(this.favorite.circles[0], this.favorite.circles[0] + ' span', '-450px', '100%')
  parallaxAdd.act(this.favorite.circles[1], this.favorite.circles[1] + ' span', '-200px', '100%')
  parallaxAdd.act(this.favorite.circles[2], this.favorite.circles[2] + ' span', '-150px', '100%')

  animationAdd.act(this.doesWork.text, $(this.doesWork.text).outerHeight() / 2)
  parallaxAdd.act(this.doesWork.circles[0], this.doesWork.circles[0] + ' span', '-450px', '100%')
  parallaxAdd.act(this.doesWork.circles[1], this.doesWork.circles[1] + ' span', '-200px', '100%')
  parallaxAdd.act(this.doesWork.circles[2], this.doesWork.circles[2] + ' span', '-150px', '100%')

  $('body').on('mousemove', (e) => {
    const x = e.originalEvent.clientX / 60
    const y = e.originalEvent.clientY / 50

    animationCircles(this.discounted.circles)
    animationCircles(this.flexibility.circles)
    animationCircles(this.favorite.circles)
    animationCircles(this.doesWork.circles)

    function animationCircles (circles) {
      window.requestAnimationFrame(() => {
        for (let i = 0; i < circles.length; i++) {
          $(circles[i] + ' i').css({
            'transform': 'translate3d(0, 0, 0) translate('  + (((i + 1) * 3) * x) + 'px, ' + (((i + 1) * 3) * y) + 'px)'
          })
        }
      })
    }
  })
}



const integrateTools = {
  bl: '.integrateTools',
  fon: '.integrateTools__fon',
  reviews: '.reviews',
  instruments: '.instruments',
  button: '.integrateTools__instruments-button',
  circles: [
    '.integrateTools__circles--1',
    '.integrateTools__circles--2',
    '.integrateTools__circles--3',
    '.integrateTools__circles--4',
    '.integrateTools__circles--5',
    '.integrateTools__circles--6',
    '.integrateTools__circles--7',
    '.integrateTools__circles--8'
  ]
}

integrateTools.init = function() {
  $(this.bl).addClass('active')
  animationAdd.act(this.fon, 200)
  animationAdd.act(this.reviews, $(this.reviews).outerHeight() / 2)
  animationAdd.act(this.instruments, $(this.instruments).outerHeight() / 2)
  animationAdd.act(this.button, $(this.button).outerHeight() / 2)
}



const inPress = {
  list: '.inPress__list',
}

inPress.init = function() {
  animationAdd.act(this.list, $(this.list).outerHeight() / 2)
}



const orderFulfillment = {
  img: '.orderFulfillment__img',
  circles: '.orderFulfillment__circles',
  textBox: '.orderFulfillment .textBox'
}

orderFulfillment.init = function() {
  $(this.img).addClass('active')
  $(this.textBox).addClass('active')
  parallaxAdd.act(this.circles, this.circles + ' span:nth-child(1)', '-350px', '100%')
  parallaxAdd.act(this.circles, this.circles + ' span:nth-child(2)', '-400px', '100%')

  $('body').on('mousemove', (e) => {
    const x = e.originalEvent.clientX / 70
    const y = e.originalEvent.clientY / 50
    const xImg = e.originalEvent.clientX / 300
    const yImg = e.originalEvent.clientY / 300

    window.requestAnimationFrame(() => {
      for (let i = 0; i < $(this.img + ' span').length; i++) {
        $(this.img + ' span').eq(i).find('i').css({
          'transform': 'translate3d(0, 0, 0) translate('  + ((i + 1) * xImg) + 'px, ' + ((i + 1) * yImg) + 'px)',
        })
      }
      for (let i = 0; i < $(this.circles + ' span').length; i++) {
        $(this.circles + ' span').eq(i).find('i').css({
          'transform': 'translate3d(0, 0, 0) translate('  + ((i + 1) * x) + 'px, ' + ((i + 1) * y) + 'px)',
        })
      }
    })
  })
}



const mailForwarding = {
  img: '.mailForwarding__img',
  textBox: '.mailForwarding .textBox'
}

mailForwarding.init = function() {

  $(this.img).addClass('active')
  $(this.textBox).addClass('active')

  $('body').on('mousemove', (e) => {
    const xImg = e.originalEvent.clientX / 300
    const yImg = e.originalEvent.clientY / 300

    window.requestAnimationFrame(() => {
      for (let i = 0; i < $(this.img + ' span').length; i++) {
        $(this.img + ' span').eq(i).find('i').css({
          'transform': 'translate3d(0, 0, 0) translate('  + ((i + 1) * xImg) + 'px, ' + ((i + 1) * yImg) + 'px)',
        })
      }
    })
  })
}



const workSlider = {
  bl: '.workSlider',
  value: '.workSlider__value',
  box: '.workSlider__value-box',
  slid: '.workSlider__value-slid',
  block: '.workSlider__list-block',
  list: '.workSlider__value-list'
}

workSlider.init = function() {
  $(this.box).slider({
    range: false,
    min: 0,
    max: 10000,
    slide: (event, ui) => {
      const x = ui.value
      const xSlid = x / 100
      const xList = (($(this.block).width() - $(this.box).width() - 60) / 10000) * x  

      $(this.slid).css('width', xSlid + '%')
      $(this.block).css({'transform': 'translateX('  + -xList + 'px)'})

      if (x <= 1250) {
        this.switching(0)
      } else if (x <= 3750) {
        this.switching(1)
      } else if (x <= 6250) {
        this.switching(2)
      } else if (x <= 8750) {
        this.switching(3)
      } else {
        this.switching(4)
      }
    }
  })
}

workSlider.switching = function(ind) {
  $(this.list).find('li').removeClass('active')
  $(this.list).find('li').eq(ind).addClass('active')
}



const fulfillmentProcess = {
  list: '.fulfillmentProcess__list',
  circles: '.fulfillmentProcess__circles',
}

fulfillmentProcess.init = function() {
  animationAdd.act(this.list, $(this.list).outerHeight() / 2)
  parallaxAdd.act(this.circles, this.circles + ' span:nth-child(1)', '-250px', '100%')
  parallaxAdd.act(this.circles, this.circles + ' span:nth-child(2)', '-350px', '100%')

  $('body').on('mousemove', (e) => {
    const x = e.originalEvent.clientX / 70
    const y = e.originalEvent.clientY / 50

    window.requestAnimationFrame(() => {
      for (let i = 0; i < $(this.circles + ' span').length; i++) {
        $(this.circles + ' span').eq(i).find('i').css({
          'transform': 'translate3d(0, 0, 0) translate('  + ((i + 1) * x) + 'px, ' + ((i + 1) * y) + 'px)',
        })
      }
    })
  })
}



const strategyInfo = {
  bl: '.strategyInfo',
  textBox: '.strategyInfo .textBox'
}

strategyInfo.init = function() {
  animationAdd.act(this.textBox, $(this.textBox).outerHeight() / 2)
}



const orderAdvantages = {
  bl: '.orderAdvantages',
}

orderAdvantages.init = function() {
  animationAdd.act(this.bl, $(this.bl).outerHeight() / 2)
}



const faq = {
  cont: '.FAQ__cont',
  box: '.FAQ__box',
  title: '.FAQ__box-title',
  text: '.FAQ__box-text',
  circles: '.FAQ__circles'
}

faq.init = function() {
  parallaxAdd.act(this.circles, this.circles + ' span:nth-child(1)', '-250px', '100%')
  parallaxAdd.act(this.circles, this.circles + ' span:nth-child(2)', '-350px', '100%')

  $('body').on('click', this.title, (e) => {
    const th = $(e.currentTarget)
    if (th.parents(this.box).hasClass('active')) {
      th.parents(this.box).find(this.text).slideUp(200)
      th.parents(this.box).removeClass('active')
    } else {
      th.parents(this.cont).find(this.text).slideUp(200)
      th.parents(this.cont).find(this.box).removeClass('active')
      th.parents(this.box).find(this.text).stop(true)
      th.parents(this.box).find(this.text).slideDown(200)
      th.parents(this.box).addClass('active')
    }
  })

  $('body').on('mousemove', (e) => {
    const x = e.originalEvent.clientX / 70
    const y = e.originalEvent.clientY / 50

    window.requestAnimationFrame(() => {
      for (let i = 0; i < $(this.circles + ' span').length; i++) {
        $(this.circles + ' span').eq(i).find('i').css({
          'transform': 'translate3d(0, 0, 0) translate('  + ((i + 1) * x) + 'px, ' + ((i + 1) * y) + 'px)',
        })
      }
    })
  })
}



const assistedPurchase = {
  mask: '.assistedPurchase__mask',
  list: '.assistedPurchase__list'
}

assistedPurchase.init = function() {
  animationAdd.act(this.mask, $(this.mask).outerHeight() / 4)
  animationAdd.act(this.list, $(this.list).outerHeight() / 2)
}



const shippingMethods = {
  bl: '.shippingMethods',
  fon: '.shippingMethods__fon',
  block: '.shippingMethods__block',
  item: '.shippingMethods__item'
}

shippingMethods.init = function() {
  $(this.bl).addClass('active')
  animationAdd.act(this.fon, 200)
  animationAdd.act(this.block, $(this.block).outerHeight() / 2)
}

shippingMethods.masonryItem = function() {
  $(this.block).masonry({
    itemSelector: this.item,
    transitionDuration: 0,
    originLeft: true
  })
}



const shoppingAmerican = {
  img: '.shoppingAmerican__img'
}

shoppingAmerican.init = function() {
  animationAdd.act(this.img, $(this.img).outerHeight() / 2)
}



const shoppingAdvantages = {
  bl: '.shoppingAdvantages'
}

shoppingAdvantages.init = function() {
  animationAdd.act(this.bl, $(this.bl).outerHeight() / 2)
}



const rates = {
  cont: '.rates__cont',
  box: '.rates__box',
  circles: '.rates__circles',
}

rates.init = function() {

  for (let i = 0; i < $(this.box).length; i++) {
    const box = this.box + ':nth-child(' + (i + 1) + ')'
    animationAdd.act(box, $(box).outerHeight() / 2)
  }

  parallaxAdd.act(this.circles, this.circles + ' span:nth-child(1)', '-250px', '100%')
  parallaxAdd.act(this.circles, this.circles + ' span:nth-child(2)', '-350px', '100%')

  $('body').on('mousemove', (e) => {
    const x = e.originalEvent.clientX / 70
    const y = e.originalEvent.clientY / 50

    window.requestAnimationFrame(() => {
      for (let i = 0; i < $(this.circles + ' span').length; i++) {
        $(this.circles + ' span').eq(i).find('i').css({
          'transform': 'translate3d(0, 0, 0) translate('  + ((i + 1) * x) + 'px, ' + ((i + 1) * y) + 'px)',
        })
      }
    })
  })
}



const shoppingOnline = {
  cont: '.shoppingOnline__cont'
}

shoppingOnline.init = function() {
  animationAdd.act(this.cont, $(this.cont).outerHeight() / 2)
}



const trackPurchases = {
  list: '.trackPurchases__list',
  listButton: '.trackPurchases__list-button',
  listBox: '.trackPurchases__list-box',
  icon: {
    messages: '.trackPurchases__phone-icon--messages',
    notifications: '.trackPurchases__phone-icon--notifications'
  }
}

trackPurchases.init = function() {
  
  $('body').on('click', this.listButton + ' li span', (e) => {
    const th = $(e.currentTarget)
    const ind = th.parents('li').index()

    th.parents(this.listButton).find('li').removeClass('active')
    th.parents('li').addClass('active')

    th.parents(this.list).find(this.listBox).removeClass('active')
    th.parents(this.list).find(this.listBox).eq(ind).addClass('active')
  })

  $('body').on('mousemove', (e) => {
    const x = e.originalEvent.clientX / 200
    const y = e.originalEvent.clientY / 200

    window.requestAnimationFrame(() => {
      $(this.icon.messages).find('i').css({
        'transform': 'translate3d(0, 0, 0) translate('  + (6 * x) + 'px, ' + (6 * y) + 'px)',
      })
      $(this.icon.notifications).find('i').css({
        'transform': 'translate3d(0, 0, 0) translate('  + (2.5 * x) + 'px, ' + (2.5 * y) + 'px)',
      })
    })
  })
}
