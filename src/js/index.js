window.onload = function() {
  cloudLogistics.init()
  interNetwork.init()
  // blockContainer.init()

  $('body').on('click', '.blockContainer__animation', (e) => {
    const th = $(e.currentTarget)

    if (th.hasClass('active')) {
      th.removeClass('active')
    } else {
      th.addClass('active')
    }
  })

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
  this.events(new ScrollMagic.Controller())
}

blockContainer.events = function(controller) {

  const scene = new ScrollMagic.Scene({
    triggerElement: this.internationalShipping, 
    triggerHook: 'onEnter', 
    offset: '100px'})
    .setTween(this.internationalShipping)
    .addTo(controller)

  scene.on('enter', () => {
    $(this.internationalShipping).addClass('active')
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
