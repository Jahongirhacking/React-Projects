import { Component } from 'react';
import { IPokemonLocal } from './interface';
import './style.scss';

export default class Card extends Component<IPokemonLocal> {
  render() {
    const { pokemonName, imgUrl, abilities, height } = this.props;
    return (
      <article className="card">
        <img src={imgUrl} alt="pokemon image" />
        <h2>{pokemonName}</h2>
        <p className="abilities">
          Abilities: <b>{abilities.join(', ')}</b>
        </p>
        <p className="height">
          Height: <b>{height}</b>
        </p>
      </article>
    );
  }
}
