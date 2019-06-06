
function getDogImgs(breed){
    let api="https://dog.ceo/api/breed/";
    let apiKey = api + breed + '/images/random';
    
    fetch(apiKey)
        .then(response=>response.json())
        .then(responseJson=>displayDogImgs(responseJson))
        .catch(error=>alert('Oops somethings broken.'))
}

function displayDogImgs(responseJson){
    console.log(responseJson);
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