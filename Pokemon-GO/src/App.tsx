import { Component, ReactNode } from 'react';
import Header from './layouts/Header';
import Main from './layouts/Main';

type AppState = {
  inputValue: string;
  pageNumber: number;
  isPending: boolean;
  isError: boolean;
};

export default class App extends Component {
  state: AppState = {
    inputValue: '',
    pageNumber: 0,
    isPending: false,
    isError: false,
  };

  setInputValue = (value: string) => {
    this.setState({ inputValue: value });
    localStorage.setItem('searchedName', value);
  };

  setPageNumber = (value: number) => {
    this.setState({ pageNumber: value });
    localStorage.setItem('pageNumber', value.toString());
  };

  setIsPending = (value: boolean) => {
    this.setState({ isPending: value });
  };

  setIsError = (value: boolean) => {
    this.setState({ isError: value });
  };

  componentDidMount(): void {
    // Map searched name
    const searchedName = localStorage.getItem('searchedName');
    if (searchedName) this.setInputValue(searchedName);
    else this.setInputValue('');
    // Map page number
    const pageNumber = localStorage.getItem('pageNumber');
    if (pageNumber) this.setPageNumber(parseInt(pageNumber));
    else this.setPageNumber(0);
  }

  render(): ReactNode {
    return (
      <>
        <Header
          inputValue={this.state.inputValue}
          setInputValue={this.setInputValue}
          setPageNumber={this.setPageNumber}
          pageNumber={this.state.pageNumber}
          setIsPending={this.setIsPending}
          setIsError={this.setIsError}
        />
        <Main
          inputValue={this.state.inputValue}
          pageNumber={this.state.pageNumber}
          isPending={this.state.isPending}
          setIsPending={this.setIsPending}
          isError={this.state.isError}
          setIsError={this.setIsError}
        />
      </>
    );
  }
}
