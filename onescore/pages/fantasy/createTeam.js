import React, { useState, useEffect } from "react";
import SoccerLineUp from "react-soccer-lineup";

function createTeam() {
  const homeTeamClickable = true;
  let totalCost = 0;
  const [playerData, setPlayerData] = useState(null);

  useEffect(() => {
    async function fetchPlayerData() {
      const response = await fetch(
        "https://fantasy.premierleague.com/api/bootstrap-static/"
      );
      const data = await response.json();
      setPlayerData(data.elements);
    }
    fetchPlayerData();
  }, []);

  function mapPlayerDataToPositions(playerData) {
    const goalkeeper = [];
    const defenders = [];
    const midfielders = [];
    const forwards = [];

    playerData.map((player) => {
      console.log(player)
      switch (player.element_type) {
        case 1:
          goalkeeper.push({
            number: player.now_cost / 10,
            name: player.web_name,
            onClick: homeTeamClickable
              ? () => alert(`${player.web_name}`)
              : undefined,
          });
          totalCost = totalCost+player.now_cost/10
          break;
        case 2:
          if(defenders.length>3){
            break
          }else{
            defenders.push({
              number: player.now_cost / 10,
              name: player.web_name,
              onClick: homeTeamClickable
                ? () => alert(`${player.web_name}`)
                : undefined,
            });
            totalCost = totalCost + player.now_cost / 10;
          }
          break;
        case 3:
          if(midfielders.length>2){
            break
          }else{
            midfielders.push({
              number: player.now_cost / 10,
              name: player.web_name,
              onClick: homeTeamClickable
                ? () => alert(` ${player.web_name}`)
                : undefined,
            });
            totalCost = totalCost + player.now_cost / 10;
          }
          break;
        case 4:
          if(forwards.length>2){
            break;
          }else{
            forwards.push({
              number: player.now_cost / 10,
              name: player.web_name,
              onClick: homeTeamClickable
                ? () => alert(`${player.web_name}`)
                : undefined,
            });
            totalCost = totalCost + player.now_cost / 10;
          }
          break;
        default:
          break;
      }
    });
    return {
      squad: {
        gk: goalkeeper[0],
        df: defenders,
        cm: midfielders,
        fw: forwards,
      },
    };
  }

  return (
    <div className="createteam-container">
      <div className="teaminfo">
        <h1>Football FC</h1>
        <h3>username</h3>
        <h3>Team Value: {totalCost}M</h3>
        <h3>Remaining in Bank: 0.0M</h3>
      </div>
      <div className="pitch-container">
        {playerData ? (
          <SoccerLineUp
            size={"big"}
            color={"#567d46"}
            pattern={"squares"}
            homeTeam={mapPlayerDataToPositions(playerData)}
          />
        ) : (
          <p>Loading player data...</p>
        )}
        {/* <SoccerLineUp
          size={"big"}
          color={"#567d46"}
          pattern={"squares"}
          // homeTeam={mapPlayerDataToPositions(playerData)}
          homeTeam={showHomeTeam ? buildHomeTeam() : undefined}
        /> */}
        <div className="bench">
          <h2>Substitutes</h2>
          <ol className="subs-bench">
            <li>
              <h3>GK SUB</h3>
            </li>
            <li>
              <h3>DEF SUB</h3>
            </li>
            <li>
              <h3>MID SUB</h3>
            </li>
            <li>
              <h3>ATT SUB</h3>
            </li>
          </ol>
        </div>
        <div className="create-team-btns">
          <button className="btn-98">Create Team</button>
        </div>
      </div>
    </div>
  );
}

export default createTeam;
