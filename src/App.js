import React, { Component } from 'react';
import Header from './components/header';
import Formulaire from './components/formulaire';
import {Container} from './style/style';

class App extends Component {

  state={
    messages: {},
  }

  addMessage = message => {
    const messages = {...this.state.messages};
    // const timestamp = Date.now;
    // messages[`message-${timestamp}`] = message;
    this.setState({messages});
  };

  render() {
    return (
      <React.Fragment>
          <Header />
          <Container>
            <Formulaire chat1 addMessage={this.addMessage} />
            <Formulaire chat2 addMessage={this.addMessage} />
          </Container>
      </React.Fragment>
    );
  }
}

export default App;
