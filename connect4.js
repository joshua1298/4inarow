let board = {
  column1: [document.getElementById('c1')],
  column2: [document.getElementById('c2')],
  column3: [document.getElementById('c3')],
  column4: [document.getElementById('c4')],
  column5: [document.getElementById('c5')],
  column6: [document.getElementById('c6')],
  column7: [document.getElementById('c7')]
}

let p1Turn = true
let winner = ''
let infoBlurb = document.getElementById('infoBlurb')

board.column1[0].addEventListener('click', placeMove1)
board.column2[0].addEventListener('click', placeMove2)
board.column3[0].addEventListener('click', placeMove3)
board.column4[0].addEventListener('click', placeMove4)
board.column5[0].addEventListener('click', placeMove5)
board.column6[0].addEventListener('click', placeMove6)
board.column7[0].addEventListener('click', placeMove7)


for(let i = 1; i<8; i++){
  for(let j = 1; j<7; j++){
    let rowNum = "c"+i+"r"+j
    let element = document.getElementById(rowNum)
    switch(i){
      case 1: 
        board.column1.push(element)
        break;
      case 2: 
        board.column2.push(element)
        break;  
      case 3: 
        board.column3.push(element)
        break;
      case 4: 
        board.column4.push(element)
        break;
      case 5: 
        board.column5.push(element)
        break;
      case 6: 
        board.column6.push(element)
        break;
      case 7: 
        board.column7.push(element)
        break;
    }

  }
}


function placeMove1(){
  for(let i = 6; i>0; i--){
    if(board.column1[i].innerHTML === 'X' || board.column1[i].innerHTML === 'O'){
    }else{
      if(p1Turn){
        board.column1[i].innerHTML = 'X'
      }else{
        board.column1[i].innerHTML = 'O'
      }
      checkWin(board.column1[i])
      break
    }
  }
  

}
function placeMove2(){
  for(let i = 6; i>0; i--){
    if(board.column2[i].innerHTML === 'X' || board.column2[i].innerHTML === 'O'){
    }else{
      if(p1Turn){
        board.column2[i].innerHTML = 'X'
      }else{
        board.column2[i].innerHTML = 'O'
      }
      checkWin(board.column2[i])
      break
    }
  }
  

}
function placeMove3(){
  for(let i = 6; i>0; i--){
    if(board.column3[i].innerHTML === 'X' || board.column3[i].innerHTML === 'O'){
    }else{
      if(p1Turn){
        board.column3[i].innerHTML = 'X'
      }else{
        board.column3[i].innerHTML = 'O'
      }
      checkWin(board.column3[i])
      break
    }
  }
  

}
function placeMove4(){
  for(let i = 6; i>0; i--){
    if(board.column4[i].innerHTML === 'X' || board.column4[i].innerHTML === 'O'){
    }else{
      if(p1Turn){
        board.column4[i].innerHTML = 'X'
      }else{
        board.column4[i].innerHTML = 'O'
      }
      checkWin(board.column4[i])
      break
    }
  }
  

}
function placeMove5(){
  for(let i = 6; i>0; i--){
    if(board.column5[i].innerHTML === 'X' || board.column5[i].innerHTML === 'O'){
    }else{
      if(p1Turn){
        board.column5[i].innerHTML = 'X'
      }else{
        board.column5[i].innerHTML = 'O'
      }
      checkWin(board.column5[i])
      break
    }
  }
  

}
function placeMove6(){
  for(let i = 6; i>0; i--){
    if(board.column6[i].innerHTML === 'X' || board.column6[i].innerHTML === 'O'){
    }else{
      if(p1Turn){
        board.column6[i].innerHTML = 'X'
      }else{
        board.column6[i].innerHTML = 'O'
      }
      checkWin(board.column6[i])
      break
    }
  }
  

}
function placeMove7(){
  for(let i = 6; i>0; i--){
    if(board.column7[i].innerHTML === 'X' || board.column7[i].innerHTML === 'O'){
    }else{
      if(p1Turn){
        board.column7[i].innerHTML = 'X'
      }else{
        board.column7[i].innerHTML = 'O'
      }
      checkWin(board.column7[i])
      break
    }
  }
  

}

function checkWin(lastMove){
  let correctBoxes = 0
  let rowNum = Number(lastMove.id.substring(3))
  let colNum = Number(lastMove.id.substring(1,2))
  let player = 'O'
  let winningHoles = []
  if(p1Turn){
    player = 'X'
    
  }
  p1Turn = !p1Turn
  if(p1Turn){
    infoBlurb.innerHTML = 'Player X\'s turn'
  }else{
    infoBlurb.innerHTML = 'Player O\'s turn'
  }

  //check down
  for(let i = rowNum+1; i<rowNum+4; i++){
    if(i>6) break
    let idHole = lastMove.id.substring(0, 3) + i

    if(!(document.getElementById(idHole).innerHTML === player )){
      winningHoles = []
      break
    }else{
      correctBoxes++
      winningHoles.push(document.getElementById(idHole))
    }
  }
  if(correctBoxes==3){
    winner = player
    gameOver(winningHoles, lastMove)
    return
  }else{
    correctBoxes = 0
  }

  //check horizontal
  for(let i = 1; i<5; i++){

    idHole = 'c' + i + 'r' + rowNum
    let firstHole = document.getElementById(idHole)
    if(firstHole.innerHTML === player){
      for(let j = i+1; j<i+4; j++){
        
        let nextHole = 'c' + j + 'r' + rowNum
        if(!(document.getElementById(nextHole).innerHTML === player)){
          winningHoles = []
          break
        }else{
          correctBoxes++
          winningHoles.push(document.getElementById(nextHole))
        }
      }
    }else{
      continue
    }
    if(correctBoxes==3){
      winner = player
      gameOver(winningHoles, firstHole)
      return
    }else{
      correctBoxes = 0
      winningHoles = []
    }
    
  }


  let upOneLeft = 'c' + (colNum-1) + 'r' + (rowNum-1)
  let upTwoLeft = 'c' + (colNum-2) + 'r' + (rowNum-2)
  let upThreeLeft = 'c' + (colNum-3) + 'r' + (rowNum-3)

  let upOneRight = 'c' + (colNum+1) + 'r' + (rowNum-1)
  let upTwoRight = 'c' + (colNum+2) + 'r' + (rowNum-2)
  let upThreeRight = 'c' + (colNum+3) + 'r' + (rowNum-3)

  let downOneLeft = 'c' + (colNum-1) + 'r' + (rowNum+1)
  let downTwoLeft = 'c' + (colNum-2) + 'r' + (rowNum+2)
  let downThreeLeft = 'c' + (colNum-3) + 'r' + (rowNum+3)

  let downOneRight = 'c' + (colNum+1) + 'r' + (rowNum+1)
  let downTwoRight = 'c' + (colNum+2) + 'r' + (rowNum+2)
  let downThreeRight = 'c' + (colNum+3) + 'r' + (rowNum+3)

  //check diagonol - up left
  if(colNum>2 && colNum<7 && rowNum>2 && rowNum<6){
    if(document.getElementById(upOneLeft).innerHTML === player){
      if(document.getElementById(upTwoLeft).innerHTML === player){
        if(document.getElementById(downOneRight).innerHTML === player){
          winner = player
          winningHoles.push(document.getElementById(upOneLeft))
          winningHoles.push(document.getElementById(upTwoLeft))
          winningHoles.push(document.getElementById(downOneRight))
          gameOver(winningHoles, lastMove)
          return
        }
      }
    }
  }
  if(colNum>3 && rowNum>3){
    if(document.getElementById(upOneLeft).innerHTML === player){
      if(document.getElementById(upTwoLeft).innerHTML === player){
        if(document.getElementById(upThreeLeft).innerHTML === player){
          winner = player
          winningHoles.push(document.getElementById(upOneLeft))
          winningHoles.push(document.getElementById(upTwoLeft))
          winningHoles.push(document.getElementById(upThreeLeft))
          gameOver(winningHoles, lastMove)
          return
        }
      }
    }
  }

  //check diagonol - up right
  if(colNum>1 && colNum<6 && rowNum>2 && rowNum<6){
    if(document.getElementById(upOneRight).innerHTML === player){
      if(document.getElementById(upTwoRight).innerHTML === player){
        if(document.getElementById(downOneLeft).innerHTML === player){
          winner = player
          winningHoles.push(document.getElementById(upOneRight))
          winningHoles.push(document.getElementById(upTwoRight))
          winningHoles.push(document.getElementById(downOneLeft))
          gameOver(winningHoles, lastMove)
          return
        }
      }
    }
  }
  if(colNum<5 && rowNum>3){
    if(document.getElementById(upOneRight).innerHTML === player){
      if(document.getElementById(upTwoRight).innerHTML === player){
        if(document.getElementById(upThreeRight).innerHTML === player){
          winner = player
          winningHoles.push(document.getElementById(upOneRight))
          winningHoles.push(document.getElementById(upTwoRight))
          winningHoles.push(document.getElementById(upThreeRight))
          gameOver(winningHoles, lastMove)
          return
        }
      }
    }
  }

  //check diagonol - down left
  if(colNum>2 && colNum<7 && rowNum>1 && rowNum<5){
    if(document.getElementById(downOneLeft).innerHTML === player){
      if(document.getElementById(downTwoLeft).innerHTML === player){
        if(document.getElementById(upOneRight).innerHTML === player){
          winner = player
          winningHoles.push(document.getElementById(downOneLeft))
          winningHoles.push(document.getElementById(downTwoLeft))
          winningHoles.push(document.getElementById(upOneRight))
          gameOver(winningHoles, lastMove)
          return
        }
      }
    }
  }
  if(colNum>3 && rowNum<4){
    if(document.getElementById(downOneLeft).innerHTML === player){
      if(document.getElementById(downTwoLeft).innerHTML === player){
        if(document.getElementById(downThreeLeft).innerHTML === player){
          winner = player
          winningHoles.push(document.getElementById(downOneLeft))
          winningHoles.push(document.getElementById(downTwoLeft))
          winningHoles.push(document.getElementById(downThreeLeft))
          gameOver(winningHoles, lastMove)
          return
        }
      }
    }
  }

  //check diagonol - down right
  if(colNum>1 && colNum<6 && rowNum>1 && rowNum<5){
    if(document.getElementById(downOneRight).innerHTML === player){
      if(document.getElementById(downTwoRight).innerHTML === player){
        if(document.getElementById(upOneLeft).innerHTML === player){
          winner = player
          winningHoles.push(document.getElementById(downOneRight))
          winningHoles.push(document.getElementById(downTwoRight))
          winningHoles.push(document.getElementById(upOneLeft))
          gameOver(winningHoles, lastMove)
          return
        }
      }
    }
  }
  if(colNum<5 && rowNum<4){
    if(document.getElementById(downOneRight).innerHTML === player){
      if(document.getElementById(downTwoRight).innerHTML === player){
        if(document.getElementById(downThreeRight).innerHTML === player){
          winner = player
          winningHoles.push(document.getElementById(downOneRight))
          winningHoles.push(document.getElementById(downTwoRight))
          winningHoles.push(document.getElementById(downThreeRight))
          gameOver(winningHoles, lastMove)
          return
        }
      }
    }
  }
  


}

function gameOver(arrayOfHoles, lastMove){
  console.log(winner +" wins")
  
  /*
  
  */

  console.log(lastMove)
  arrayOfHoles[0].style.color = "red"
  arrayOfHoles[1].style.color = "red"
  arrayOfHoles[2].style.color = "red"
  lastMove.style.color = "red"

  infoBlurb.innerHTML = winner + " wins!"

  let resetButton = document.getElementById('button')
  let list = document.getElementById('list')
  list.appendChild(resetButton)
  resetButton.style.display = 'block'
  

  
  
}

function resetGame(){
  for(let i = 1; i<8; i++){
    for(let j = 1; j<7; j++){
      let idNum = "c"+i+"r"+j
      document.getElementById(idNum).innerHTML = ''
    }
  }

  document.getElementById('button').style.display = 'none'

}