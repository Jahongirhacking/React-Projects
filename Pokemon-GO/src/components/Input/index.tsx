import { Component } from 'react';
import InputProps from './interface';
import './style.scss';

export default class Input extends Component<InputProps> {
  render() {
    const { inputValue, setInputValue, placeholder } = this.props;
    return (
      <div className="input-container">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          placeholder={placeholder || 'Type...'}
        />
        {inputValue !== inputValue.trim() && (
          <small className="input-error">Incorrect Input Value</small>
        )}
      </div>
    );
  }
}
