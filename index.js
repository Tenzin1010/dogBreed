

function getDogImgs(breed){

    let api="https://dog.ceo/api/breed/";
    let apiKey = api + breed + '/images/random';
    
    fetch(apiKey)
        .then(response=> {
            if(response.ok) {
                return response.json();
            }
            $(".randompic").empty();
            throw new Error(response.statusText || "Breed not found");
        })    
        .then(responseJson=>displayDogImgs(responseJson))
        .catch(err => {
            $('#js-error-message').text(`Something went wrong: ${err}`);
            $('.results').removeClass('hidden');  
          });
      }

function displayDogImgs(responseJson){
    $(".randompic").empty();
    $('#js-error-message').empty();
    console.log(responseJson);
    $(".randompic").append(`<img src="${responseJson.message}">`)
    $('.results').removeClass('hidden');  
}

$('form'). on('click', '#submitButton', function(){        
    let userSubmit = $('#getBreed').val();
    getDogImgs(userSubmit); 
});

function watchForm(){
    $('form').submit(event=>{
        event.preventDefault(); 
});  
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});
