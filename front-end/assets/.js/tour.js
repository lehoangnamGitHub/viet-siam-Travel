const packages = [
  { name: 'KD1', src: './assets/images/packages/package-1.jpg', day: 5, night: 4, start: 'pattaya', end: 'bangkok', title: 'title', description: 'description' },
  { name: 'KD2', src: './assets/images/packages/package-2.jpg', day: 5, night: 4, start: 'pattaya', end: 'bangkok', title: 'title', description: 'description' },
  { name: 'KD3', src: './assets/images/packages/package-3.jpg', day: 5, night: 4, start: 'pattaya', end: 'bangkok', title: 'title', description: 'description' },
  { name: 'KD4', src: './assets/images/packages/package-4.jpg', day: 5, night: 4, start: 'pattaya', end: 'bangkok', title: 'title', description: 'description' },
  { name: 'KD5', src: './assets/images/packages/package-5.jpg', day: 5, night: 4, start: 'pattaya', end: 'bangkok', title: 'title', description: 'description' },
  { name: 'KD6', src: './assets/images/packages/package-6.jpg', day: 5, night: 4, start: 'pattaya', end: 'bangkok', title: 'title', description: 'description' },
  { name: 'KD7', src: './assets/images/packages/package-7.jpg', day: 5, night: 4, start: 'pattaya', end: 'bangkok', title: 'title', description: 'description' },
]

$(document).ready(function () {
  for (let index = 0; index < packages.length; index++) {
    const element = packages[index];
    var num = index + 1;
    var idSlide = 'slide-' + num;
    var swiperWrapper = $('#tour-swiper .swiper-wrapper')
    var swiperSlide = document.createElement('div');
    $(swiperSlide)
      .attr({
        id: idSlide,
        class: 'swiper-slide',
      })
      .appendTo(swiperWrapper);
    var card = document.createElement('div');
    $(card)
      .attr({
        class: 'card',
      })
      .appendTo(swiperSlide);
    var cardImg = document.createElement('div');
    $(cardImg)
      .attr({
        class: 'card-img',
      })
      .appendTo(card);
    var img = document.createElement('img');
    $(img)
      .attr({
        class: 'card-img-top img-fluid',
        alt: 'Tour Package',
        src: element.src,
      })
      .appendTo(cardImg);
    var cardImgOverlay = document.createElement('div');
    $(cardImgOverlay)
      .attr({
        class: 'card-img-overlay',
        type: 'description',
      })
      .appendTo(card);
    var title = document.createElement('h3');
    $(title)
      .attr({
        class: 'title text-capitalize w-100',
      })
      .html(element.name)
      .appendTo(cardImgOverlay);
    var description = document.createElement('p');
    $(description)
      .attr({
        class: 'w-100',
      })
      .html(element.description)
      .appendTo(cardImgOverlay);
    var duration = document.createElement('div');
    $(duration)
      .attr({
        class: 'duration text-capitalize text-white',
        type: 'top',
      })
      .html('<i class="fa-solid fa-calendar" type="top"></i>')
      .appendTo(card);
    var location = document.createElement('div');
    $(location)
      .attr({
        class: 'location text-capitalize text-white',
        type: 'bottom',
      })
      .html('<i class="fa-solid fa-route" type="bottom"></i>')
      .appendTo(card);
    var topGroup = document.createElement('div');
    $(topGroup)
      .attr({
        class: 'top-group',
      })
      .html('<span> ' + element.day + ' </span> day <span> ' + element.night + ' </span> night')
      .appendTo(duration);
    var bottomGroup = document.createElement('div');
    $(bottomGroup)
      .attr({
        class: 'bottom-group',
      })
      .html('<span> ' + element.start + ' </span><i class="fa-solid fa-right-long"></i><span> ' + element.end + ' </span>')
      .appendTo(location);
    var readMore = document.createElement('a');
    $(readMore)
      .attr({
        class: 'text-capitalize',
        href: '',
      })
      .html('<span>read more</span>')
      .appendTo(cardImgOverlay);
    var button = document.createElement('button');
    $(button)
      .attr({
        class: 'btn btn-fill-right',
        type: 'submit',
      })
      .html('<span class="text-uppercase">booking</span>')
      .appendTo(cardImgOverlay);
  }
})