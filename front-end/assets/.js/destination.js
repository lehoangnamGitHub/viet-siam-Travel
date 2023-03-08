const destinations = [
  { name: 'bangkok', src: './assets/images/destinations/bangkok.jpg', description: 'description', location: 'bangkok, thailand' },
  { name: 'coral island', src: './assets/images/destinations/coral-island.jpg', description: 'description', location: 'bangkok, thailand' },
  { name: 'jomtien beach', src: './assets/images/destinations/jomtien-beach.jpg', description: 'description', location: 'bangkok, thailand' },
  { name: 'khao chee chan', src: './assets/images/destinations/khao-chee-chan.jpg', description: 'description', location: 'bangkok, thailand' },
  { name: 'nong nooch', src: './assets/images/destinations/nong-nooch.jpg', description: 'description', location: 'bangkok, thailand' },
  { name: 'pattaya', src: './assets/images/destinations/pattaya.jpg', description: 'description', location: 'bangkok, thailand' },
  { name: 'wat arun', src: './assets/images/destinations/wat-arun.jpg', description: 'description', location: 'bangkok, thailand' },
  { name: 'wat phra kaew', src: './assets/images/destinations/wat-phra-kaew.jpg', description: 'description', location: 'bangkok, thailand' },
  { name: 'wat phra yai', src: './assets/images/destinations/wat-phra-yai.jpg', description: 'description', location: 'bangkok, thailand' },
  { name: 'wat traimit', src: './assets/images/destinations/wat-traimit.jpg', description: 'description', location: 'bangkok, thailand' },
];

$(document).ready(function () {
  for (let index = 0; index < destinations.length; index++) {
    const element = destinations[index];
    var num = index + 1;
    var idSlide = 'destination-slide-' + num;
    var swiperWrapper = $('#destination-swiper .swiper-wrapper')
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
        class: 'destination-card card text-light',
      })
      .appendTo(swiperSlide);
    var cardImg = document.createElement('div');
    $(cardImg)
      .attr({
        class: 'destination-card-img card-img',
      })
      .appendTo(card);
    var img = document.createElement('img');
    $(img)
      .attr({
        class: 'destination-img img-fluid',
        alt: element.name,
        src: element.src,
      })
      .appendTo(cardImg);
    var cardImgOverlay = document.createElement('div');
    $(cardImgOverlay)
      .attr({
        class: 'destination-card-img-overlay card-img-overlay text-dark',
      })
      .appendTo(card);
    var title = document.createElement('h3');
    $(title)
      .attr({
        class: 'title text-capitalize',
      })
      .html('<span>' + element.name + '</span>')
      .appendTo(cardImgOverlay);
    var cardDescription = document.createElement('div');
    $(cardDescription)
      .attr({
        class: 'card-description',
      })
      .appendTo(cardImgOverlay);
    var description = document.createElement('div');
    $(description)
      .attr({
        class: 'description',
      })
      .html(element.description)
      .appendTo(cardDescription);
    var locationGroup = document.createElement('div');
    $(locationGroup)
      .attr({
        class: 'location-group',
      })
      .appendTo(cardDescription);
    var location = document.createElement('span');
    $(location)
      .attr({
        class: 'destination-location',
      })
      .html('<i class="fa-solid fa-location-dot"></i><span class="text-capitalize">' + element.location + '</span>')
      .appendTo(locationGroup);
    var readMore = document.createElement('a');
    $(readMore)
      .attr({
        class: 'destination-link text-capitalize',
        href: '',
      })
      .html('<span> read more </span>')
      .appendTo(locationGroup);
  }
})