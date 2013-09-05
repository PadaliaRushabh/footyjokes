function signinCallback(authResult) {
    if (authResult['access_token']) {
        console.log("Successfull login");
        
        
        gapi.client.load('plus','v1', function(){
                         var request = gapi.client.plus.people.get({
                                                                   'userId': 'me'
                                                                   });
                         
                         //HIDE AFTER LOG
                         
                         request.execute(function(resp) {
                                         console.log('Retrieved profile for:' + resp.displayName);
                                         document.write("Welcome "  + resp.displayName  )
                                         });
                         });
        
        
        document.getElementById('signinButton').setAttribute('style', 'display: none');
    } else if (authResult['error']) {
        // There was an error.
        // Possible error codes:
        //   "access_denied" - User denied access to your app
        //   "immediate_failed" - Could not automatically log in the user
        console.log('There was an error: ' + authResult['error']);
    }
}