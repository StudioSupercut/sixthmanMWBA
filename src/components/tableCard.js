import React from 'react';
// import styled from 'styled-components'
import './tableCard.css'



const TableCard = props => (
	
		<tr>
			<td className="ladderPosition">{props.position}</td>
			<td className="ladderName">{props.teamName}</td>
			<td className="ladderStat">{props.win}</td>
			<td className="ladderStat">{props.loss}</td>
			<td className="ladderStat">{props.for}</td>
			<td className="ladderStat">{props.against}</td>
			<td className="ladderStat">{props.points}</td>
		</tr>
)


export default TableCard