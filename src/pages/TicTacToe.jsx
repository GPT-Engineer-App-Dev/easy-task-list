import React, { useState } from 'react';
import { Box, Button, Grid } from '@chakra-ui/react';

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = (index) => {
    const newBoard = [...board];
    if (newBoard[index] || calculateWinner(board)) {
      return;
    }
    newBoard[index] = xIsNext ? 'X' : 'O';
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  };

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const winner = calculateWinner(board);
  const status = winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? 'X' : 'O'}`;

  return (
    <Box p={4}>
      <Box mb={4}>{status}</Box>
      <Grid templateColumns="repeat(3, 1fr)" gap={2}>
        {board.map((cell, index) => (
          <Button key={index} onClick={() => handleClick(index)} p={8} fontSize="2xl">
            {cell}
          </Button>
        ))}
      </Grid>
      {winner && (
        <Button mt={4} onClick={() => setBoard(Array(9).fill(null))}>
          Restart Game
        </Button>
      )}
    </Box>
  );
};

export default TicTacToe;