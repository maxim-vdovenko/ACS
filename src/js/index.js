window.onload = function() {
  // menu.init()
  // popupMassage.init()
  // appScreens.init() 
  // faq.init()
  // newsroom.init()
  // downloadBuddy.init()
}


/* downloadBuddy ----------------------------------------*/
const downloadBuddy = {
  select: '.select'
}

downloadBuddy.init = function() {

  $(this.select + ' select').styler({
    selectSearch: false
  })

  this.events()
}

downloadBuddy.events = function() {

  $('body').on('click', this.select + ' .jq-selectbox', (e) => {
    const th = $(e.currentTarget)
    
    if (th.hasClass('active')) {

      th.removeClass('dropdown focused opened active')
      th.find('.jq-selectbox__dropdown').css('display', 'none')
    } else {
      th.addClass('dropdown focused opened active')
      th.find('.jq-selectbox__dropdown').css('display', 'block')
    }
  })

  $('body').on('click', this.select + ' .jq-selectbox__dropdown ul li', (e) => {
    const th = $(e.currentTarget).parents('.jq-selectbox')

    if (!th.hasClass('active')) {

      const thDrop = $(e.currentTarget).parents('.jq-selectbox__dropdown')
      th.removeClass('dropdown focused opened active')
      thDrop.css('display', 'none')
    }
  })

  $('body').on('click', (event) => {

    if($(event.target).closest(this.select).length){
      return 0
    }

    $(this.select).each((ind) => {
      
      const sel = $(this.select).eq(ind)
      sel.find('.jq-selectbox').removeClass('dropdown focused opened active')
      sel.find('.jq-selectbox__dropdown').css('display', 'none')
    })
  })
}


/* menu -------------------------------------------------*/
const menu = {
  nav: '.navMobile',
  menuMobile: '.menuMobile',
  x_sm: 768,
  time: 300
}

menu.init = function() {
  this.res()
  this.events()

  $(window).resize(() => {
    this.res()
  })
}

menu.events = function() {
  
  $('body').on('click', this.nav, (e) => {
    const th = $(e.currentTarget)

    if (th.hasClass('active')) {
      th.removeClass('active')
      $(this.menuMobile).fadeOut(this.time)
      $('body').removeClass('openMenu')
    } else {
      $('html, body').stop().animate({scrollTop: 0}, 300)
      th.addClass('active')
      $(this.menuMobile).fadeIn(this.time)
      $('body').addClass('openMenu')
    }
  })
}

menu.res = function() {

  if(this.x_sm <= window.innerWidth){
    $(this.nav).removeClass('active')
    $(this.menuMobile).removeAttr('style');
    $('body').removeClass('openMenu')
  }
}


/* popupMassage -----------------------------------------*/
const popupMassage = {
  bl: '.popupMassage',
  button: '.popupMassage__close',
  time: 300
}

popupMassage.init = function() {
  this.events()
}

popupMassage.events = function() {

  $('body').on('click', this.button, (e) => {
    const th = $(e.currentTarget).parents(this.bl)

    th.fadeOut(this.time, () => {
      th.removeClass('active')
    })
  })
}


/* newsroom ---------------------------------------------*/
const newsroom = {
  block: '.newsroom__block',
  box: '.newsroom__box'
}

newsroom.init = function() {

  $(this.block).masonry({
    itemSelector: this.box,
    transitionDuration: 0,
    originLeft: true
  })
}


/* appScreens -------------------------------------------*/
const appScreens = {
  slider: '.appScreens__slider'
}

appScreens.init = function() {
  
  $(this.slider).on('init', () => {
    $(this.slider).find('.slick-arrow').append('<div class="slick-arrow-button"></div>')
    $(this.slider).addClass('active')
  })

  $(this.slider).slick({
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true
  })
}


/* faq --------------------------------------------------*/
const faq = {
  list: '.faq__list',
  block: '.faq__list-block',
  cont: '.faq__list-cont',
  button: '.faq__list-button, .faq__list-title > span',
  time: 300
}

faq.init = function() {
  this.events()
}

faq.events = function() {

  $('body').on('click', this.button, (e) => {
    const th = $(e.currentTarget).parents(this.block)

    if (th.hasClass('active')) {
      th.removeClass('active')
      th.find(this.cont).slideUp(this.time)
    } else {
      th.addClass('active')
      th.find(this.cont).stop(true)
      th.find(this.cont).slideDown(this.time)
    }
  })
}
