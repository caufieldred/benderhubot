module.exports = function(robot) {
    var totalUserList = ["@labianca", "@erica", "@scobban", "@sonylnagale", "@tylerism", "@gordon", "@jgennell", "@oli-g", "@tcooper"]; //define user list
    function listNames() {
        var names = ''; //set a placeholder variable
        for (var i = 0; i <= 3; i++) { //loop through this four times
            names += totalUserList[Math.floor(Math.random() * totalUserList.length)] + ", "; //append the placeholding variable with a random selection of the list of user names
        }
        return names;
    }
    var moodList = ["tired", "happy", "cheeky"];
    var mood = moodList[Math.floor(Math.random() * moodList.length)];

    function assignMood() {
        // test the mood and determine what image to show
        if (mood = "cheeky") {
            moodList = "https://s-media-cache-ak0.pinimg.com/236x/fa/f8/79/faf879f73ca76604fbae89e8c8627806.jpg";
        } else if (mood = "happy") {
            moodList = "http://pre12.deviantart.net/c3b4/th/pre/f/2012/214/7/c/futurama__bender_by_suzura-d59kq1p.png";
        } else if (mood = "tired") {
            moodList = "http://orig10.deviantart.net/62b4/f/2009/249/d/c/tired_bender_by_vonholdt.jpg";
        } else {
            moodList = "I'm a robot, I'm not in a mood ever.!";
        }
    }
    /* code goes here */
    robot.hear(/Ready for list-taking?/, function(res) {
        return res.send("Yes I am."); //Bender is always ready for list-taking
    });
    robot.respond(/Who is on the Do Not Kill list?/, function(nam) {
        return nam.send(listNames());
    });//generate a random list of names that can be used as a "kill list"
    robot.respond(/What kind of mood are you in today?/, function(mood) {
        return mood.send(assignMood());//generate a random mood based on a predefined list and provide a picture to the user
    });
}
