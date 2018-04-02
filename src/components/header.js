import React from 'react';
import {Wrapper, Title, Container} from '../style/style';
import Formulaire from './formulaire';


class Header extends React.Component {

  render() {

    return(
      <React.Fragment>
          <Wrapper>
              <Title>Welcome to Katalina's chatbox</Title>
          </Wrapper>
          <Container>
            <Formulaire chat1 />
            <Formulaire chat2 />
          </Container>
      </React.Fragment>
    )
  }
}

export default Header;
