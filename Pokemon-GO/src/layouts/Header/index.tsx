import { Component } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import InputProps from '../../components/Input/interface';
import { fetchData } from '../../services/api';
import './style.scss';

interface HeaderProps extends InputProps {
  pageNumber: number;
  setPageNumber: (value: number) => void;
  setIsPending: (value: boolean) => void;
  setIsError: (value: boolean) => void;
}

export default class Header extends Component<HeaderProps> {
  render() {
    const {
      inputValue,
      setInputValue,
      setPageNumber,
      pageNumber,
      setIsPending,
    } = this.props;

    const handlePrevPagination = () => {
      setPageNumber(pageNumber - 1);
    };

    const handleNextPagination = () => {
      setPageNumber(pageNumber + 1);
    };

    const fetchFakeData = async () => {
      try {
        this.props.setIsError(false);
        setIsPending(true);
        // Pending Begins
        fetchData('somefakedata.hack/api', this.props.setIsError);
      } catch (err) {
        this.props.setIsError(true);
        console.error(err);
      } finally {
        setIsPending(false);
      }
    };

    return (
      <header className="header">
        <nav className="nav header__search">
          <Input
            inputValue={inputValue}
            setInputValue={setInputValue}
            placeholder={'Pokemon Name...'}
          />
          <section className="btn-container">
            {pageNumber > 0 && (
              <Button handleClick={handlePrevPagination}>Prev</Button>
            )}
            {pageNumber < 10 && (
              <Button handleClick={handleNextPagination}>Next</Button>
            )}
            <Button handleClick={fetchFakeData} btnName="danger-bg">
              Error
            </Button>
          </section>
        </nav>
      </header>
    );
  }
}
