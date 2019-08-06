$(document).ready(function() {
    console.log('chomp!');

    // GO GET THE DATA FROM THE SERVER
    $.ajax({
        type: 'GET',
        url: '/staff',
        success: function(responseFromTheServer) {
            console.log(responseFromTheServer);
        }
    });
    
    // DO SOMETHING WITH THAT DATA FROM SERVER
})