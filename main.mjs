function getKnightMoves([x, y]) {
    const moves = [
      [x + 2, y + 1], [x + 1, y + 2],
      [x - 1, y + 2], [x - 2, y + 1],
      [x - 2, y - 1], [x - 1, y - 2],
      [x + 1, y - 2], [x + 2, y - 1],
    ];
  
    return moves.filter(([nx, ny]) => nx >= 0 && ny >= 0 && nx < 8 && ny < 8);
  }
  

function knightMoves(start, end) {
const queue = [];
const visited = new Set();

// Start with the initial position and path
queue.push({ pos: start, path: [start] });
visited.add(start.toString());

while (queue.length > 0) {
    const { pos, path } = queue.shift();

    if (pos[0] === end[0] && pos[1] === end[1]) {
    return path;
    }

    const nextMoves = getKnightMoves(pos);
    for (const move of nextMoves) {
    const key = move.toString();
    if (!visited.has(key)) {
        visited.add(key);
        queue.push({ pos: move, path: [...path, move] });
    }
    }
}

return [];
}
  
console.log(knightMoves([0, 0], [3, 3]));
console.log(knightMoves([0, 0], [7, 7]));
console.log(knightMoves([0, 0], [0, 0]));