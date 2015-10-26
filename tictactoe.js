function cell_click() {
  var previousCell;
  var currentCell = 1; //this needs to be initialized to work the first time.
  var cells = document.getElementsByTagName("td");
  for(var i = 0; i < numCells; ++i) {
    cells[i].onclick = function() {
      previousCell = currentCell;
      currentCell = this.id;

      if(userTeam === "x" || userTeam === "o") {
        if(!computer_turn) {
          if(boardArray[this.id] == 0) {
            drawUserMove(this);
            boardArray[this.id] = "u"; //"u" is for user
            check_for_user_win();

            //computer's turn
            computer_turn = true;
            setTimeout(computer_move, 500); //wait half a second, to make it seem like the computer is thinking.
          }
        }
      } else if (userTeam === ""){
        change_to_red();
        setTimeout(change_back, 200);
      } else {
          alert("something went wrong.");
      }
    };
  }
}

function drawUserMove(element) {
  if(userTeam === "x") {
    element.innerHTML = x_img;
  } else {
    element.innerHTML = o_img;
  }
}

function arraysIdentical(a, b) {
    var i = a.length;
    if (i != b.length) return false;
    while (i--) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}

function computer_move() {
  var img;
  if(userTeam === "o") { //if the user chose o, computer is x, and vice versa.
    img = x_img
  } else {
    img = o_img;
  }

  if(!win_bool) {
    //moves for if user is X:
    if(userTeam === "x") {
      if(arraysIdentical(boardArray, userCorner0) || arraysIdentical(boardArray, userCorner2) || arraysIdentical(boardArray, userCorner6) ||
      arraysIdentical(boardArray, userCorner8) || arraysIdentical(boardArray, userEdge1) || arraysIdentical(boardArray, userEdge3) ||
      arraysIdentical(boardArray, userEdge5) || arraysIdentical(boardArray, userEdge7)) {
        boardArray[4] = "c";
        document.getElementById("4").innerHTML = img;
        check_for_computer_win();
      } else if(arraysIdentical(boardArray, userMiddle4)) {
        boardArray[0] = "c";
        document.getElementById("0").innerHTML = img;
        check_for_computer_win();
      } else if(boardArray[0] === "c" && boardArray[1] === "c" && boardArray[2] ===0) { //01
        boardArray[2] = "c";
        document.getElementById("2").innerHTML = img;
        check_for_computer_win();
      } else if(boardArray[0] === "c" && boardArray[2] === "c" && boardArray[1] === 0) { //02
        boardArray[1] = "c";
        document.getElementById("1").innerHTML = img;
        check_for_computer_win();
      } else if(boardArray[0] === "c" && boardArray[3] === "c" && boardArray[6] === 0) { //03
        boardArray[6] = "c";
        document.getElementById("6").innerHTML = img;
        check_for_computer_win();
      } else if(boardArray[0] === "c" && boardArray[4] === "c" && boardArray[8] === 0) { //04
        boardArray[8] = "c";
        document.getElementById("8").innerHTML = img;
        check_for_computer_win();
      } else if(boardArray[0] === "c" && boardArray[6] === "c" && boardArray[3] === 0) { //06
        boardArray[3] = "c";
        document.getElementById("3").innerHTML = img;
        check_for_computer_win();
      } else if(boardArray[0] === "c" && boardArray[8] === "c" && boardArray[4] === 0) { //08
        boardArray[4] = "c";
        document.getElementById("4").innerHTML = img;
        check_for_computer_win();
      } else if(boardArray[1] === "c" && boardArray[2] === "c" && boardArray[0] === 0 ) { //12
        boardArray[0] = "c";
        document.getElementById("0").innerHTML = img;
        check_for_computer_win();
      } else if(boardArray[1] === "c" && boardArray[4] === "c" && boardArray[7] === 0 ) { //14
        boardArray[7] = "c";
        document.getElementById("7").innerHTML = img;
        check_for_computer_win();
      } else if(boardArray[1] === "c" && boardArray[7] === "c" && boardArray[4] === 0 ) { //17
        boardArray[4] = "c";
        document.getElementById("4").innerHTML = img;
        check_for_computer_win();
      } else if(boardArray[2] === "c" && boardArray[4] === "c" && boardArray[6] === 0) { //24
        boardArray[6] = "c";
        document.getElementById("6").innerHTML = img;
        check_for_computer_win();
      } else if(boardArray[2] === "c" && boardArray[5] === "c" && boardArray[8] === 0) { //25
        boardArray[8] = "c";
        document.getElementById("8").innerHTML = img;
        check_for_computer_win();
      } else if(boardArray[2] === "c" && boardArray[6] === "c" && boardArray[4] === 0) { //26
        boardArray[4] = "c";
        document.getElementById("4").innerHTML = img;
        check_for_computer_win();
      } else if(boardArray[2] === "c" && boardArray[8] === "c" && boardArray[5] === 0) { //28
        boardArray[5] = "c";
        document.getElementById("5").innerHTML = img;
        check_for_computer_win();
      } else if(boardArray[3] === "c" && boardArray[4] === "c" && boardArray[5] === 0) { //34
        boardArray[5] = "c";
        document.getElementById("5").innerHTML = img;
        check_for_computer_win();
      } else if(boardArray[3] === "c" && boardArray[5] === "c" && boardArray[4] === 0) { //35
        boardArray[4] = "c";
        document.getElementById("4").innerHTML = img;
        check_for_computer_win();
      } else if(boardArray[3] === "c" && boardArray[6] === "c" && boardArray[0] === 0) { //36
        boardArray[0] = "c";
        document.getElementById("0").innerHTML = img;
        check_for_computer_win();
      } else if(boardArray[4] === "c" && boardArray[5] === "c" && boardArray[3] === 0) { //45
        boardArray[3] = "c";
        document.getElementById("3").innerHTML = img;
        check_for_computer_win();
      } else if(boardArray[4] === "c" && boardArray[6] === "c" && boardArray[2] === 0) { //46
        boardArray[2] = "c";
        document.getElementById("2").innerHTML = img;
        check_for_computer_win();
      } else if(boardArray[4] === "c" && boardArray[7] === "c" && boardArray[1] === 0) { //47
        boardArray[1] = "c";
        document.getElementById("1").innerHTML = img;
        check_for_computer_win();
      } else if(boardArray[4] === "c" && boardArray[8] === "c" && boardArray[0] === 0) { //48
        boardArray[0] = "c";
        document.getElementById("0").innerHTML = img;
        check_for_computer_win();
      } else if(boardArray[5] === "c" && boardArray[8] === "c" && boardArray[2] === 0) { //58
        boardArray[2] = "c";
        document.getElementById("2").innerHTML = img;
        check_for_computer_win();
      } else if(boardArray[6] === "c" && boardArray[7] === "c" && boardArray[8] === 0) { //67
        boardArray[8] = "c";
        document.getElementById("8").innerHTML = img;
        check_for_computer_win();
      } else if(boardArray[6] === "c" && boardArray[8] === "c" && boardArray[7] === 0) { //68
        boardArray[7] = "c";
        document.getElementById("7").innerHTML = img;
        check_for_computer_win();
      } else if(boardArray[7] === "c" && boardArray[8] === "c" && boardArray[6] === 0) { //68
        boardArray[6] = "c";
        document.getElementById("6").innerHTML = img;
        check_for_computer_win();
      } else if(boardArray[0] === "u" && boardArray[1] === "u" && boardArray[2] ===0) { //01  ------------Check for user almost win
        boardArray[2] = "c";
        document.getElementById("2").innerHTML = img;
        check_for_computer_win();
      } else if(boardArray[0] === "u" && boardArray[2] === "u" && boardArray[1] === 0) { //02
        boardArray[1] = "c";
        document.getElementById("1").innerHTML = img;
        check_for_computer_win();
      } else if(boardArray[0] === "u" && boardArray[3] === "u" && boardArray[6] === 0) { //03
        boardArray[6] = "c";
        document.getElementById("6").innerHTML = img;
        check_for_computer_win();
      } else if(boardArray[0] === "u" && boardArray[4] === "u" && boardArray[8] === 0) { //04
        boardArray[8] = "c";
        document.getElementById("8").innerHTML = img;
        check_for_computer_win();
      } else if(boardArray[0] === "u" && boardArray[6] === "u" && boardArray[3] === 0) { //06
        boardArray[3] = "c";
        document.getElementById("3").innerHTML = img;
        check_for_computer_win();
      } else if(boardArray[0] === "u" && boardArray[8] === "u" && boardArray[4] === 0) { //08
        boardArray[4] = "c";
        document.getElementById("4").innerHTML = img;
        check_for_computer_win();
      } else if(boardArray[1] === "u" && boardArray[2] === "u" && boardArray[0] === 0 ) { //12
        boardArray[0] = "c";
        document.getElementById("0").innerHTML = img;
        check_for_computer_win();
      } else if(boardArray[1] === "u" && boardArray[4] === "u" && boardArray[7] === 0 ) { //14
        boardArray[7] = "c";
        document.getElementById("7").innerHTML = img;
        check_for_computer_win();
      } else if(boardArray[1] === "u" && boardArray[7] === "u" && boardArray[4] === 0 ) { //17
        boardArray[4] = "c";
        document.getElementById("4").innerHTML = img;
        check_for_computer_win();
      } else if(boardArray[2] === "u" && boardArray[4] === "u" && boardArray[6] === 0) { //24
        boardArray[6] = "c";
        document.getElementById("6").innerHTML = img;
        check_for_computer_win();
      } else if(boardArray[2] === "u" && boardArray[5] === "u" && boardArray[8] === 0) { //25
        boardArray[8] = "c";
        document.getElementById("8").innerHTML = img;
        check_for_computer_win();
      } else if(boardArray[2] === "u" && boardArray[6] === "u" && boardArray[4] === 0) { //26
        boardArray[4] = "c";
        document.getElementById("4").innerHTML = img;
        check_for_computer_win();
      } else if(boardArray[2] === "u" && boardArray[8] === "u" && boardArray[5] === 0) { //28
        boardArray[5] = "c";
        document.getElementById("5").innerHTML = img;
        check_for_computer_win();
      } else if(boardArray[3] === "u" && boardArray[4] === "u" && boardArray[5] === 0) { //34
        boardArray[5] = "c";
        document.getElementById("5").innerHTML = img;
        check_for_computer_win();
      } else if(boardArray[3] === "u" && boardArray[5] === "u" && boardArray[4] === 0) { //35
        boardArray[4] = "c";
        document.getElementById("4").innerHTML = img;
        check_for_computer_win();
      } else if(boardArray[3] === "u" && boardArray[6] === "u" && boardArray[0] === 0) { //36
        boardArray[0] = "c";
        document.getElementById("0").innerHTML = img;
        check_for_computer_win();
      } else if(boardArray[4] === "u" && boardArray[5] === "u" && boardArray[3] === 0) { //45
        boardArray[3] = "c";
        document.getElementById("3").innerHTML = img;
        check_for_computer_win();
      } else if(boardArray[4] === "u" && boardArray[6] === "u" && boardArray[2] === 0) { //46
        boardArray[2] = "c";
        document.getElementById("2").innerHTML = img;
        check_for_computer_win();
      } else if(boardArray[4] === "u" && boardArray[7] === "u" && boardArray[1] === 0) { //47
        boardArray[1] = "c";
        document.getElementById("1").innerHTML = img;
        check_for_computer_win();
      } else if(boardArray[4] === "u" && boardArray[8] === "u" && boardArray[0] === 0) { //48
        boardArray[0] = "c";
        document.getElementById("0").innerHTML = img;
        check_for_computer_win();
      } else if(boardArray[5] === "u" && boardArray[8] === "u" && boardArray[2] === 0) { //58
        boardArray[2] = "c";
        document.getElementById("2").innerHTML = img;
        check_for_computer_win();
      } else if(boardArray[6] === "u" && boardArray[7] === "u" && boardArray[8] === 0) { //67
        boardArray[8] = "c";
        document.getElementById("8").innerHTML = img;
        check_for_computer_win();
      } else if(boardArray[6] === "u" && boardArray[8] === "u" && boardArray[7] === 0) { //68
        boardArray[7] = "c";
        document.getElementById("7").innerHTML = img;
        check_for_computer_win();
      } else if(boardArray[7] === "u" && boardArray[8] === "u" && boardArray[6] === 0) { //68
        boardArray[6] = "c";
        document.getElementById("6").innerHTML = img;
        check_for_computer_win();
      } else { //otherwise, go somewhere else:
        if(arraysIdentical(boardArray, uR1) || arraysIdentical(boardArray, uR3) || arraysIdentical(boardArray, uR5) || arraysIdentical(boardArray, uR7)) {
          boardArray[4] = "c";
          document.getElementById("4").innerHTML = img;
          check_for_computer_win();
        } else if (arraysIdentical(boardArray, uR6) || arraysIdentical(boardArray, uR8)) {
          boardArray[2] = "c";
          document.getElementById("2").innerHTML = img;
          check_for_computer_win();
        } else if (arraysIdentical(boardArray, uR4)) {
          boardArray[8] = "c";
          document.getElementById("8").innerHTML = img;
          check_for_computer_win();
        } else if (arraysIdentical(boardArray, uR2)) {
          boardArray[6] = "c";
          document.getElementById("6").innerHTML = img;
          check_for_computer_win();
        } else {
          if(boardArray[0] === 0) {
            boardArray[0] = "c";
            document.getElementById("0").innerHTML = img;
            check_for_computer_win();
          } else if(boardArray[2] === 0) {
            boardArray[2] = "c";
            document.getElementById("2").innerHTML = img;
            check_for_computer_win();
          } else if(boardArray[6] === 0) {
            boardArray[6] = "c";
            document.getElementById("6").innerHTML = img;
            check_for_computer_win();
          } else if(boardArray[8] === 0) {
            boardArray[8] = "c";
            document.getElementById("8").innerHTML = img;
            check_for_computer_win();
          } else if(boardArray[4] === 0) {
            boardArray[4] = "c";
            document.getElementById("4").innerHTML = img;
            check_for_computer_win();
          } else if(boardArray[1] === 0) {
            boardArray[1] = "c";
            document.getElementById("1").innerHTML = img;
            check_for_computer_win();
          } else if(boardArray[3] === 0) {
            boardArray[3] = "c";
            document.getElementById("3").innerHTML = img;
            check_for_computer_win();
          } else if(boardArray[5] === 0) {
            boardArray[5] = "c";
            document.getElementById("5").innerHTML = img;
            check_for_computer_win();
          } else if(boardArray[7] === 0) {
            boardArray[7] = "c";
            document.getElementById("7").innerHTML = img;
            check_for_computer_win();
          } else {
            //don't do anything
          }
        }
      }
    } else { //moves for if user is o (computer is x):
      if(arraysIdentical(boardArray, [0, 0, 0, 0, 0, 0, 0, 0, 0])) {
        boardArray[0] = "c";
        document.getElementById("0").innerHTML = img;
        check_for_computer_win();
      } else {
        //"almost win" scenarios:
        //01, 02, 03, 04, 06, 08, 12, 14, 17, 24, 25, 26, 28, 34, 35, 36, 45, 46, 47, 48, 58, 67, 68, 78

        //check to see if we can win this turn:
        if(boardArray[0] === "c" && boardArray[1] === "c" && boardArray[2] ===0) { //01
          boardArray[2] = "c";
          document.getElementById("2").innerHTML = img;
          check_for_computer_win();
        } else if(boardArray[0] === "c" && boardArray[2] === "c" && boardArray[1] === 0) { //02
          boardArray[1] = "c";
          document.getElementById("1").innerHTML = img;
          check_for_computer_win();
        } else if(boardArray[0] === "c" && boardArray[3] === "c" && boardArray[6] === 0) { //03
          boardArray[6] = "c";
          document.getElementById("6").innerHTML = img;
          check_for_computer_win();
        } else if(boardArray[0] === "c" && boardArray[4] === "c" && boardArray[8] === 0) { //04
          boardArray[8] = "c";
          document.getElementById("8").innerHTML = img;
          check_for_computer_win();
        } else if(boardArray[0] === "c" && boardArray[6] === "c" && boardArray[3] === 0) { //06
          boardArray[3] = "c";
          document.getElementById("3").innerHTML = img;
          check_for_computer_win();
        } else if(boardArray[0] === "c" && boardArray[8] === "c" && boardArray[4] === 0) { //08
          boardArray[4] = "c";
          document.getElementById("4").innerHTML = img;
          check_for_computer_win();
        } else if(boardArray[1] === "c" && boardArray[2] === "c" && boardArray[0] === 0 ) { //12
          boardArray[0] = "c";
          document.getElementById("0").innerHTML = img;
          check_for_computer_win();
        } else if(boardArray[1] === "c" && boardArray[4] === "c" && boardArray[7] === 0 ) { //14
          boardArray[7] = "c";
          document.getElementById("7").innerHTML = img;
          check_for_computer_win();
        } else if(boardArray[1] === "c" && boardArray[7] === "c" && boardArray[4] === 0 ) { //17
          boardArray[4] = "c";
          document.getElementById("4").innerHTML = img;
          check_for_computer_win();
        } else if(boardArray[2] === "c" && boardArray[4] === "c" && boardArray[6] === 0) { //24
          boardArray[6] = "c";
          document.getElementById("6").innerHTML = img;
          check_for_computer_win();
        } else if(boardArray[2] === "c" && boardArray[5] === "c" && boardArray[8] === 0) { //25
          boardArray[8] = "c";
          document.getElementById("8").innerHTML = img;
          check_for_computer_win();
        } else if(boardArray[2] === "c" && boardArray[6] === "c" && boardArray[4] === 0) { //26
          boardArray[4] = "c";
          document.getElementById("4").innerHTML = img;
          check_for_computer_win();
        } else if(boardArray[2] === "c" && boardArray[8] === "c" && boardArray[5] === 0) { //28
          boardArray[5] = "c";
          document.getElementById("5").innerHTML = img;
          check_for_computer_win();
        } else if(boardArray[3] === "c" && boardArray[4] === "c" && boardArray[5] === 0) { //34
          boardArray[5] = "c";
          document.getElementById("5").innerHTML = img;
          check_for_computer_win();
        } else if(boardArray[3] === "c" && boardArray[5] === "c" && boardArray[4] === 0) { //35
          boardArray[4] = "c";
          document.getElementById("4").innerHTML = img;
          check_for_computer_win();
        } else if(boardArray[3] === "c" && boardArray[6] === "c" && boardArray[0] === 0) { //36
          boardArray[0] = "c";
          document.getElementById("0").innerHTML = img;
          check_for_computer_win();
        } else if(boardArray[4] === "c" && boardArray[5] === "c" && boardArray[3] === 0) { //45
          boardArray[3] = "c";
          document.getElementById("3").innerHTML = img;
          check_for_computer_win();
        } else if(boardArray[4] === "c" && boardArray[6] === "c" && boardArray[2] === 0) { //46
          boardArray[2] = "c";
          document.getElementById("2").innerHTML = img;
          check_for_computer_win();
        } else if(boardArray[4] === "c" && boardArray[7] === "c" && boardArray[1] === 0) { //47
          boardArray[1] = "c";
          document.getElementById("1").innerHTML = img;
          check_for_computer_win();
        } else if(boardArray[4] === "c" && boardArray[8] === "c" && boardArray[0] === 0) { //48
          boardArray[0] = "c";
          document.getElementById("0").innerHTML = img;
          check_for_computer_win();
        } else if(boardArray[5] === "c" && boardArray[8] === "c" && boardArray[2] === 0) { //58
          boardArray[2] = "c";
          document.getElementById("2").innerHTML = img;
          check_for_computer_win();
        } else if(boardArray[6] === "c" && boardArray[7] === "c" && boardArray[8] === 0) { //67
          boardArray[8] = "c";
          document.getElementById("8").innerHTML = img;
          check_for_computer_win();
        } else if(boardArray[6] === "c" && boardArray[8] === "c" && boardArray[7] === 0) { //68
          boardArray[7] = "c";
          document.getElementById("7").innerHTML = img;
          check_for_computer_win();
        } else if(boardArray[7] === "c" && boardArray[8] === "c" && boardArray[6] === 0) { //68
          boardArray[6] = "c";
          document.getElementById("6").innerHTML = img;
          check_for_computer_win();
        } else if(boardArray[0] === "u" && boardArray[1] === "u" && boardArray[2] ===0) { //01  ------------Check for user almost win
          boardArray[2] = "c";
          document.getElementById("2").innerHTML = img;
          check_for_computer_win();
        } else if(boardArray[0] === "u" && boardArray[2] === "u" && boardArray[1] === 0) { //02
          boardArray[1] = "c";
          document.getElementById("1").innerHTML = img;
          check_for_computer_win();
        } else if(boardArray[0] === "u" && boardArray[3] === "u" && boardArray[6] === 0) { //03
          boardArray[6] = "c";
          document.getElementById("6").innerHTML = img;
          check_for_computer_win();
        } else if(boardArray[0] === "u" && boardArray[4] === "u" && boardArray[8] === 0) { //04
          boardArray[8] = "c";
          document.getElementById("8").innerHTML = img;
          check_for_computer_win();
        } else if(boardArray[0] === "u" && boardArray[6] === "u" && boardArray[3] === 0) { //06
          boardArray[3] = "c";
          document.getElementById("3").innerHTML = img;
          check_for_computer_win();
        } else if(boardArray[0] === "u" && boardArray[8] === "u" && boardArray[4] === 0) { //08
          boardArray[4] = "c";
          document.getElementById("4").innerHTML = img;
          check_for_computer_win();
        } else if(boardArray[1] === "u" && boardArray[2] === "u" && boardArray[0] === 0 ) { //12
          boardArray[0] = "c";
          document.getElementById("0").innerHTML = img;
          check_for_computer_win();
        } else if(boardArray[1] === "u" && boardArray[4] === "u" && boardArray[7] === 0 ) { //14
          boardArray[7] = "c";
          document.getElementById("7").innerHTML = img;
          check_for_computer_win();
        } else if(boardArray[1] === "u" && boardArray[7] === "u" && boardArray[4] === 0 ) { //17
          boardArray[4] = "c";
          document.getElementById("4").innerHTML = img;
          check_for_computer_win();
        } else if(boardArray[2] === "u" && boardArray[4] === "u" && boardArray[6] === 0) { //24
          boardArray[6] = "c";
          document.getElementById("6").innerHTML = img;
          check_for_computer_win();
        } else if(boardArray[2] === "u" && boardArray[5] === "u" && boardArray[8] === 0) { //25
          boardArray[8] = "c";
          document.getElementById("8").innerHTML = img;
          check_for_computer_win();
        } else if(boardArray[2] === "u" && boardArray[6] === "u" && boardArray[4] === 0) { //26
          boardArray[4] = "c";
          document.getElementById("4").innerHTML = img;
          check_for_computer_win();
        } else if(boardArray[2] === "u" && boardArray[8] === "u" && boardArray[5] === 0) { //28
          boardArray[5] = "c";
          document.getElementById("5").innerHTML = img;
          check_for_computer_win();
        } else if(boardArray[3] === "u" && boardArray[4] === "u" && boardArray[5] === 0) { //34
          boardArray[5] = "c";
          document.getElementById("5").innerHTML = img;
          check_for_computer_win();
        } else if(boardArray[3] === "u" && boardArray[5] === "u" && boardArray[4] === 0) { //35
          boardArray[4] = "c";
          document.getElementById("4").innerHTML = img;
          check_for_computer_win();
        } else if(boardArray[3] === "u" && boardArray[6] === "u" && boardArray[0] === 0) { //36
          boardArray[0] = "c";
          document.getElementById("0").innerHTML = img;
          check_for_computer_win();
        } else if(boardArray[4] === "u" && boardArray[5] === "u" && boardArray[3] === 0) { //45
          boardArray[3] = "c";
          document.getElementById("3").innerHTML = img;
          check_for_computer_win();
        } else if(boardArray[4] === "u" && boardArray[6] === "u" && boardArray[2] === 0) { //46
          boardArray[2] = "c";
          document.getElementById("2").innerHTML = img;
          check_for_computer_win();
        } else if(boardArray[4] === "u" && boardArray[7] === "u" && boardArray[1] === 0) { //47
          boardArray[1] = "c";
          document.getElementById("1").innerHTML = img;
          check_for_computer_win();
        } else if(boardArray[4] === "u" && boardArray[8] === "u" && boardArray[0] === 0) { //48
          boardArray[0] = "c";
          document.getElementById("0").innerHTML = img;
          check_for_computer_win();
        } else if(boardArray[5] === "u" && boardArray[8] === "u" && boardArray[2] === 0) { //58
          boardArray[2] = "c";
          document.getElementById("2").innerHTML = img;
          check_for_computer_win();
        } else if(boardArray[6] === "u" && boardArray[7] === "u" && boardArray[8] === 0) { //67
          boardArray[8] = "c";
          document.getElementById("8").innerHTML = img;
          check_for_computer_win();
        } else if(boardArray[6] === "u" && boardArray[8] === "u" && boardArray[7] === 0) { //68
          boardArray[7] = "c";
          document.getElementById("7").innerHTML = img;
          check_for_computer_win();
        } else if(boardArray[7] === "u" && boardArray[8] === "u" && boardArray[6] === 0) { //68
          boardArray[6] = "c";
          document.getElementById("6").innerHTML = img;
          check_for_computer_win();
        } else { //otherwise, go somewhere else:
          if(arraysIdentical(boardArray, uR1) || arraysIdentical(boardArray, uR3) || arraysIdentical(boardArray, uR5) || arraysIdentical(boardArray, uR7)) {
            boardArray[4] = "c";
            document.getElementById("4").innerHTML = img;
            check_for_computer_win();
          } else if (arraysIdentical(boardArray, uR6) || arraysIdentical(boardArray, uR8)) {
            boardArray[2] = "c";
            document.getElementById("2").innerHTML = img;
            check_for_computer_win();
          } else if (arraysIdentical(boardArray, uR4)) {
            boardArray[8] = "c";
            document.getElementById("8").innerHTML = img;
            check_for_computer_win();
          } else if (arraysIdentical(boardArray, uR2)) {
            boardArray[6] = "c";
            document.getElementById("6").innerHTML = img;
            check_for_computer_win();
          } else {
            if(boardArray[0] === 0) {
              boardArray[0] = "c";
              document.getElementById("0").innerHTML = img;
              check_for_computer_win();
            } else if(boardArray[2] === 0) {
              boardArray[2] = "c";
              document.getElementById("2").innerHTML = img;
              check_for_computer_win();
            } else if(boardArray[6] === 0) {
              boardArray[6] = "c";
              document.getElementById("6").innerHTML = img;
              check_for_computer_win();
            } else if(boardArray[8] === 0) {
              boardArray[8] = "c";
              document.getElementById("8").innerHTML = img;
              check_for_computer_win();
            } else if(boardArray[4] === 0) {
              boardArray[4] = "c";
              document.getElementById("4").innerHTML = img;
              check_for_computer_win();
            } else if(boardArray[1] === 0) {
              boardArray[1] = "c";
              document.getElementById("1").innerHTML = img;
              check_for_computer_win();
            } else if(boardArray[3] === 0) {
              boardArray[3] = "c";
              document.getElementById("3").innerHTML = img;
              check_for_computer_win();
            } else if(boardArray[5] === 0) {
              boardArray[5] = "c";
              document.getElementById("5").innerHTML = img;
              check_for_computer_win();
            } else if(boardArray[7] === 0) {
              boardArray[7] = "c";
              document.getElementById("7").innerHTML = img;
              check_for_computer_win();
            } else {
              //don't do anything
            }
          }
        }
      }
    }
  }
  computer_turn = false; //it's the user's turn again
}

function x_click() {
  if(team_chosen === false) {
  userTeam = "x";
  computer_turn = false; //user goes first
  team_chosen = true;
  document.getElementById("x_button").style.color = color_red;
  document.getElementById("o_button").style.color = color_text;
  document.getElementById("choose_team").style.color = color_text;
  }
}

function o_click() {
  if(team_chosen === false) {
    userTeam = "o";
    computer_turn = true; //computer goes first
    team_chosen = true;
    document.getElementById("o_button").style.color = color_red;
    document.getElementById("x_button").style.color = color_text;
    document.getElementById("choose_team").style.color = color_text;
    computer_move(); //if user choses O, computer goes first.
  }
}

//win combos: 012, 048, 036, 147, 246, 258, 345, 678

function game_over(msg) {
  var win_div = document.getElementById("game_end");
  win_bool = true;
  win_div.innerHTML = msg;
  win_div.style.display = "block";
//  alert(msg);
//  location.reload();
  setTimeout(refresh_delay, 2000);
}

function refresh_delay() {
  location.reload();
}

function check_for_user_win() {
  msg = "You win!";
  if (boardArray[0] === "u" && boardArray[1] === "u" && boardArray[2] === "u") {
    game_over(msg);
  } else if (boardArray[0] === "u" && boardArray[4] === "u" && boardArray[8] === "u") {
    game_over(msg);
  } else if (boardArray[0] === "u" && boardArray[3] === "u" && boardArray[6] === "u") {
    game_over(msg);
  } else if (boardArray[1] === "u" && boardArray[4] === "u" && boardArray[7] === "u") {
    game_over(msg);
  } else if (boardArray[2] === "u" && boardArray[4] === "u" && boardArray[6] === "u") {
    game_over(msg);
  } else if (boardArray[2] === "u" && boardArray[5] === "u" && boardArray[8] === "u") {
    game_over(msg);
  } else if (boardArray[3] === "u" && boardArray[4] === "u" && boardArray[5] === "u") {
    game_over(msg);
  } else if (boardArray[6] === "u" && boardArray[7] === "u" && boardArray[8] === "u") {
    game_over(msg);
  } else {
    check_for_draw();
    //nobody won this turn.
  }
}

function check_for_computer_win() {
  var msg = "Computer wins!";
  var win_div = document.getElementById("game_end");
  if (boardArray[0] === "c" && boardArray[1] === "c" && boardArray[2] === "c") {
    game_over(msg);
  } else if (boardArray[0] === "c" && boardArray[4] === "c" && boardArray[8] === "c") {
    game_over(msg);
  } else if (boardArray[0] === "c" && boardArray[3] === "c" && boardArray[6] === "c") {
    game_over(msg);
  } else if (boardArray[1] === "c" && boardArray[4] === "c" && boardArray[7] === "c") {
    game_over(msg);
  } else if (boardArray[2] === "c" && boardArray[4] === "c" && boardArray[6] === "c") {
    game_over(msg);
  } else if (boardArray[2] === "c" && boardArray[5] === "c" && boardArray[8] === "c") {
    game_over(msg);
  } else if (boardArray[3] === "c" && boardArray[4] === "c" && boardArray[5] === "c") {
    game_over(msg);
  } else if (boardArray[6] === "c" && boardArray[7] === "c" && boardArray[8] === "c") {
    game_over(msg);
  } else {
    check_for_draw();
    //nobody won this turn.
  }
}

function check_for_draw() {
  var count = 0;
  for(var i = 0; i < numCells; i++) {
    if (boardArray[i] != 0) {
      count++;
    }
  }
  if (count == 9) {
    game_over("It's a draw!");
  }
}

//code to flash the choose_team banner if they click without choosing.
function change_to_red() {
  document.getElementById("choose_team").style.color = color_red;
}
function change_back() {
  document.getElementById("choose_team").style.color = color_text;
  setTimeout(change_to_red, 200);
}

var team_chosen = false;
var numCells = 9;
var computer_turn;
var win_bool = false;
var o_img = "<img src='img/o_256.png'>";
var x_img = "<img src='img/x_256.png'>";
var userTeam = "";
var color_text="#E4FDE1";
var color_border="#114B5F";
var color_table_bg="#456990";
var color_table_bg_selected = "#4C5760"
var color_bg= "#028090";
var color_red = "#F05D5E";

//start with an empty board
var boardArray = [0, 0, 0, 0, 0, 0, 0, 0, 0];

//boardArray constants:

//user responses (user is O):

var uR1 = ["c", "u", 0, 0, 0, 0, 0, 0, 0];
var uR2 = ["c", 0, "u", 0, 0, 0, 0, 0, 0];
var uR3 = ["c", 0, 0, "u", 0, 0, 0, 0, 0];
var uR4 = ["c", 0, 0, 0, "u", 0, 0, 0, 0];
var uR5 = ["c", 0, 0, 0, 0, "u", 0, 0, 0];
var uR6 = ["c", 0, 0, 0, 0, 0, "u", 0, 0];
var uR7 = ["c", 0, 0, 0, 0, 0, 0, "u", 0];
var uR8 = ["c", 0, 0, 0, 0, 0, 0, 0, "u"];

//for if user chooses X:
var userCorner0 = ["u", 0, 0, 0, 0, 0, 0, 0, 0];
var userCorner2 = [0, 0, "u", 0, 0, 0, 0, 0, 0];
var userCorner6 = [0, 0, 0, 0, 0, 0, "u", 0, 0];
var userCorner8 = [0, 0, 0, 0, 0, 0, 0, 0, "u"];
var userMiddle4 = [0, 0, 0, 0, "u", 0, 0, 0, 0];
var userEdge1 = [0, "u", 0, 0, 0, 0, 0, 0, 0];
var userEdge3 = [0, 0, 0, "u", 0, 0, 0, 0, 0];
var userEdge5 = [0, 0, 0, 0, 0, "u", 0, 0, 0];
var userEdge7 = [0, 0, 0, 0, 0, 0, 0, "u", 0];

if (document && document.getElementById) {
  window.onload = cell_click;
}
