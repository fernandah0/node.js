const board = document.getElementById('board');
const cells = document.querySelectorAll('.cell');
const restartButton = document.getElementById('restartButton');

let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameOver = false;

// Função para verificar o vencedor
const checkWinner = () => {
  const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Linhas
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Colunas
    [0, 4, 8], [2, 4, 6] // Diagonais
  ];

  for (let combo of winningCombos) {
    const [a, b, c] = combo;
    if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
      alert(`${gameBoard[a]} venceu!`);
      gameOver = true;
      return;
    }
  }

  if (!gameBoard.includes('')) {
    alert('Empate!');
    gameOver = true;
  }
};

// Função para reiniciar o jogo
const restartGame = () => {
  gameBoard = ['', '', '', '', '', '', '', '', ''];
  gameOver = false;
  cells.forEach(cell => cell.textContent = '');
  currentPlayer = 'X';
};

// Adiciona o evento de clique nas células
cells.forEach(cell => {
  cell.addEventListener('click', (e) => {
    const cellIndex = e.target.getAttribute('data-cell');

    if (gameBoard[cellIndex] === '' && !gameOver) {
      gameBoard[cellIndex] = currentPlayer;
      e.target.textContent = currentPlayer;
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      checkWinner();
    }
  });
});

// Adiciona evento de clique no botão de reiniciar
restartButton.addEventListener('click', restartGame);
