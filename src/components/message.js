import React from 'react';


class Message extends React.Component {

  render() {
    const border = {border: '2px solid black'};

    return(
      <React.Fragment>
        <textarea style={border} name="message" cols="30" rows="10" required maxLength='140' >
        </textarea>
        <p>Yo</p>
      </React.Fragment>
    )
  }
}

export default Message;
