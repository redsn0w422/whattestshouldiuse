var codes = [[0,0,0,0],[1,0,0,0],[0,1,0,0],[0,2,0,0],[0,3,0,0],[0,4,0,0],[0,5,0,0],[0,5,1,0],[0,5,2,0],[0,6,2,2],[0,6,0,0],[0,6,1,0],[0,6,2,0],[0,6,2,1]]
var names = ["model","nth-term","geo","telescoping","p-series","ast","root-check","root","integral","integral","ratio-check","ratio","lim-comp-check","lim-comp"]

var user_response = [0,0,0,0];

if (Meteor.isClient) {
  $(document).ready(function() {
    var model_chosen = "";
    $("#yesBtn-nth-term").click(function() {
      $("#question_div").html("<p>Diverges by nth term test</p>");
    });

    $("#yesBtn-root-check").click(function(){
      $("#question_div").html("<p>Use root test.</p>");
    });

    $("#yesBtn-ratio-check").click(function(){
      $("#question_div").html("<p>Use ratio test.</p>");
    });

    $("#yesBtn-lim-comp-check").click(function(){
      $("#quesiton_div").html("<p>Use limit comparison test.</p>");
    });

    $("#noBtn-nth-term").click(function() {
        $("#nth-term").hide();
        $("#model-represent").show();
    });

    $("#noBtn-root-check").click(function(){
      $("#question_div").html("<p>Use integral test.</p>");
    });

    $("#noBtn-ratio-check").click(function(){
      $("#ratio-check").hide();
      $("#lim-comp-check").show();
    });

    $("#noBtn-lim-comp-check").click(function(){
      $("#quesiton_div").html("<p>Use integral test.</p>");
    });
    // $("input:button[id=yesBtn, dataq=root-check]").click(function() {
    //   console.log("CLICKED YES AND ROOT CHECK 2");
    // });

    $("#model_submit").click(function(){
      switch (model_chosen)
      { 
        case "geo":
          $("#question_div").html("<p>Use the geometric series test.</p>");
          user_response[1] = 1;
          break;
        case "telescoping":
          $("#question_div").html("<p>Use the telescoping series test.</p>");
          break;
        case "p-series":
          $("#question_div").html("<p>Use the p-series test.</p>");
          break;
        case "ast":
          $("#question_div").html("<p>Use the alternating series test.</p>");
          break;
        case "root-test":
          $("#model-represent").hide();
          $("#root-check").show();
          break;
        case "NOTA":
          $("#model-represent").hide();
          $("#ratio-check").show();
          break;
      }
      console.log(model_chosen);
    });

    $("input:radio[name=user_model]").click(function() {
      model_chosen = $(this).val();
    }); 

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
