import React from 'react';
import { Link } from 'gatsby';
import TableCard from '../components/tableCard';


import Layout from '../components/layout';
import SEO from '../components/seo';
import tableData from '../../2019_1_OMM2_table.json'


const TablePage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    
    <h1>Open Men • Monday • Division 2</h1>

    <div className="tableContainer">

    	<p>Competition Ladder</p>
    	<table class="ladderTable">
    		<tr>
				<td className="ladderHead">Teams</td>
				<td className="ladderHead"></td>
				<td className="ladderHead">W</td>
				<td className="ladderHead">L</td>
				<td className="ladderHead">F</td>
				<td className="ladderHead">A</td>
				<td className="ladderHead">PTS</td>
			</tr>

	            {tableData.teams.map(team => (
	              <TableCard
	                teamName={team.teamName}
	                position={team.position}
	                win={team.win}
	                loss={team.win}
	                points={team.points}
	                for={team.for}
	                against={team.against}
	              />
	            ))}
        </table>
    </div>



    
    <div className="footer">
        <Link to="/" className="primaryButton">Draw</Link>
        <Link to="/table/" className="primaryButton">Ladder</Link>
    </div>
  </Layout>
)

export default TablePage


