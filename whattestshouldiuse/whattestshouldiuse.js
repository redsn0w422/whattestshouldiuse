var codes = [[0,0,0,0],[1,0,0,0],[0,1,0,0],[0,2,0,0],[0,3,0,0],[0,4,0,0],[0,5,0,0],[0,5,1,0],[0,5,2,0],[0,6,2,2],[0,6,0,0],[0,6,1,0],[0,6,2,0],[0,6,2,1]]
var names = ["model","nth-term","geo","telescoping","p-series","ast","root-check","root","integral","integral","ratio-check","ratio","lim-comp-check","lim-comp"]

var user_response = [0,0,0,0];

if (Meteor.isClient) {
  $(document).ready(function() {
    $("#yesBtn").click(function() {
      console.log("YOU CLICKED YES VIA JQUERY");
      var divID = $(this).attr("data-q");
      if (divID == "nth-term")
      {
        user_response = [1,0,0,0];
        $("#question_div").html("<p>Diverges by nth term test</p>");
      }
    });

    $("#noBtn").click(function() {
      console.log("YOU CLICKED NO VIA JQUERY");
      var divID = $(this).attr("data-q");
      if (divID == "nth-term")
      {
        $("#nth-term").hide();
        $("#model-represent").show();
      }

      if (divID == "nth-term")
      {
        
      }
    })
  });

  Meteor.startup(function () {
    $("#nth-term").hide();
    $("#model-represent").hide();
    $("#geo").hide();
    $("#telescoping").hide();
    $("#p-series").hide();
    $("#ast").hide();
    $("#root-check").hide();
    $("#integral").hide();
    $("#ratio-check").hide();
    $("#lim-comp-check").hide();
    $("#lim-comp").hide();
    $("#root").hide();
    $("#ratio").hide();
  });

  Template.startBtn.events({
    'click #startBtn' : function() {
      $("#nth-term").show();
      $("#startBtn_div").hide();
    }
  });

  // Template.question.question_name = function () {
  //   return "questions/nth-term-question.png";
  // }

  // Template.question.events({
  //   'click #yesBtn' : function () {
  //     console.log("you clicked yes");
  //     $("#question_name").attr("src","questions/ast.png");
  //     // Template.question.question_name = function () {
  //     //   return "questions/ast.png";
  //     // }
  //   },
  //   'click #noBtn' : function () {
  //     console.log("you clicked no");
  //     $("#question_name").attr("src","questions/telescoping.png");
  //     // Template.question.question_name = function () {
  //     //   return "questions/telescoping.png";
  //     // }
  //   }
  // });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
