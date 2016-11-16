const authToken = 'c3afc03ed46432d238b22900dc53d153df82bd53b153ac7d619d5b61c9538533';
let pageNumber = 1;
let amountPerPage = 30;
let order = 'latest';
const url = `https://api.unsplash.com/photos?page=${pageNumber}&per_page=${amountPerPage}&order_by=${order}&client_id=${authToken}`;
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
    console.log('Error loading images, please refresh and try again.');
    /* eslint-disable */
  }
});
