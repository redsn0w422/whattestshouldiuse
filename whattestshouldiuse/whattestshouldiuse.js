if (Meteor.isClient) {
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
      Template.question.question_name = function () {
        return "questions/ast.png";
      }
    },
    'click #noBtn' : function () {
      Template.question.question_name = function () {
        return "questions/telescoping.png";
      }
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
