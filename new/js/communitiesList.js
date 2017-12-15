var communitiesList = [
  {
    title: 'Open Coffee',
    content:
      "To make all this happen we need your support. Whenever you organize or attend a tech/enterpreneur meetup in Łódź, boot-up a startup or simply have great idea you want to build upon, let others know about it and don't forget to include our flagship hashtag. Follow #nowLDZ on Twitter and Facebook to be always up to date.",
    website: 'www.website.com',
    socialMediaList: [
      {name: 'facebook', link: '#'},
      {name: 'twitter', link: '#'},
    ],
  },
  {
    title: 'LRUG',
    content:
      "To make all this happen we need your support. Whenever you organize or attend a tech/enterpreneur meetup in Łódź, boot-up a startup or simply have great idea you want to build upon, let others know about it and don't forget to include our flagship hashtag. Follow #nowLDZ on Twitter and Facebook to be always up to date.",
    website: 'www.website.com',
    socialMediaList: [
      {name: 'facebook', link: '#'},
      {name: 'twitter', link: '#'},
      {name: 'meetup', link: '#'},
    ],
  },
  {
    title: 'Women in Technology',
    content:
      "To make all this happen we need your support. Whenever you organize or attend a tech/enterpreneur meetup in Łódź, boot-up a startup or simply have great idea you want to build upon, let others know about it and don't forget to include our flagship hashtag. Follow #nowLDZ on Twitter and Facebook to be always up to date.",
    website: 'www.website.com',
    socialMediaList: [
      {name: 'facebook', link: '#'},
      {name: 'twitter', link: '#'},
      {name: 'meetup', link: '#'},
    ],
  },
  {
    title: 'Scrumvival ŁDZ',
    content:
      "To make all this happen we need your support. Whenever you organize or attend a tech/enterpreneur meetup in Łódź, boot-up a startup or simply have great idea you want to build upon, let others know about it and don't forget to include our flagship hashtag. Follow #nowLDZ on Twitter and Facebook to be always up to date.",
    website: 'www.website.com',
    socialMediaList: [
      {name: 'facebook', link: '#'},
      {name: 'twitter', link: '#'},
      {name: 'meetup', link: '#'},
    ],
  },
  {
    title: 'meet.js Łódź',
    content:
      "To make all this happen we need your support. Whenever you organize or attend a tech/enterpreneur meetup in Łódź, boot-up a startup or simply have great idea you want to build upon, let others know about it and don't forget to include our flagship hashtag. Follow #nowLDZ on Twitter and Facebook to be always up to date.",
    website: 'www.website.com',
    socialMediaList: [
      {name: 'facebook', link: '#'},
      {name: 'twitter', link: '#'},
      {name: 'meetup', link: '#'},
    ],
  },
  {
    title: 'Tilte',
    content:
      "To make all this happen we need your support. Whenever you organize or attend a tech/enterpreneur meetup in Łódź, boot-up a startup or simply have great idea you want to build upon, let others know about it and don't forget to include our flagship hashtag. Follow #nowLDZ on Twitter and Facebook to be always up to date.",
    website: 'www.website.com',
    socialMediaList: [
      {name: 'facebook', link: '#'},
      {name: 'twitter', link: '#'},
      {name: 'meetup', link: '#'},
    ],
  },

  {
    title: 'Title',
    content:
      "To make all this happen we need your support. Whenever you organize or attend a tech/enterpreneur meetup in Łódź, boot-up a startup or simply have great idea you want to build upon, let others know about it and don't forget to include our flagship hashtag. Follow #nowLDZ on Twitter and Facebook to be always up to date.",
    website: 'www.website.com',
  },
];

var listSize = 0;

$(document).ready(function() {
  var counterCommunitiesList = 0;
  var listToShow = communitiesList.filter(function(comunity) {
    counterCommunitiesList++;
    return counterCommunitiesList <= 5;
  });
  showList(listToShow);

  $('.communities-seeMore').click(function() {
    showMore();
  });
});

function showList(list) {
  listSize = list.length;
  var $list = $('.communities-list');

  $list.html('');
  $.each(list, function(index, communites) {
    $list.append(
      '<div class="comunity"><div class="comunity-header"><h4>' +
        communites.title +
        '</h4><span>' +
        getImagesSocialMedia(communites.socialMediaList) +
        '</span></div><div class="comunity-content">' +
        communites.content +
        '</div><div class="comunity-footer"><a href="http://' +
        communites.website +
        '">' +
        communites.website +
        '</a></div></div>'
    );
  });
}

function filter() {
  var filterPhrase = $('#filterPhraseInput').val();
  if (filterPhrase != '') {
    var listToShow = communitiesList.filter(function(comunity) {
      return (
        comunity.title.includes(filterPhrase) ||
        comunity.content.includes(filterPhrase)
      );
    });
    showList(listToShow);
  } else {
    counterCommunitiesList = 0;
    var listToShow = communitiesList.filter(function(comunity) {
      counterCommunitiesList++;
      return counterCommunitiesList <= 5;
    });
    showList(listToShow);
  }
}

function showMore() {
  var counterCommunitiesList = 0;
  var addListCouter = counterCommunitiesList + 5;
  var listToShow = communitiesList.filter(function(comunity) {
    counterCommunitiesList++;
    return counterCommunitiesList <= listSize + 5;
  });
  showList(listToShow);
}

function getImagesSocialMedia(list) {
  var $imagesSocialMedia = '';
  $.each(list, function(index, media) {
    switch (media.name) {
      case 'facebook':
        $imagesSocialMedia =
          $imagesSocialMedia +
          '<i class="fab fa-facebook-square iconFacebook"></i>';
        break;
      case 'twitter':
        $imagesSocialMedia =
          $imagesSocialMedia +
          '<i class="fab fa-twitter-square  iconTwitter"></i>';
        break;
      case 'meetup':
        $imagesSocialMedia =
          $imagesSocialMedia +
          '<i class="fab fa-meetup  iconMeetup"></i>';
        break;
    }
  });
  return $imagesSocialMedia;
}
