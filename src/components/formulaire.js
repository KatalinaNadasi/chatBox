import React from 'react';
import {Box, Form, TitleLeft, Input} from '../style/style';

class Formulaire extends React.Component {

  render() {

    const title = this.props.chat1 ? 'Chat A' : 'Chat B';
    const border = {border: '2px solid black'};

    return(
      <Box>
        <Form>
          <h2>{title}</h2>
          <textarea style={border} name="message" cols="30" rows="10" required maxLength='140' />
          <div>
            <Input style={border}  type="text" />
            <button style={border} type="submit">OK</button>
          </div>
        </Form>
      </Box>
    )
  }
}

export default Formulaire;
