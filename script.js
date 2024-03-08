//Function that returns the valid moves from a given position
function getValidMoves(pos) {
  const moves = [
    [2, 1],
    [2, -1],
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
    [-2, 1],
    [-2, -1],
  ];

  let validMoves = [];

  moves.forEach((move) => {
    let x = move[0] + pos[0];
    let y = move[1] + pos[1];
    if (x > -1 && x < 8 && y > -1 && y < 8) {
      validMoves.push([x, y]);
    }
  });

  return validMoves;
}

//Factory fucntion for creating nodes(different moves on the board)
function node(movesToGetTo, pos) {
  return {
    movesToGetTo: movesToGetTo,
    pos: pos,
  };
}

//Function that finds the shortes path from a start pos to a end pos
//using the bfs traversal method.
function knightMoves(start, end) {
  let queue = [];
  queue.push(node([start], start));

  while (queue[0]) {
    let currentMove = queue.shift();

    if (currentMove.pos[0] === end[0] && currentMove.pos[1] === end[1]) {
      printResult(currentMove.movesToGetTo);
      return;
    }

    let validMoves = getValidMoves(currentMove.pos);

    validMoves.forEach((move) => {
      queue.push(node(currentMove.movesToGetTo.concat([move]), move));
    });
  }

  return null;
}

function printResult(arr) {
  console.log(`You did it in ${arr.length - 1} moves! Here is your path:`);
  arr.forEach((element) => {
    console.log(element);
  });
}
knightMoves([0, 0], [7, 4]);
