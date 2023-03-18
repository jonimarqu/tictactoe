// Store the board with its methods in a module
const Gameboard = (() => {
  let board = Array(9);
  const getBoard = () => board;
  const resetBoard = () => { board = Array(9) };
  const checkBoard = () => {
    const combs = [ // these are all winning combination
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    combs.forEach((comb) => {
      if (board[comb[0]] === board[comb[1]] &&
        board[comb[1]] === board[comb[2]] &&
        board[comb[0]] !== '') {
          return true;
        } else { return false }; // checkBoard returns a Boolean
    });
  }

  return { getBoard, resetBoard, checkBoard, };
})();

// A player factory which takes name and mark. Gives access to
// its name and mark through methods. This should be private 
const playerFactory = (name, mark) => ({ name, mark, });

// const getName = () => name;
// const getMark = () => mark;
// const setTile = (position) => { Gameboard.board[position] = mark }; // in this position, place this mark
// return { name, mark, }; // returning only methods keeps properties private
// };

// Store the players in their own object
const Players = {
  getName: () => this.name,
  getMark: () => this.mark,
  setTile: (position) => { Gameboard.board[position] = this.mark },
  goesFirst: (boolean) => Boolean(boolean),
};

Players.player1 = playerFactory('Tom', 'X');
Players.player2 = playerFactory('Sam', '0');

// This is the module to control the flow
const gameFlow = (() => {

  // Decide first player
  if (prompt('choose player1','Tom') === Players.player1.getName) {
    Players.player1.goesFirst(true);
  };

  // Set tile
  // Render
  // Check if there is a winner
  // Change player
  // REPEAT

})();





const player = (state) => ({
  getName: () => state.name,
  getMark: () => state.mark,
  setTile: (position) => { Gameboard.board[position] = state.mark },
  goesFirst: (boolean) => { boolean ? true : false },
});

const playerfactory = (name, mark) => {
  const state = {
    name,
    mark,
    isFirst: () => null,
  }
  return Object.assign(
    {},
    player(state)
  )
};

Players.Tom = playerfactory('Tom', 'X')