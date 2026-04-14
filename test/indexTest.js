describe('Basketball Stats', function () {
  
  describe('numPointsScored', function () {
    it('should return points scored by a player', function () {
      expect(numPointsScored('Alan Anderson')).to.equal(22);
      expect(numPointsScored('Ben Gordon')).to.equal(33);
    });
  });

  describe('shoeSize', function () {
    it('should return shoe size of a player', function () {
      expect(shoeSize('Alan Anderson')).to.equal(16);
      expect(shoeSize('Ben Gordon')).to.equal(15);
    });
  });
  
  describe('teamColors', function () {
    it('should return team colors', function () {
      expect(teamColors('Brooklyn Nets')).to.deep.equal(['Black', 'White']);
      expect(teamColors('Charlotte Hornets')).to.deep.equal(['Turquoise', 'Purple']);
    });
  });
  
  describe('teamNames', function () {
    it('should return team names', function () {
      expect(teamNames()).to.deep.equal(['Brooklyn Nets', 'Charlotte Hornets']);
    });
  });

  describe('playerNumbers', function () {
    it('should return player numbers of a team', function () {
      expect(playerNumbers('Brooklyn Nets')).to.deep.equal([0, 30, 11, 1, 31]);
      expect(playerNumbers('Charlotte Hornets')).to.deep.equal([4, 0, 2, 8, 33]);
    });
  });

  describe('playerStats', function () {
    it('should return stats of a player', function () {
      expect(playerStats('Alan Anderson')).to.deep.equal({
        number: 0,
        shoe: 16,
        points: 22,
        rebounds: 12,
        assists: 12,
        steals: 3,
        blocks: 1,
        slamDunks: 1
      });

      expect(playerStats('Ben Gordon')).to.deep.equal({
        number: 8,
        shoe: 15,
        points: 33,
        rebounds: 3,
        assists: 2,
        steals: 1,
        blocks: 1,
        slamDunks: 0
      });
    });
  });

  describe('bigShoeRebounds', function () {
    it('should return number of rebounds for the player with the biggest shoe', function () {
      expect(bigShoeRebounds()).to.equal(12);
    });
  });
});

function gameObject() {
  return {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
          number: 0, shoe: 16, points: 22, rebounds: 12, assists: 12, steals: 3, blocks: 1, slamDunks: 1,
        },
        "Reggie Evens": {
          number: 30, shoe: 14, points: 12, rebounds: 12, assists: 12, steals: 12, blocks: 12, slamDunks: 7,
        },
        "Brook Lopez": {
          number: 11, shoe: 17, points: 17, rebounds: 19, assists: 10, steals: 3, blocks: 1, slamDunks: 15,
        },
        "Mason Plumlee": {
          number: 1, shoe: 19, points: 26, rebounds: 12, assists: 6, steals: 3, blocks: 8, slamDunks: 5,
        },
        "Jason Terry": {
          number: 31, shoe: 15, points: 19, rebounds: 2, assists: 2, steals: 4, blocks: 11, slamDunks: 1,
        },
      },
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          number: 4, shoe: 18, points: 10, rebounds: 1, assists: 1, steals: 2, blocks: 7, slamDunks: 2,
        },
        "Bismack Biyombo": {
          number: 0, shoe: 16, points: 12, rebounds: 4, assists: 7, steals: 7, blocks: 15, slamDunks: 10,
        },
        "DeSagna Diop": {
          number: 2, shoe: 14, points: 24, rebounds: 12, assists: 12, steals: 4, blocks: 5, slamDunks: 5,
        },
        "Ben Gordon": {
          number: 8, shoe: 15, points: 33, rebounds: 3, assists: 2, steals: 1, blocks: 1, slamDunks: 0,
        },
        "Brendan Hayword": {
          number: 33, shoe: 15, points: 6, rebounds: 12, assists: 12, steals: 22, blocks: 5, slamDunks: 12,
        },
      },
    },
  };
}

// Helper to loop all players
function allPlayers() {
  const game = gameObject();
  return {
    ...game.home.players,
    ...game.away.players
  };
}

// 1. Points scored
function numPointsScored(playerName) {
  const players = allPlayers();
  return players[playerName].points;
}

// 2. Shoe size
function shoeSize(playerName) {
  const players = allPlayers();
  return players[playerName].shoe;
}

// 3. Team colors
function teamColors(teamName) {
  const game = gameObject();
  if (game.home.teamName === teamName) return game.home.colors;
  if (game.away.teamName === teamName) return game.away.colors;
}

// 4. Team names
function teamNames() {
  const game = gameObject();
  return [game.home.teamName, game.away.teamName];
}

// 5. Player numbers
function playerNumbers(teamName) {
  const game = gameObject();
  let team;

  if (game.home.teamName === teamName) {
    team = game.home.players;
  } else {
    team = game.away.players;
  }

  return Object.values(team).map(player => player.number);
}

// 6. Player stats
function playerStats(playerName) {
  const players = allPlayers();
  return players[playerName];
}

// 7. Big shoe rebounds
function bigShoeRebounds() {
  const players = allPlayers();
  let biggestShoe = 0;
  let rebounds = 0;

  for (let player in players) {
    if (players[player].shoe > biggestShoe) {
      biggestShoe = players[player].shoe;
      rebounds = players[player].rebounds;
    }
  }

  return rebounds;
}