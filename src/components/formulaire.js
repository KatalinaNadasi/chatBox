import React from 'react';
import {Box} from '../style/style';
import Message from './message';

class Formulaire extends React.Component {

    displayMessage = event => {
      event.preventDefault();
      const message = this.message.value;
      // catch props from the parent
      this.props.addMessage(message);
      // reset
      this.messageForm.reset();
    }

  render() {

    const title = this.props.chat1 ? 'Chat A' : 'Chat B';
    const inputStyle = {
        border: '2px solid black',
        width: '75%',
        marginRight: '0.4rem',
    };
    const border = {border: '2px solid black'}


    return(
      <Box>
        <form
            onSubmit={e => this.displayMessage(e)}
            ref={input => this.messageForm = input}
        >
          <h2>{title}</h2>
          <Message />
          <div>
            <input
                style={inputStyle}
                type="text"
                ref={input => {this.message = input}}
            />
            <button style={border} type="submit" >OK</button>
          </div>
        </form>
      </Box>
    )
  }
}

export default Formulaire;
