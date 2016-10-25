// JavaScript authentication file
$(function() {
    

    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyCI-cJM-i-zk0m_mHgWQelp0YmHDMw7SlM",
        authDomain: "slick-f82b1.firebaseapp.com",
        databaseURL: "https://slick-f82b1.firebaseio.com",
        storageBucket: "slick-f82b1.appspot.com",
        messagingSenderId: "272324839558"
    };
    firebase.initializeApp(config);

    var auth = firebase.auth();
    // Sign Up: Function to create account on firebase, then redirect to index.html
   

    var signUp = function() {
        // Get email, password, and display name
        firebase.auth().createUserWithEmailAndPassword($("#email").val(), $("#password").val()).then(function(user) {
            // Create user, then set the user's display name
            user.updateProfile({
                // Set display name
                displayName: $("#displayname").val()
            }).then(function(){
                window.location = "index.html";
            });
        }).catch(function(error) {
            alert(error);
        });
    };

    // SignIn: Function to authenticate on Firebase, then redirect to index.html
    var signIn = function() {
        // Get email and password
        
        // Authenticate using email and password, then redirect
        auth.signInWithEmailandPassword($("#email").val(), $("#password").val()).then(function(user) {
            window.location = "index.html";
        }).catch(function(error) {
            alert(error);
        });

    };

    // Sign out: Function to log a user out of firebase
    var signOut = function() {
        // Sign out, then redirect



    };

    // Assign event lister to form submission
    $("form").on("submit", function(event){
        event.preventDefault();
        if(this.id === "sign-up"){
            signUp();
        } else {
            signIn();
        }
    });


    // Assign click event to logout button



    // Authentication Change: see if a user is already signed in, and redirect

            // Rediriect to index.html if there is a user and the pathname isn't '/'

            // Redirect to sign-in if there is NOT a user and the pathname IS '/'


    var checked;
    auth.onAuthStateChanged(function(user) {
        if (checked != true) {
            if (user && window.location != '/') {
                window.location = "index.html";
            } else if (!user && window.location == '/') {
                window.location = "sign-in.html";
            }
            checked = true;
        }
    });

});