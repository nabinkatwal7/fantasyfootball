const pointCalculator = (playerStats) => {
  let points = 0;
  points += playerStats.goalsScored * 4;
  points += playerStats.assists * 3;
  if (playerStats.position === "GK" || playerStats.position === "DEF") {
    points += playerStats.cleanSheets * 4;
  }
  if (playerStats.position === "GK") {
    points += playerStats.saves * 1;
  }
  if (playerStats.position === "GK") {
    points += playerStats.penaltiesSaved * 5;
  }
  if (playerStats.position !== "GK") {
    points += playerStats.penaltiesMissed * -2;
  }
  points += playerStats.yellowCards * -1;
  points += playerStats.redCards * -3;
  if (playerStats.manOfTheMatch) {
    points += 5;
  }
  if (playerStats.rating >= 7.5) {
    points += 3;
  }
  if (playerStats.rating >= 8.0) {
    points += 5;
  }
  return points;
};


function calculateICTThreatIndex(shotsOnTarget, keyPasses, dribblesCompleted) {
  const ICTIndex =
    shotsOnTarget * 0.5 + keyPasses * 0.3 + dribblesCompleted * 0.2;
  return ICTIndex;
}
