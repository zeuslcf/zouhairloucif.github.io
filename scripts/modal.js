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
    h5p: {
      title: 'H5P',
      tag: 'A plugin enabling publishing systems to create more interactive content.',
      detail: 'H5P makes it easy for everyone to create and share interactive content with a great user experience for both the content creators and the content consumers. An exponentially growing number of websites in the world use H5P to provide their users with great content. H5P may be plugged in to existing publishing systems like Canvas, Brightspace or WordPress and empower the users of these systems to create better content faster.',
      link: 'https://h5p.group'
    },
    mia: {
      title: 'MIA',
      tag: 'AI that Predict risks, reduces loss, manages staff, customer loyalty or scoring',
      detail: 'Both an expert and a publisher, Digitalent supports companies in optimizing their performance through data processing. Digitalent is also the publisher of the MIA solution, a no-code artificial intelligence platform.',
      link: 'https://digitalent.ai/',
    },
    blinki: {
      title: 'BLINKI',
      tag: 'Reservation Platform',
      detail: 'Blinki Paris is a network of 8 beauty instituts with digitalized systems for reservation.',
      link: 'https://blinki.fr/',
    },
    blinkimarket: {
      title: 'BLINKI MARKET',
      tag: 'E-commerce Platform',
      detail: 'Blinki Marketplace is an e-commerce application for beauty products which is interconnected with Blinki through fidelity points system.',
      link: 'https://www.blinki-market.fr/',
    },
    kdi: {
      title: 'Kongsberg Digital',
      tag: 'Operate your assets Smarter, Safer and GreenerOPERATE YOUR ASSETS SMARTER, SAFER AND GREENER',
      detail: 'Digitalizing the worlds industries, generating exceptional impact and value for our customers. And together we are creating a better tomorrow for people, business and society.',
      link: 'https://www.kongsbergdigital.com/',
    }
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
