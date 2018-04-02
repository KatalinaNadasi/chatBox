import React from 'react';
import {Wrapper, Title, Container} from '../style/style';


class Header extends React.Component {

  render() {

    return(
      <React.Fragment>
          <Wrapper>
              <Title>Welcome to Katalina's chatbox</Title>
          </Wrapper>
      </React.Fragment>
    )
  }
}

export default Header;
