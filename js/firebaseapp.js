// Initialize Firebase
var config = {
    apiKey: "AIzaSyAuibprVMhzj1yWKeEs2SxQ6QJX3B31VJE",
    authDomain: "cityclippers-eb0e0.firebaseapp.com",
    databaseURL: "https://cityclippers-eb0e0.firebaseio.com",
    projectId: "cityclippers-eb0e0",
    storageBucket: "cityclippers-eb0e0.appspot.com",
    messagingSenderId: "697899559842"
  };
  firebase.initializeApp(config);
  
	var database = firebase.database();
  
	// 2. Button for adding emails received
	$("#submit2").on("click", function(event) {
			event.preventDefault();
		
	   // Grabs user input
		var userName = $("#name").val().trim();
		var userEmail = $("#email").val().trim();
		var userZipcode = $("#zip").val().trim();
		// var human = $("#human").val().trim();
		var UserComment = $("#comments").val().trim();
  
		// Creates local "temporary" object for holding train data
		var newUser = {
			name: userName,
			email: userEmail,
			zip: userZipcode,
			// human: human,
			comment: UserComment,
		};
  
		// Uploads user data to the database
			database.ref().push(newUser);
  
	   // Clears all of the text-boxes
		$("#name").val("");
		$("#email").val("");
		$("#zip").val("");
		// $("#human").val("");
		$("#comments").val("");
		});
  
		// 3. Create Firebase event for adding user infomation to the database and a row in the html when a user adds an entry
	  database.ref().on("child_added", function(childSnapshot, prevChildKey) {
  
		console.log(childSnapshot.val());
  
		// Store everything into a variable.
		var userName = childSnapshot.val().name;
		var userEmail = childSnapshot.val().email;
		var userZipcode = childSnapshot.val().zip;
		var userComment = childSnapshot.val().comment;
		// var userHuman = childSnapshot.val().human;
		

		console.log(userName);
		console.log(userEmail);
		console.log(userZipcode);
		console.log(userComment);


		// Add each users' data into the table
		$("#user-table > tbody").append("<tr><td>" + userName + "</td><td>" + userEmail + "</td><td>" + userZipcode + 
		 "</td><td>" + userComment + "</td></tr>");
	  });
