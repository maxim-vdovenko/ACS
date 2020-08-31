window.onload = function() {
  loader.init()
  acs.init()
  slider.init()
  select.init()
  shippingMethods.masonryItem() 
  trackPurchases.init() 
  trackPurchases.sliderFn()
  login.init()
  getStarted.init()
  contactUs.init()
  termsService.init()
  navigation.init()

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
  principleGoal.init()
  orderAdvantages.init()
  faq.init()
  assistedPurchase.init()
  shippingMethods.init()
  shoppingAmerican.init()
  shoppingAdvantages.init()
  rates.init()
  shoppingOnline.init()
  amazonReturns.init()
  dropshipping.init()
  amazonPreparationServices.init()
  returnIns.init()
  avoidProblems.init()
  comprehensiveSolution.init()
  connectManufacturers.init()
  positiveFinancial.init()
  professionalPrinciples.init()
  aboutUs.init()
  serviceDream.init()
  shippingAgents.init()
  doesWork.init()
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



const navigation = {
  button: '.header__nav'
}

navigation.init = function() {

  $('body').on('click', this.button, (e) => {
    const th = $(e.currentTarget)

    if (th.hasClass('active')) {
      th.removeClass('active')
    } else {
      th.addClass('active')
    }
  })
}



const select = {
  bl: '.select',
  sel: 'select',
  dropdown: '.jq-selectbox__dropdown',
  addTop: 'jq-selectbox__dropdown--top',
  addBottom: 'jq-selectbox__dropdown--bottom'
}

select.init = function() {

  if ($(this.bl).length) {

    $(this.bl + ' ' + this.sel).styler({
      selectSearch: false,
      onSelectOpened: () => {
        this.changePosition()
        $(window).resize(() => {
          this.changePosition()
        })
      },
      onSelectClosed: () => {
        $(this.dropdown).removeClass(this.addTop).removeClass(this.addBottom)
      }
    })
  }
}

select.changePosition = function() {
  const yWind = $('.total-container').height()
  const ySel = $(this.bl).height()
  const offsetSel = $(this.bl).offset().top
  const hPopup = 200

  if ((offsetSel + ySel + hPopup) < yWind) {
    $(this.dropdown).removeClass(this.addTop).addClass(this.addBottom)
  } else {
    $(this.dropdown).removeClass(this.addBottom).addClass(this.addTop)
  }
}



const acs = {
  bl: '.acs',
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
  saveWithUs: '.blockContainer__animation--saveWithUs',
  returnInspections: '.blockContainer__animation--returnInspections',
  customPacking: '.blockContainer__animation--customPacking',
  amazonConsultant: '.blockContainer__animation--amazonConsultant',
  technology: '.blockContainer__animation--technology',
  crossdocking: '.blockContainer__animation--crossdocking',
  compliance: '.blockContainer__animation--compliance',
  crossBorderShipping: '.blockContainer__animation--crossBorderShipping',
  yourConnections: '.blockContainer__animation--yourConnections',
  increasedExposure: '.blockContainer__animation--increasedExposure',
  ourMission: '.blockContainer__animation--ourMission',
  ourCulture: '.blockContainer__animation--ourCulture'
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
  animationAdd.act(this.returnInspections, $(this.returnInspections).outerHeight() / 2)
  animationAdd.act(this.customPacking, $(this.customPacking).outerHeight() / 2)
  animationAdd.act(this.amazonConsultant, $(this.amazonConsultant).outerHeight() / 2)
  animationAdd.act(this.technology, $(this.technology).outerHeight() / 2)
  animationAdd.act(this.crossdocking, $(this.crossdocking).outerHeight() / 2)
  animationAdd.act(this.compliance, $(this.compliance).outerHeight() / 2)
  animationAdd.act(this.crossBorderShipping, $(this.crossBorderShipping).outerHeight() / 2)
  animationAdd.act(this.yourConnections, $(this.yourConnections).outerHeight() / 2)
  animationAdd.act(this.increasedExposure, $(this.increasedExposure).outerHeight() / 2)
  animationAdd.act(this.ourMission, $(this.ourMission).outerHeight())
  animationAdd.act(this.ourCulture, $(this.ourCulture).outerHeight())
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



const doesWork = {
  textBox: '.doesWork-textBoxColor'
}

doesWork.init = function() {
  animationAdd.act(this.textBox, $(this.textBox).outerHeight())
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
  },
  amazonInfo: {
    text: '.amazonInfo .textBox',
    circles: [
      '.amazonInfo__circles--1',
      '.amazonInfo__circles--2',
      '.amazonInfo__circles--3'
    ]
  },
  amazonProduct: {
    bl: '.amazonProduct',
    mask: '.amazonProduct__mask',
    text: '.amazonProduct .textBox',
    circles: [
      '.amazonProduct__circles--1',
      '.amazonProduct__circles--2',
      '.amazonProduct__circles--3'
    ]
  },
  successfulStrategy: {
    bl: '.successfulStrategy',
    mask: '.successfulStrategy__mask',
    text: '.successfulStrategy .textBox',
    circles: [
      '.successfulStrategy__circles--1',
      '.successfulStrategy__circles--2',
      '.successfulStrategy__circles--3'
    ]
  },
  ourTeam: {
    bl: '.ourTeam',
    mask: '.ourTeam__mask',
    text: '.ourTeam .textBox',
    circles: [
      '.ourTeam__circles--1',
      '.ourTeam__circles--2',
      '.ourTeam__circles--3'
    ]
  },
  serviceDream: {
    circles: [
      '.serviceDream__circles--1',
      '.serviceDream__circles--2',
      '.serviceDream__circles--3'
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

  animationAdd.act(this.amazonInfo.text, $(this.amazonInfo.text).outerHeight() / 2)
  parallaxAdd.act(this.amazonInfo.circles[0], this.amazonInfo.circles[0] + ' span', '-450px', '100%')
  parallaxAdd.act(this.amazonInfo.circles[1], this.amazonInfo.circles[1] + ' span', '-200px', '100%')
  parallaxAdd.act(this.amazonInfo.circles[2], this.amazonInfo.circles[2] + ' span', '-150px', '100%')

  animationAdd.act(this.amazonProduct.mask, $(this.amazonProduct.mask).outerHeight() / 4)
  animationAdd.act(this.amazonProduct.text, $(this.amazonProduct.text).outerHeight() / 2)
  parallaxAdd.act(this.amazonProduct.circles[0], this.amazonProduct.circles[0] + ' span', '-450px', '100%')
  parallaxAdd.act(this.amazonProduct.circles[1], this.amazonProduct.circles[1] + ' span', '-200px', '100%')
  parallaxAdd.act(this.amazonProduct.circles[2], this.amazonProduct.circles[2] + ' span', '-150px', '100%')

  animationAdd.act(this.successfulStrategy.mask, $(this.successfulStrategy.mask).outerHeight() / 4)
  animationAdd.act(this.successfulStrategy.text, $(this.successfulStrategy.text).outerHeight() / 2)
  parallaxAdd.act(this.successfulStrategy.circles[0], this.successfulStrategy.circles[0] + ' span', '-450px', '100%')
  parallaxAdd.act(this.successfulStrategy.circles[1], this.successfulStrategy.circles[1] + ' span', '-200px', '100%')
  parallaxAdd.act(this.successfulStrategy.circles[2], this.successfulStrategy.circles[2] + ' span', '-150px', '100%')
  
  animationAdd.act(this.ourTeam.mask, $(this.ourTeam.mask).outerHeight() / 4)
  animationAdd.act(this.ourTeam.text, $(this.ourTeam.text).outerHeight() / 2)
  parallaxAdd.act(this.ourTeam.circles[0], this.ourTeam.circles[0] + ' span', '-450px', '100%')
  parallaxAdd.act(this.ourTeam.circles[1], this.ourTeam.circles[1] + ' span', '-200px', '100%')
  parallaxAdd.act(this.ourTeam.circles[2], this.ourTeam.circles[2] + ' span', '-150px', '100%')

  parallaxAdd.act(this.serviceDream.circles[0], this.serviceDream.circles[0] + ' span', '-200px', '100%')
  parallaxAdd.act(this.serviceDream.circles[1], this.serviceDream.circles[1] + ' span', '-100px', '100%')
  parallaxAdd.act(this.serviceDream.circles[2], this.serviceDream.circles[2] + ' span', '-50px', '100%')

  $('body').on('mousemove', (e) => {
    const x = e.originalEvent.clientX / 60
    const y = e.originalEvent.clientY / 50

    animationCircles(this.discounted.circles)
    animationCircles(this.flexibility.circles)
    animationCircles(this.favorite.circles)
    animationCircles(this.doesWork.circles)
    animationCircles(this.amazonInfo.circles)
    animationCircles(this.amazonProduct.circles)
    animationCircles(this.successfulStrategy.circles)
    animationCircles(this.ourTeam.circles)
    animationCircles(this.serviceDream.circles)

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



const slider = {
  bl: '.slider',
  value: '.slider__value',
  box: '.slider__value-box',
  slid: '.slider__value-slid',
  block: '.slider__list-block',
  list: '.slider__value-list'
}

slider.init = function() {
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

slider.switching = function(ind) {
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



const principleGoal = {
  bl: '.principleGoal',
  textBox: '.principleGoal .textBox'
}

principleGoal.init = function() {
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
  list: '.assistedPurchase__list',
  circles: '.assistedPurchase__circles'
}

assistedPurchase.init = function() {
  animationAdd.act(this.mask, $(this.mask).outerHeight() / 4)
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
  slider: '.trackPurchases__phone-slider',
  slick: null,
  icon: {
    bl: '.trackPurchases__phone-icon',
    messages: '.trackPurchases__phone-icon--messages',
    notifications: '.trackPurchases__phone-icon--notifications',

    photo: '.trackPurchases__phone-icon--photo',
    add: '.trackPurchases__phone-icon--add',

    questions: '.trackPurchases__phone-icon--questions',
    chat: '.trackPurchases__phone-icon--chat'
  },
  iconType: ['.trackPurchases__phone-icon--type1', '.trackPurchases__phone-icon--type2']
}

trackPurchases.init = function() {
  
  $('body').on('click', this.listButton + ' li span', (e) => {
    const th = $(e.currentTarget)
    const ind = th.parents('li').index()

    th.parents(this.listButton).find('li').removeClass('active')
    th.parents('li').addClass('active')

    th.parents(this.list).find(this.listBox).removeClass('active')
    th.parents(this.list).find(this.listBox).eq(ind).addClass('active')

    $(this.slick).slick('slickGoTo', ind);	
  })

  $('body').on('mousemove', (e) => {
    const x = e.originalEvent.clientX / 200
    const y = e.originalEvent.clientY / 200

    window.requestAnimationFrame(() => {
      $(this.iconType[0]).find('i').css({
        'transform': 'translate3d(0, 0, 0) translate('  + (6 * x) + 'px, ' + (6 * y) + 'px)',
      })
      $(this.iconType[1]).find('i').css({
        'transform': 'translate3d(0, 0, 0) translate('  + (2.5 * x) + 'px, ' + (2.5 * y) + 'px)',
      })
    })
  })
}

trackPurchases.sliderFn = function() {
  this.slick = $(this.slider).slick({
    arrows: true,
    dots: false,
    infinite: true,
    fade: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1
  })

  $(this.slider).on('beforeChange', (event, slick, currentSlide, nextSlide) => {
    const ind = nextSlide

    $(this.listButton).find('li').removeClass('active')
    $(this.listButton).find('li').eq(ind).addClass('active')
    $(this.listBox).removeClass('active')
    $(this.listBox).eq(ind).addClass('active')

    this.sliderSwitch(ind + 1)
  })
}

trackPurchases.sliderSwitch = function(ind) {

  $(this.icon.bl).removeClass('open').addClass('close')

  switch (ind) {
    case 1:
      $(this.icon.messages).addClass('open').removeClass('close')
      $(this.icon.notifications).addClass('open').removeClass('close')
      break
    case 2:
      $(this.icon.photo).addClass('open').removeClass('close')
      $(this.icon.add).addClass('open').removeClass('close')
      break
    case 3:
      $(this.icon.questions).addClass('open').removeClass('close')
      $(this.icon.chat).addClass('open').removeClass('close')
      break
    default:
      break
  }
}



const amazonReturns = {
  img: '.amazonReturns__img',
  circles: '.amazonReturns__circles',
  textBox: '.amazonReturns .textBox'
}

amazonReturns.init = function() {
  $(this.img).addClass('active')
  $(this.textBox).addClass('active')
  parallaxAdd.act(this.circles, this.circles + ' span:nth-child(1)', '-280px', '100%')
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



const avoidProblems = {
  circles: '.avoidProblems__circles'
}

avoidProblems.init = function() {
  parallaxAdd.act(this.circles, this.circles + ' span:nth-child(1)', '-280px', '100%')
  parallaxAdd.act(this.circles, this.circles + ' span:nth-child(2)', '-400px', '100%')

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



const dropshipping = {
  img: '.dropshipping__img',
  textBox: '.dropshipping .textBox'
}

dropshipping.init = function() {
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



const amazonPreparationServices = {
  img: '.amazonPreparationServices__img',
  textBox: '.amazonPreparationServices .textBox'
}

amazonPreparationServices.init = function() {
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



const returnIns = {
  list: '.returnInspections__list',
  circles: '.returnInspections__circles',
}

returnIns.init = function() {
  animationAdd.act(this.list, $(this.list).outerHeight() / 2)
  parallaxAdd.act(this.circles, this.circles + ' span:nth-child(1)', '-250px', '100%')
  parallaxAdd.act(this.circles, this.circles + ' span:nth-child(2)', '-400px', '100%')

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



const comprehensiveSolution = {
  cont: '.comprehensiveSolution__contBloc'
}

comprehensiveSolution.init = function() {
  animationAdd.act(this.cont, $(this.cont).outerHeight() / 2)
}



const connectManufacturers = {
  textBox: '.connectManufacturers__cont .textBox',
  blockIcon: '.connectManufacturers__blockIcon',
  block: '.connectManufacturers__block'
}

connectManufacturers.init = function() {
  animationAdd.act(this.textBox, $(this.textBox).outerHeight() / 2)
  animationAdd.act(this.blockIcon, $(this.blockIcon).outerHeight() / 2)
  animationAdd.act(this.block, $(this.block).outerHeight() / 2)
}



const positiveFinancial = {
  list: '.positiveFinancial__list',
  circles: '.positiveFinancial__circles'
}

positiveFinancial.init = function() {
  animationAdd.act(this.list, $(this.list).outerHeight() / 2)
  parallaxAdd.act(this.circles, this.circles + ' span:nth-child(1)', '-250px', '100%')
  parallaxAdd.act(this.circles, this.circles + ' span:nth-child(2)', '-400px', '100%')

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



const professionalPrinciples = {
  list: '.professionalPrinciples__list'
}

professionalPrinciples.init = function() {
  animationAdd.act(this.list, $(this.list).outerHeight() / 2)
}



const login = {
  circles: '.login__circles'
}

login.init = function() {
  parallaxAdd.act(this.circles, this.circles + ' span:nth-child(1)', '-200px', '100%')
  parallaxAdd.act(this.circles, this.circles + ' span:nth-child(2)', '-300px', '100%')

  $('body').on('mousemove', (e) => {
    const x = e.originalEvent.clientX / 80
    const y = e.originalEvent.clientY / 70

    window.requestAnimationFrame(() => {
      for (let i = 0; i < $(this.circles + ' span').length; i++) {
        $(this.circles + ' span').eq(i).find('i').css({
          'transform': 'translate3d(0, 0, 0) translate('  + ((i + 1) * x) + 'px, ' + ((i + 1) * y) + 'px)',
        })
      }
    })
  })
}



const getStarted = {
  circles: '.getStarted__circles',
  slider: '.getStarted__slider'
}

getStarted.init = function() {
  this.sliderFn()

  if ($(this.circles).length) {
    parallaxAdd.act(this.circles, this.circles + ' span:nth-child(1)', '-200px', '100%')
    parallaxAdd.act(this.circles, this.circles + ' span:nth-child(2)', '-300px', '100%')
  
    $('body').on('mousemove', (e) => {
      const x = e.originalEvent.clientX / 80
      const y = e.originalEvent.clientY / 70
  
      window.requestAnimationFrame(() => {
        for (let i = 0; i < $(this.circles + ' span').length; i++) {
          $(this.circles + ' span').eq(i).find('i').css({
            'transform': 'translate3d(0, 0, 0) translate('  + ((i + 1) * x) + 'px, ' + ((i + 1) * y) + 'px)',
          })
        }
      })
    })
  }
}

getStarted.sliderFn = function() {
  if (!$(this.slider).length) return
  $(this.slider).slick({
    arrows: false,
    dots: true,
    infinite: true,
    fade: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          fade: false,
          adaptiveHeight: true
        }
      }
    ]
  })
}



const termsService = {
  sliderTop: '.termsService__circlesTop',
  sliderBottom: '.termsService__circlesBottom'
}

termsService.init = function() {
  if ($(this.sliderTop).length || $(this.sliderBottom).length) {
    parallaxAdd.act(this.sliderTop, this.sliderTop + ' span:nth-child(1)', '-200px', '100%')
    parallaxAdd.act(this.sliderTop, this.sliderTop + ' span:nth-child(2)', '-300px', '100%')
    parallaxAdd.act(this.sliderBottom, this.sliderBottom + ' span:nth-child(1)', '-200px', '100%')
    parallaxAdd.act(this.sliderBottom, this.sliderBottom + ' span:nth-child(2)', '-300px', '100%')

    $('body').on('mousemove', (e) => {
      const x = e.originalEvent.clientX / 80
      const y = e.originalEvent.clientY / 70
  
      window.requestAnimationFrame(() => {
        for (let i = 0; i < $(this.sliderTop + ' span').length; i++) {
          $(this.sliderTop + ' span').eq(i).find('i').css({
            'transform': 'translate3d(0, 0, 0) translate('  + ((i + 1) * x) + 'px, ' + ((i + 1) * y) + 'px)',
          })
        }
        for (let i = 0; i < $(this.sliderBottom + ' span').length; i++) {
          $(this.sliderBottom + ' span').eq(i).find('i').css({
            'transform': 'translate3d(0, 0, 0) translate('  + ((i + 1) * x) + 'px, ' + ((i + 1) * y) + 'px)',
          })
        }
      })
    })
  }
}



const contactUs = {
  circles: '.contactUs__circles'
}

contactUs.init = function() {

  if ($(this.circles).length) {
    parallaxAdd.act(this.circles, this.circles + ' span:nth-child(1)', '-200px', '100%')
    parallaxAdd.act(this.circles, this.circles + ' span:nth-child(2)', '-300px', '100%')
  
    $('body').on('mousemove', (e) => {
      const x = e.originalEvent.clientX / 80
      const y = e.originalEvent.clientY / 70
  
      window.requestAnimationFrame(() => {
        for (let i = 0; i < $(this.circles + ' span').length; i++) {
          $(this.circles + ' span').eq(i).find('i').css({
            'transform': 'translate3d(0, 0, 0) translate('  + ((i + 1) * x) + 'px, ' + ((i + 1) * y) + 'px)',
          })
        }
      })
    })
  }
}



const aboutUs = {
  img: '.aboutUs__img',
  textBox: '.aboutUs .textBox',
  circles: '.aboutUs__circles'
}

aboutUs.init = function() {
  $(this.img).addClass('active')
  $(this.textBox).addClass('active')
  parallaxAdd.act(this.circles, this.circles + ' span:nth-child(1)', '-280px', '100%')
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



const serviceDream = {
  img: '.serviceDream__img',
  textBox: '.serviceDream-textBoxColor'
}

serviceDream.init = function() {
  animationAdd.act(this.img, $(this.img).outerHeight() / 2)
  animationAdd.act(this.textBox, $(this.textBox).outerHeight())
}



const shippingAgents = {
  img: '.shippingAgents__img',
  textBox: '.shippingAgents__advantages'
}

shippingAgents.init = function() {
  animationAdd.act(this.img, $(this.img).outerHeight() / 2)
  animationAdd.act(this.textBox, $(this.textBox).outerHeight())
}
