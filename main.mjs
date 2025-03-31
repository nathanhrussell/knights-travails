function getKnightMoves([x, y]) {
    const moves = [
        [x + 2, y + 1], [x + 1, y + 2],
        [x - 1, y + 2], [x - 2, y + 1],
        [x - 2, y - 1], [x - 1, y - 2],
        [x + 1, y - 2], [x + 2, y + 1],
    ];

    return moves.filter(([nx, ny]) => nx >= 0 && ny >= 0 && nx < 8 && ny < 8);
}