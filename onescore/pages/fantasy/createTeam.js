import React, { useState, useEffect } from "react";
import SoccerLineUp from "react-soccer-lineup";

function createTeam() {
  const homeTeamColor = "050101";
  const homeTeamNumberColor = "ffffff";
  const homeGoalkeeperColor = "ffffff";
  const homeGoalkeeperNumberColor = '050101';
  const showHomeTeam = true
  const homeTeamClickable= true

  const buildHomeTeam = () => {
    return {
      squad: {
        gk: {
          number: 1,
          name: 'De Gea',
          color: `#${homeGoalkeeperColor}`,
          numberColor: `#${homeGoalkeeperNumberColor}`,
          onClick: homeTeamClickable
            ? () => alert(`Home team - Player ${1}`)
            : undefined,
        },
        df: [
          {
            number: 2,
            onClick: homeTeamClickable
              ? () => alert(`Home team - Player ${2}`)
              : undefined,
          },
          {
            number: 4,
            onClick: homeTeamClickable
              ? () => alert(`Home team - Player ${4}`)
              : undefined,
          },
          {
            number: 5,
            onClick: homeTeamClickable
              ? () => alert(`Home team - Player ${5}`)
              : undefined,
          },
          {
            number: 3,
            onClick: homeTeamClickable
              ? () => alert(`Home team - Player ${3}`)
              : undefined,
          },
        ],
        cm: [
          {
            number: 6,
            onClick: homeTeamClickable
              ? () => alert(`Home team - Player ${6}`)
              : undefined,
          },
          {
            number: 8,
            onClick: homeTeamClickable
              ? () => alert(`Home team - Player ${8}`)
              : undefined,
          },
        ],
        cam: [
          {
            number: 11,
            onClick: homeTeamClickable
              ? () => alert(`Home team - Player ${11}`)
              : undefined,
          },
          {
            number: 10,
            onClick: homeTeamClickable
              ? () => alert(`Home team - Player ${10}`)
              : undefined,
          },
          {
            number: 7,
            onClick: homeTeamClickable
              ? () => alert(`Home team - Player ${7}`)
              : undefined,
          },
        ],
        fw: [
          {
            number: 9,
            onClick: homeTeamClickable
              ? () => alert(`Home team - Player ${9}`)
              : undefined,
          },
        ],
      },
      style: {
        color: `#${homeTeamColor}`,
        numberColor: `#${homeTeamNumberColor}`,
      },
    };
  };

  return (
    <div className="createteam-container">
      <div className="teaminfo">
        <h1>Football FC</h1>
        <h3>username</h3>
        <h3>Team Value: 100.0M</h3>
        <h3>Remaining in Bank: 0.0M</h3>
      </div>
      <div className="pitch container">
        <SoccerLineUp
          size={"big"}
          color={"green"}
          pattern={"squares"}
          homeTeam={showHomeTeam?buildHomeTeam():undefined}
          
        />
        <div className="bench">
          <ol>
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
      </div>
    </div>
  );
}

export default createTeam;
