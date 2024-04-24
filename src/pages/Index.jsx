// Complete the Index page component here
// Use chakra-ui
import { Link } from 'react-router-dom';
import { Button } from '@chakra-ui/react';

const Index = () => {
  return (
    <Button as={Link} to="/tictactoe" colorScheme="teal" variant="outline">
      Play Tic-Tac-Toe
    </Button>
  );
};

export default Index;