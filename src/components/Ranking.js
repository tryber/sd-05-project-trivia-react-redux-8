import React from 'react';
import { Link } from 'react-router-dom';
import { MD5 } from 'crypto-js';

class Ranking extends React.Component {
  render() {
    const totalRanking = JSON.parse(localStorage.getItem('ranking'));
    const orderedRanking = totalRanking.sort((a, b) => b.score - a.score);
    return (
      <div>
        <h1 data-testid="ranking-title">Here is the Great Trivia Ranking!</h1>
        <ol>
          {orderedRanking.map((player, index) => (
            <li>
              <img src={`https://www.gravatar.com/avatar/${MD5(player.email).toString()}`} alt="" />
              <p data-testid={`player-name-${index}`}>{player.name}</p>
              <p data-testid={`player-score-${index}`}>{player.score}</p>
            </li>
          ))}
        </ol>
        <Link to="/">
          <button type="button" data-testid="btn-go-home">
            Voltar para o inicio
          </button>
        </Link>
      </div>
    );
  }
}

export default Ranking;
