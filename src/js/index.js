window.onload = function() {
  // acs.init()
  cloudLogistics.init()
  interNetwork.init()
  blockContainer.init()
}



// const acs = {
//   bl: '.acs',
//   mask: '.acs__mask'
// }

// acs.init = function() {
//   const controller = new ScrollMagic.Controller()
//   this.parallaxScroll(this.bl, this.mask, '-300px', controller)
// }

// acs.parallaxScroll = function(section, element, y, controller) {
//   new ScrollMagic.Scene({triggerElement: section, triggerHook: 'onEnter', duration: '100%', offset: '300px'})
//   .setTween(element, {y: y, ease: Linear.easeNone})
//   .addTo(controller)
// }



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
