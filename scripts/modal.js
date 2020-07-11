$(document).ready(function () {

  // MODAL
  var modalText = {
    hsabati: {
      title: 'HSABATI',
      tag: 'CRM SaaS Application.',
      detail: 'Hsabati allows you to manage your business on a daily basis thanks to a set of tools that are as efficient as they are simple to use.',
      link: 'http://www.hsabati.com'
    },
    shoppie: {
      title: 'SHOPPIE',
      tag: 'Marketplace SaaS Application.',
      detail: 'Shoppie is a tool to create and manage your e-commerce site quickly and inexpensively.',
      link: 'http://www.shoppie.com'
    },
    osesame: {
      title: 'OSESAME',
      tag: 'Internet Of Things Domotic Project.',
      detail: 'Osesame, which means "Open Sesame", is a technology that will be used to open a door to people referenced in the database of the establishment, at the same time as soon as the person passes through the door, it is automatically registered with its peak time (which will be useful for companies "peak hours employees automatically referenced" or to track the entry and exit of tenants of a house). Among other things, this technology will also manage security, for example if there is a fire in the room, there will be a notification that will alert the owners of the room even if they are on the other side of the world, on the mobile application in their phone, and there will be a message specifying the apartment where the fire is started and in which room.',
      link: 'https://osesame.000webhostapp.com'
    },
    goalstimed: {
      title: 'GOALSTIMED',
      tag: 'Landing page of a Freelancing Team.',
      detail: 'With our strong experience we provide you with solutions to develop and programming sites modern and high quality and speed and safe as we provide you applications running on Android and iOS and we can create additions to the Prestashop.',
      link: 'https://www.goalstimed.com'
    },
    // never: {
    //   title: 'NeverSurrender',
    //   tag: 'ALS AWARENESS.',
    //   detail: 'NeverSurrender is a platform for the new ALS foundation mobile app in hopes to raise awareness and research funding to fight ALS. Pure JavaScript marketing site to promote the new ALS NeverSurrender app.',
    // },
    // themall: {
    //   title: 'The Mall',
    //   tag: 'PEER GUIDED SHOPPING.',
    //   detail: 'The Mall is a place to follow the latest fashion purchases of your friends and favorite celebrities. Built with Node.js and Handlebars. Features the ability to import thousands of top brands products into one shopping site.',
    // }
  };

  $('#gallery .button').on('click', function () {
    fillModal(this.id);
    $('.modal-wrap').addClass('visible');
  });

  $('.close').on('click', function () {
    $('.modal-wrap, #modal .button').removeClass('visible');
  });

  $('.mask').on('click', function () {
    $('.modal-wrap, #modal .button').removeClass('visible');
  });

  var carousel = $('#carousel'),
    slideWidth = 700,
    threshold = slideWidth / 3,
    dragStart,
    dragEnd;

  setDimensions();

  $('#next').click(function () { shiftSlide(-1) })
  $('#prev').click(function () { shiftSlide(1) })

  carousel.on('mousedown', function () {
    if (carousel.hasClass('transition')) return;
    dragStart = event.pageX;
    $(this).on('mousemove', function () {
      dragEnd = event.pageX;
      $(this).css('transform', 'translateX(' + dragPos() + 'px)');
    });
    $(document).on('mouseup', function () {
      if (dragPos() > threshold) { return shiftSlide(1) }
      if (dragPos() < -threshold) { return shiftSlide(-1) }
      shiftSlide(0);
    });
  });

  function setDimensions() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      slideWidth = $(window).innerWidth();
    }
    $('.carousel-wrap, .slide').css('width', slideWidth);
    $('.modal').css('max-width', slideWidth);
    $('#carousel').css('left', slideWidth * -1)
  }

  function dragPos() {
    return dragEnd - dragStart;
  }

  function shiftSlide(direction) {
    if (carousel.hasClass('transition')) return;
    dragEnd = dragStart;
    $(document).off('mouseup')
    carousel.off('mousemove')
      .addClass('transition')
      .css('transform', 'translateX(' + (direction * slideWidth) + 'px)');
    setTimeout(function () {
      if (direction === 1) {
        $('.slide:first').before($('.slide:last'));
      } else if (direction === -1) {
        $('.slide:last').after($('.slide:first'));
      }
      carousel.removeClass('transition')
      carousel.css('transform', 'translateX(0px)');
    }, 700)
  }

  function fillModal(id) {
    $('#modal .title').text(modalText[id].title);
    $('#modal .detail').text(modalText[id].detail);
    $('#modal .tag').text(modalText[id].tag);
    if (modalText[id].link) $('#modal .button').addClass('visible')
      .parent()
      .attr('href', modalText[id].link)

    $.each($('#modal li'), function (index, value) {
      $(this).text(modalText[id].bullets[index]);
    });
    $.each($('#modal .slide'), function (index, value) {
      $(this).css({
        background: "url('img/slides/" + id + '-' + index + ".jpg') center center/cover",
        backgroundSize: 'cover'
      });

    });
  }
})
