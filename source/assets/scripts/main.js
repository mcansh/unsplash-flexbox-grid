const url = 'https://api.unsplash.com/photos/?client_id=c3afc03ed46432d238b22900dc53d153df82bd53b153ac7d619d5b61c9538533';
let images = $('.content-wrapper');
let imageTemplate = $('#image-template').html();

function addImage(image) {
  images.append(Mustache.render(imageTemplate, image));
}

$.ajax({
  type: 'GET',
  url: url,
  success: function(images){
    $.each(images, function(i, image){
      $('#loading').fadeOut(300);
      addImage(image);
    });
  },
  error: function(){
    alert('Error loading images, please refresh and try again');
  }
});
