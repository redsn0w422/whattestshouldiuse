var codes = [[1,0,0,0],[0,1,0,0],[0,2,0,0],[0,3,0,0],[0,4,0,0],[0,5,0,0],[0,5,1,0],[0,5,2,0],[0,6,2,2],[0,6,0,0],[0,6,1,0],[0,6,2,0],[0,6,2,1]]
var names = ["nth-term","geo","telescoping","p-series","ast","root-check","root","integral","integral","ratio-check","ratio","lim-comp-check","lim-comp"]

if (Meteor.isClient) {
  $(document).ready(function() {
    $("#yesBtn").click(function() {
      console.log("YOU CLICKED YES VIA JQUERY");
    });
  });
  
  Meteor.startup(function () {
    $("#questionDiv").hide();
  });

  Template.startBtn.events({
    'click #startBtn' : function() {
      $("#questionDiv").show();
      $("#startBtn_div").hide();
    }
  });

  Template.question.question_name = function () {
    return "questions/nth-term-question.png";
  }

  Template.question.events({
    'click #yesBtn' : function () {
      console.log("you clicked yes");
      $("#question_name").attr("src","questions/ast.png");
      // Template.question.question_name = function () {
      //   return "questions/ast.png";
      // }
    },
    'click #noBtn' : function () {
      console.log("you clicked no");
      $("#question_name").attr("src","questions/telescoping.png");
      // Template.question.question_name = function () {
      //   return "questions/telescoping.png";
      // }
    }
  });

  Template.hello.greeting = function () {
    return "Welcome to whattestshouldiuse.";
  };

  Template.hello.events({
    'click input': function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
