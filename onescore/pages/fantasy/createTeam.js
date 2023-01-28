import React,{useState, useEffect} from 'react'

function createTeam() {
  return (
    <div className="create-team-container">
      <div>
        <h3>Pick Team</h3>
        <div>
          <p>You are picking the team for gameweek 22</p>
        </div>
        <div>
          <button>List View</button>
        </div>
        <div>
          <p>Starters</p>
          <table>
            <thead>
              <tr>
                <th></th>
                <th></th>
                <th>Pos</th>
                <th>GW</th>
                <th>Goals</th>
                <th>Assists</th>
                <th>Points</th>
              </tr>
              <tr>
                <td>Leicester</td>
                <td>Ward</td>
                <td>GKP</td>
                <td>1</td>
                <td>0</td>
                <td>0</td>
                <td>69</td>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </div>
  )
}

export default createTeam