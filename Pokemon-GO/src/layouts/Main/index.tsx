import { Component } from 'react';
import Card from '../../components/Card';
import { fetchLimitedPokemons } from '../../services/api';
import { IPokemonLocal } from '../../components/Card/interface';
import './style.scss';

type MainProp = {
  inputValue: string;
  pageNumber: number;
  isPending: boolean;
  setIsPending: (value: boolean) => void;
  setIsError: (value: boolean) => void;
  isError: boolean;
};

type MainState = {
  pokemonsList: Array<IPokemonLocal>;
};

export default class Main extends Component<MainProp> {
  state: MainState = {
    pokemonsList: [],
  };

  handleEffect = async () => {
    try {
      this.props.setIsError(false);
      this.props.setIsPending(true);
      const { pokemons } = await fetchLimitedPokemons(
        this.props.pageNumber,
        this.props.setIsError
      );
      this.setState({ pokemonsList: pokemons });
    } catch (err) {
      console.error(err);
    } finally {
      this.props.setIsPending(false);
    }
  };

  componentDidMount(): void {
    this.handleEffect();
  }

  componentDidUpdate(prevProps: MainProp): void {
    if (prevProps.pageNumber !== this.props.pageNumber) this.handleEffect();
  }

  handleFilter = (pokemon: IPokemonLocal) => {
    const inputValue = this.props.inputValue;
    return (
      inputValue === inputValue.trim() &&
      pokemon.pokemonName
        .toLowerCase()
        .includes(this.props.inputValue.toLowerCase())
    );
  };

  render() {
    const Cards = this.state.pokemonsList
      .filter(this.handleFilter)
      .map((pokemon) => (
        <Card
          key={pokemon.id}
          pokemonName={pokemon.pokemonName}
          imgUrl={pokemon.imgUrl}
          abilities={pokemon.abilities}
          height={pokemon.height}
        />
      ));

    return (
      <main className="main">
        <section className="card-container">
          {this.props.isError ? (
            // If there is error
            <div className="status-info error">Error Happened</div>
          ) : this.props.isPending ? (
            // If it's pending
            <div className="status-info fetching">Fetching...</div>
          ) : Cards.length === 0 ? (
            // If Cards is empty
            <div style={{ marginTop: '50px' }}>Nothing found for now...</div>
          ) : (
            Cards
          )}
        </section>
      </main>
    );
  }
}
