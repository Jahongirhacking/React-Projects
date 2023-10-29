import { Component } from 'react';
import ButtonProps from './interface';
import './style.scss';

export default class Button extends Component<ButtonProps> {
  render() {
    const { handleClick, children, btnName } = this.props;
    return (
      <button className={`btn ${btnName}`} onClick={() => handleClick()}>
        {children || 'Send'}
      </button>
    );
  }
}
