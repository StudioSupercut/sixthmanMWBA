import React from 'react'
import styled from 'styled-components'
// import './gameCard.css'

const GameGroup = styled.div`
	padding: 10px;
	max-width: 375px;
	margin: 0 auto;
	height: 108px;
	background: rgba(255,255,255,1);
	border-radius: 10px;
	display: grid;
	grid-template-rows: repeat(4, 1fr);
	align-items: center;
	margin-bottom: 10px;
	transition: 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);

	&:hover {
		box-shadow: 0 15px 30px rgba(0,0,0,0.3);
  		transform: scale(1.05, 1.05);
	}
	p {
		margin:0;
	}
	h3 {
		margin:0;
	}
`

const GameDetails = styled.div`
	display: grid;
  	grid-template-columns: repeat(2, 1fr);
`
const GameTime = styled.div`
`
const GameVenue = styled.div`
	justify-self: end;
`
const GameSection = styled.div`
	display: grid;
	grid-template-columns: 24px auto;
	align-self: center;
`
const TeamName = styled.h3`
	font-size: 1em;

`
const GameSectionDuty = styled.div`
	align-self: end;
`
const DutyTeam = styled.p`
	color: #212B36;
	text-transform: uppercase;
	font-size: 13px;
	font-weight: 500;
	align-self: end;
	color: rgba(0,0,0,0.4);

`


const GameCard = props => (

	<GameGroup>
		<GameDetails>
            <GameTime><p>{props.gameTime}</p></GameTime>
            <GameVenue><p>NBISC 2</p></GameVenue>
        </GameDetails>
        <GameSection>
            <img src="../images/TEAM COLOURS_BLACK.png" alt="" width="18" height="18" />
            <TeamName>{props.homeTeam}</TeamName>
        </GameSection>
        <GameSection>
            <img src="../images/TEAM COLOURS_BLACK.png" alt="" width="18" height="18" />
            <TeamName>{props.awayTeam}</TeamName>
        </GameSection>               
        <GameSectionDuty>
            <DutyTeam>Duty: {props.dutyTeam}</DutyTeam>
        </GameSectionDuty>

    </GameGroup>

)



export default GameCard