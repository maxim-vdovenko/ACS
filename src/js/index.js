window.onload = function() {
  acs.init()
  cloudLogistics.init()
  interNetwork.init()
  blockContainer.init()
  shipping.init()
  integrateTools.init()
  inPress.init()
  workSlider.init()
  orderFulfillment.init()
}



const acs = {
  mask: '.acs__mask',
  circles: '.acs__circles'
}

acs.init = function() {
  const controller = new ScrollMagic.Controller()
  this.parallaxScroll(this.mask, this.mask + ' > span', '-200px', '200%', controller)
  this.parallaxScroll(this.circles, this.circles + ' > span', '-500px', '100%', controller)
}

acs.parallaxScroll = function(section, element, y, duration, controller) {
  new ScrollMagic.Scene({triggerElement: section, triggerHook: 'onEnter', duration, offset: '0'})
  .setTween(element, {y, ease: Linear.easeNone})
  .addTo(controller)
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
  this.events()
}

cloudLogistics.events = function() {

  $('body').on('click', this.menu.button, (e) => {
    const th = $(e.currentTarget)
    const index = th.parents('li').index()

    th.parents(this.block).find(this.box).removeClass('active')
    th.parents(this.block).find(this.box).eq(index).addClass('active')

    th.parents(this.menu.bl).find('li').removeClass('active')
    th.parents('li').addClass('active')
  })

  window.requestAnimationFrame(() => {
    $('body').on('mousemove', this.block, (e) => {
      const x_block = e.originalEvent.clientX
      const y_block = e.originalEvent.clientY
      const x = x_block - ($(this.picBox).width() / 2) + parseInt($(this.picBox).css('marginLeft'), 10)
      const y = y_block - ($(this.picBox).height() / 2) - (parseInt($(this.picBox).css('marginTop'), 10) / 2)
   
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
  packingFees: '.blockContainer__animation--packingFees'
}

blockContainer.init = function() {
  const controller = new ScrollMagic.Controller()
  this.animationScroll(this.internationalShipping, controller)
  this.animationScroll(this.storageFulfillment, controller)
  this.animationScroll(this.softwarePlatform, controller)
  this.animationScroll(this.scaleCommerce, controller)
  this.animationScroll(this.flexibleShipping, controller)
  this.animationScroll(this.specialProjects, controller)
  this.animationScroll(this.packingFees, controller)
}

blockContainer.animationScroll = function(block, controller) {
  const scene = new ScrollMagic.Scene({
    triggerElement: block, 
    triggerHook: 'onEnter', 
    offset: $(block).outerHeight() / 2})
    .setTween(block)
    .addTo(controller)

  scene.on('enter', () => {
    $(block).addClass('active')
  })
}



const interNetwork = {
  map: '.interNetwork__map',
  box: '.interNetwork__map-box',
  button: '.interNetwork__map-button'
}

interNetwork.init = function() {
  this.events()
}

interNetwork.events = function() {

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
  }
}

shipping.init = function() {
  const controller = new ScrollMagic.Controller()

  this.animationScroll(this.discounted.mask, $(this.discounted.mask).outerHeight() / 4, controller)
  this.animationScroll(this.discounted.text, $(this.discounted.text).outerHeight() / 2, controller)
  this.animationScroll(this.discounted.logos, $(this.discounted.logos).outerHeight() / 2, controller)
  this.parallaxScroll(this.discounted.circles[0], this.discounted.circles[0] + ' > span', '-450px', '100%', controller)
  this.parallaxScroll(this.discounted.circles[1], this.discounted.circles[1] + ' > span', '-200px', '100%', controller)
  this.parallaxScroll(this.discounted.circles[2], this.discounted.circles[2] + ' > span', '-150px', '100%', controller)

  this.animationScroll(this.flexibility.mask, $(this.flexibility.mask).outerHeight() / 4, controller)
  this.animationScroll(this.flexibility.text, $(this.flexibility.text).outerHeight() / 2, controller)
  this.parallaxScroll(this.flexibility.circles[0], this.flexibility.circles[0] + ' > span', '-450px', '100%', controller)
  this.parallaxScroll(this.flexibility.circles[1], this.flexibility.circles[1] + ' > span', '-200px', '100%', controller)
  this.parallaxScroll(this.flexibility.circles[2], this.flexibility.circles[2] + ' > span', '-150px', '100%', controller)

  this.animationScroll(this.favorite.mask, $(this.favorite.mask).outerHeight() / 4, controller)
  this.animationScroll(this.favorite.text, $(this.favorite.text).outerHeight() / 2, controller)
  this.parallaxScroll(this.favorite.circles[0], this.favorite.circles[0] + ' > span', '-450px', '100%', controller)
  this.parallaxScroll(this.favorite.circles[1], this.favorite.circles[1] + ' > span', '-200px', '100%', controller)
  this.parallaxScroll(this.favorite.circles[2], this.favorite.circles[2] + ' > span', '-150px', '100%', controller)
}

shipping.parallaxScroll = function(section, element, y, duration, controller) {
  new ScrollMagic.Scene({triggerElement: section, triggerHook: 'onEnter', duration, offset: '0'})
  .setTween(element, {y, ease: Linear.easeNone})
  .addTo(controller)
}

shipping.animationScroll = function(block, h, controller) {
  const scene = new ScrollMagic.Scene({
    triggerElement: block, 
    triggerHook: 'onEnter', 
    offset: h})
    .setTween(block)
    .addTo(controller)

  scene.on('enter', () => {
    $(block).addClass('active')
  })
}



const integrateTools = {
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
  const controller = new ScrollMagic.Controller()

  this.animationScroll(this.reviews, controller)
  this.animationScroll(this.instruments, controller)
  this.animationScroll(this.button, controller)

  this.parallaxScroll(this.circles[0], this.circles[0] + ' > span', '-150px', '100%', controller)
  this.parallaxScroll(this.circles[1], this.circles[1] + ' > span', '-650px', '100%', controller)
  this.parallaxScroll(this.circles[2], this.circles[2] + ' > span', '-400px', '100%', controller)
  this.parallaxScroll(this.circles[3], this.circles[3] + ' > span', '-500px', '100%', controller)
  this.parallaxScroll(this.circles[4], this.circles[4] + ' > span', '-350px', '100%', controller)
  this.parallaxScroll(this.circles[5], this.circles[5] + ' > span', '-150px', '100%', controller)
  this.parallaxScroll(this.circles[6], this.circles[6] + ' > span', '-500px', '100%', controller)
  this.parallaxScroll(this.circles[7], this.circles[7] + ' > span', '-200px', '100%', controller)
}

integrateTools.parallaxScroll = function(section, element, y, duration, controller) {
  new ScrollMagic.Scene({triggerElement: section, triggerHook: 'onEnter', duration, offset: '0'})
  .setTween(element, {y, ease: Linear.easeNone})
  .addTo(controller)
}

integrateTools.animationScroll = function(block, controller) {
  const scene = new ScrollMagic.Scene({
    triggerElement: block, 
    triggerHook: 'onEnter', 
    offset: $(block).outerHeight() / 2})
    .setTween(block)
    .addTo(controller)

  scene.on('enter', () => {
    $(block).addClass('active')
  })
}



const inPress = {
  list: '.inPress__list',
}

inPress.init = function() {
  const controller = new ScrollMagic.Controller()
  this.animationScroll(this.list, controller)
}

inPress.animationScroll = function(block, controller) {
  const scene = new ScrollMagic.Scene({
    triggerElement: block, 
    triggerHook: 'onEnter', 
    offset: $(block).outerHeight() / 2})
    .setTween(block)
    .addTo(controller)

  scene.on('enter', () => {
    $(block).addClass('active')
  })
}



const orderFulfillment = {

}

orderFulfillment.init = function() {

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
