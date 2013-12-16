   /* Executed when the APIs finish loading */
 function render() {

   // Additional params including the callback, the rest of the params will
   // come from the page-level configuration.
   var additionalParams = {
     'callback': signinCallback
   };

   // Attach a click listener to a button to trigger the flow.
   var signinButton = document.getElementById('signinButton');
   signinButton.addEventListener('click', function() {
     gapi.auth.signIn(additionalParams); // Will use page level configuration
   });
 }
 
function signinCallback(authResult) {
  if (authResult['status']['signed_in']) {
    // Update the app to reflect a signed in user
    // Hide the sign-in button now that the user is authorized, for example:
    document.getElementById('signinButton').setAttribute('style', 'display: none');
    gapi.client.load('plus','v1', function(){
        var request = gapi.client.plus.people.get({'userId': 'me' });
                                                                  
                         
                         //HIDE AFTER LOG
                         
        request.execute(function(resp) {
            console.log('Retrieved profile for:' + resp.displayName);
            var img_link = resp.image.url
            var html = "<img src=" + img_link + ">" + "</img>"
            $('.login').html(html);
        });
    });


    
  } else {
    // Update the app to reflect a signed out user
    // Possible error values:
    //   "user_signed_out" - User is signed-out
    //   "access_denied" - User denied access to your app
    //   "immediate_failed" - Could not automatically log in the user
    console.log('Sign-in state: ' + authResult['error']);
  }
}

