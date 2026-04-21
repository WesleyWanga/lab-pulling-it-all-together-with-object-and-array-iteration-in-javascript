function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismack Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        },
    };
}

// Helper to loop all players
function allPlayers() {
  const game = gameObject();
  const combinedPlayers = {};

  // Add home players
  for (let player in game.home.players) {
    combinedPlayers[player] = game.home.players[player];
  }

  // Add away players
  for (let player in game.away.players) {
    combinedPlayers[player] = game.away.players[player];
  }

  return combinedPlayers;
}

//  Points scored
function numPointsScored(playerName) {
  const players = allPlayers();
  return players[playerName].points;
}

//  Shoe size
function shoeSize(playerName) {
  const players = allPlayers();
  return players[playerName].shoe;
}

//  Team colors
function teamColors(teamName) {
  const game = gameObject();
  if (game.home.teamName === teamName) return game.home.colors;
  if (game.away.teamName === teamName) return game.away.colors;
}

//  Team names
function teamNames() {
  const game = gameObject();
  return [game.home.teamName, game.away.teamName];
}

//  Player numbers
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

//  Player stats
function playerStats(playerName) {
  const players = allPlayers();
  return players[playerName];
}

//  Big shoe rebounds
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
//  Player with most points
function mostPointsScored() {
  const players = allPlayers();
  let maxPoints = 0;
  let topPlayer = "";

  for (let player in players) {
    if (players[player].points > maxPoints) {
      maxPoints = players[player].points;
      topPlayer = player;
    }
  }

  return topPlayer;
}

//  Winning team
function winningTeam() {
  const game = gameObject();

  let homePoints = 0;
  let awayPoints = 0;

  for (let player in game.home.players) {
    homePoints += game.home.players[player].points;
  }

  for (let player in game.away.players) {
    awayPoints += game.away.players[player].points;
  }

  return homePoints > awayPoints
    ? game.home.teamName
    : game.away.teamName;
}

//  Player with longest name
function playerWithLongestName() {
  const players = allPlayers();
  let longestName = "";

  for (let player in players) {
    if (player.length > longestName.length) {
      longestName = player;
    }
  }

  return longestName;
}

//  Does longest name have most steals?
function doesLongNameStealATon() {
  const players = allPlayers();

  // Find longest name
  let longestName = playerWithLongestName();

  // Find max steals
  let maxSteals = 0;
  let topStealer = "";

  for (let player in players) {
    if (players[player].steals > maxSteals) {
      maxSteals = players[player].steals;
      topStealer = player;
    }
  }

  return longestName === topStealer;
}


