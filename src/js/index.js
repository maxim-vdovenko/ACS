window.onload = function() {
  acs.init()
  cloudLogistics.init()
  interNetwork.init()
  blockContainer.init()
  discountedShipping.init()
  integrateTools.init()
  inPress.init()
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
  box: '.cloudLogistics__box',
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
}



const blockContainer = {
  internationalShipping: '.blockContainer__animation--internationalShipping',
  storageFulfillment:  '.blockContainer__animation--storageFulfillment',
  softwarePlatform: '.blockContainer__animation--softwarePlatform',
  scaleCommerce: '.blockContainer__animation--scaleCommerce'
}

blockContainer.init = function() {
  const controller = new ScrollMagic.Controller()
  this.animationScroll(this.internationalShipping, controller)
  this.animationScroll(this.storageFulfillment, controller)
  this.animationScroll(this.softwarePlatform, controller)
  this.animationScroll(this.scaleCommerce, controller)
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



const discountedShipping = {
  bl: '.discountedShipping',
  mask: '.discountedShipping__mask',
  logos: '.discountedShipping__logos',
  circles: [
    '.discountedShipping__circles--1',
    '.discountedShipping__circles--2',
    '.discountedShipping__circles--3'
  ]
}

discountedShipping.init = function() {
  const controller = new ScrollMagic.Controller()

  this.animationScroll(this.mask, controller)
  this.animationScroll(this.logos, controller)

  this.parallaxScroll(this.circles[0], this.circles[0] + ' > span', '-450px', '100%', controller)
  this.parallaxScroll(this.circles[1], this.circles[1] + ' > span', '-200px', '100%', controller)
  this.parallaxScroll(this.circles[2], this.circles[2] + ' > span', '-150px', '100%', controller)
}

discountedShipping.parallaxScroll = function(section, element, y, duration, controller) {
  new ScrollMagic.Scene({triggerElement: section, triggerHook: 'onEnter', duration, offset: '0'})
  .setTween(element, {y, ease: Linear.easeNone})
  .addTo(controller)
}

discountedShipping.animationScroll = function(block, controller) {
  const scene = new ScrollMagic.Scene({
    triggerElement: block, 
    triggerHook: 'onEnter', 
    offset: $(block).outerHeight() / 4})
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
