import React from 'react';
import {Box, Form} from '../style/style';
import Message from './message';

class Formulaire extends React.Component {

    displayMessage = event => {
      event.preventDefault();
      let message = this.message.value;
      console.log({message})
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
      <Box onSubmit={e => this.displayMessage(e)}>
        <Form>
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
        </Form>
      </Box>
    )
  }
}

export default Formulaire;
