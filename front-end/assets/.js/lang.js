const languages = [
  { name: 'vietnam', src: './assets/images/languages/vietnam-flag.svg' },
  { name: 'thailand', src: './assets/images/languages/thailand-flag.svg' },
  { name: 'english', src: './assets/images/languages/united-flag.svg' },
]

$(document).ready(function () {
  for (let index = 0; index < languages.length; index++) {
    const lang = languages[index].name;
    const link = languages[index].src;

    var dropdownMenu = $('#languageSelect .dropdown .dropdown-menu');
    var li = document.createElement('li');

    $(li).appendTo(dropdownMenu);
    var a = document.createElement('a');

    $(a)
      .attr({
        id: '',
        class: 'language-select-dropdown-item dropdown-item',
        onclick: 'languageSelect(this)',
      })
      .appendTo(li);

    var img = document.createElement('img');
    $(img)
      .attr({
        class: 'language-select-img',
        src: link,
        alt: lang + ' flag',
      })
      .appendTo(a);

    var span = document.createElement('span');
    $(span)
      .attr({
        class: 'text-capitalize',
      })
      .html(lang)
      .appendTo(a);
  }
})

function languageSelect(params) {
  var lang = $(params).html();
  $('#language').html(lang)
}