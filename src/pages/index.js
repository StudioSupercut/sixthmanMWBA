import React from 'react';
import { Link } from 'gatsby';
import GameCard from '../components/gameCard';

import Layout from '../components/layout';
// import Image from "../components/image"
import SEO from '../components/seo';
import drawdata from '../../2019_1_OMM2.json'

const IndexPage = () => (
  <Layout>
    
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    
    <h1>Open Men • Monday • Division 2</h1>

    <div className="drawContainer">

      {drawdata.rounds.map(round => (
          <div className="drawRound">         
            <h2 className="roundDate">Round {round.roundNo}</h2>
            {round.games.map(game => (
              <GameCard
                homeTeam={game.homeTeam}
                awayTeam={game.awayTeam}
                gameTime={game.time}
                dutyTeam={game.dutyTeam}
              />
            ))}
        </div>
      ))}

    </div>


    <div className="footer">
        <Link to="/page-2/" className="primaryButton">Draw</Link>
        <Link to="/table/" className="primaryButton">Ladder</Link>
    </div>

  </Layout>
)

export default IndexPage
