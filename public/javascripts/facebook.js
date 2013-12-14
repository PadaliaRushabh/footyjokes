// Additional JS functions here
              window.fbAsyncInit = function() {
                FB.init({
                  appId      : '694932300523066', // App ID
                  channelUrl : 'channel.html', // Channel File
                  status     : true, // check login status
                  cookie     : true, // enable cookies to allow the server to access the session
                  xfbml      : true  // parse XFBML
                });

                // Additional init code here
                FB.getLoginStatus(function(response) {
                    if (response.status === 'connected') {
                        // connected
                        callAPI();
                    } else if (response.status === 'not_authorized') {
                        document.getElementById('print').innerHTML = "You are not logged in";
                        // not_authorized
                        //login();
                    } else {
                        document.getElementById('print').innerHTML = "You are not logged in";
                        // not_logged_in
                        //login();
                    }
                });
            };

            function login() {
                FB.login(function(response) {
                    if (response.authResponse) {
                    // connected
                        testAPI();
                    } else {
                    // cancelled
                    }
                });
            }
            function share(){
                FB.ui(
                {
                    method: 'feed',
                    name: 'Facebook Dialogs',
                    link: 'https://developers.facebook.com/docs/dialogs/',
                    picture: 'http://fbrell.com/f8.jpg',
                    caption: 'Reference Documentation',
                    description: 'Dialogs provide a simple, consistent interface for applications to interface with users.'
                },
                    function(response) {
                        if (response && response.post_id) {
                            alert('Post was published.');
                        } else {
                        alert('Post was not published.');
                        }
                    }
                );
            }

            function testAPI() {
                console.log('Welcome!  Fetching your information.... ');
                FB.api('/me', function(response) {
                    console.log('Good to see you, ' + response.name +" your id" +response.id+ '.');
                    //document.getElementById('print').innerHTML = "You are logged in\nWelcome back!\nGood to see you, " + response.name;
                    var img_link = "http://graph.facebook.com/"+response.id+"/picture"
                    //document.getElementById('img-print').innerHTML = "<img src=" + img_link + ">" + "</img>"
                });
            }

            function callAPI() {

                console.log('Welcome back!  Fetching your information... ');
                FB.api('/me', function(response) {
                    console.log('Good to see you, ' + response.name +" your id" +response.id+ '.');
                    //document.getElementById('print').innerHTML = "You are logged in\nWelcome back!\nGood to see you, " + response.name;

                var img_link = "http://graph.facebook.com/"+response.id+"/picture"
                //document.getElementById('img-print').innerHTML = "<img src=" + img_link + ">" + "</img>"
                });
            }

              // Load the SDK Asynchronously
              (function(d){
                 var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
                 if (d.getElementById(id)) {return;}
                 js = d.createElement('script'); js.id = id; js.async = true;
                 js.src = "//connect.facebook.net/en_US/all.js";
                 ref.parentNode.insertBefore(js, ref);
               }(document));
