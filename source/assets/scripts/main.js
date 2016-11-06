const authToken = '551c50eda7975cf9ef9aaa4e043667f7566231fb7f09992b748630f2bfd81e8b';
const url = 'https://api.unsplash.com/photos/?client_id=' + authToken;
const content_wrapper = $('.content-wrapper');
const imageTemplate = $('#image-template').html();

function addImage(image) {
  content_wrapper.append(Mustache.render(imageTemplate, image));
}

$.ajax({
  type: 'GET',
  url: url,
  success: function(images){
    $.each(images, function(i, image){
      $('#loading').fadeOut(300);
      content_wrapper.addClass('initialized');
      addImage(image);
    });
    /* eslint-disable */
    console.log('Everythings working great!');
    /* eslint-disable */
  },
  error: function(){
    /* eslint-disable */
    console.log('Error loading images, please refresh and try again');
    /* eslint-disable */
  }
});
