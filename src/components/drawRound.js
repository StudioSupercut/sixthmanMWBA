import React from 'react'
import GameCard from "../components/gameCard"


const DrawRound = props => (

	<div className="drawRound">         
            <h2 className="roundDate">Round {props.roundNo}</h2>
            <h2 className="roundDate">Games: {props.games}</h2>
            
            <GameCard
              homeTeam="Team A"
              awayTeam="Team B"
              gameTime="7:50 PM"
              dutyTeam="Team C"
            />
            <GameCard
              homeTeam="Team A"
              awayTeam="Team B"
              gameTime="8:40 PM"
              dutyTeam="Team C"
            />
            <GameCard
              homeTeam="Team A"
              awayTeam="Team B"
              gameTime="9:30 PM"
              dutyTeam="Team C"
            />


    </div>

    

	)

export default DrawRound