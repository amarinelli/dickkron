$( document ).ready(function() {

  console.log("ready!");


    var user = location.search.split("=");
    console.log(user[1]);
    $('#name').html('Hi ' + user[1]);

});
