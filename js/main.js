$(document).ready(function() {
  var ticketString = "011722475204365360702637497481233455758302154058881928446789061241507324334876840738576186051132437816395663800818206590104559628214294664710935667287132130687703253151692742547985";
  var firstticket = ticketString.slice(0, 30);
  var secondticket = ticketString.slice(30, 60);
  var thirdticket = ticketString.slice(60, 90);
  var fourthticket = ticketString.slice(90, 120);
  var fifthticket = ticketString.slice(120, 150);
  var sixthticket = ticketString.slice(150, 180);
  var output = [];
  var outer = [];
  //var cells = $(".bingo-1 .col div");
  var row1 = $(".bingo-1 .col");
  var row2 = $(".bingo-2 .col");
  var row3 = $(".bingo-3 .col");
  var row4 = $(".bingo-4 .col");
  var row5 = $(".bingo-5 .col");
  var row6 = $(".bingo-6 .col");
  var clear = function() {
      output = [];
      outer = []
    }


  $(".bingo").animate({opacity: 1});

    //first ticket
  mapTicket(firstticket, output, outer, row1);
  clear();
  //second ticket
  mapTicket(secondticket, output, outer, row2);
  clear();
  //third ticket
  mapTicket(thirdticket, output, outer, row3);
  clear();
  //fourth ticket
  mapTicket(fourthticket, output, outer, row4);
  clear();
  //fourth ticket
  mapTicket(fifthticket, output, outer, row5);
  clear();
  //fourth ticket
  mapTicket(sixthticket, output, outer, row6);
  clear();

  function mapTicket(ticketNumber, output, outer, row) {
    var sNumber = ticketNumber.toString();
    for (var i = 0, len = sNumber.length; i < len; i += 2) {
      //output = [];
      output.push(+sNumber.slice(i, i + 2));
      output.sort(function(a, b) {
        return a - b
      });
      //console.log(output);
    }
    //outer = [];
    for (var x = 0; x < 10; x++) {
      outer[x] = [];
    }

    output.forEach(function(x) {
      outer[Math.floor(x / 10)].push(x);
    });

    //console.log(outer);

    row.map(function(index) {

      $(this).html('<div>' + outer[index][0] + '</div>' +
        '<div>' + (outer[index][1] !== undefined ? outer[index][1] : "") + '</div>' +
        '<div>' + (outer[index][2] !== undefined ? outer[index][2] : "") + '</div>');
    });
  }

  //let's play a game
  var pool = [];
  var used = [];
  for (var m = 1; m <= 90; m++) {
    pool.push(m);
  }
  console.log(pool);

//this generate unique number from 1 to 90. no same number is returned
  function getNumber() {
    if (pool.length == 0) {
        alert("No numbers left");
    }
    var index = Math.floor(pool.length * Math.random());
    var drawn = pool.splice(index, 1);
    used.push(drawn[0]);
    console.log(used);
    $(".bigNumberDisplay span").text(drawn[0]);
  }

  $("#bingoTime").on("click", getNumber);

  //numbers left
  //select numbers
  $(".bingo-1 .col div").click(function(){
    if ($(this).text().length > 0) {
    $(this).toggleClass("selected");
    }

    var count = 0;

    console.log(count);
    var selected = $(".selected").length;
    var numberUntilWin = 15 - selected;
    $(".togo .leftover").html(numberUntilWin + " to go");
    console.log(selected);

  });

  //this is as far as i can go with my javascript.
  //the To Go only works for the firstTicket
  //I wanted to count down the numbers of remaining number for the ticket with
  //the most stamped number





});
