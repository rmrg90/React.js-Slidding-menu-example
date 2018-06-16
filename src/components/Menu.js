import React, {Component} from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #FFE600;
  position: fixed;
  top: 0;
  left: 0;
  transition: transform .3s cubic-bezier(0,.52,0,1);
  overflow: ${props => !props.menuVisibility ? 'scroll' : 'overflow'};
  z-index: 1000;
  transform: translate3d(${props => !props.menuVisibility ? -100 : 0}vw, 0, 0);
`;
const H2 = styled.h2`
  color: #333;
  margin-left: 15px;
  text-decoration: none;
  
  &:hover{
    text-decoration: underline;
  }
`;

class Menu extends Component{

    render(){
        return(
            <Container onMouseDown={this.props.handleMouseDown} menuVisibility ={this.props.menuVisibility}>
                <H2>Home</H2>
                <H2>About</H2>
                <H2>Contact</H2>
                <H2>Search</H2>
            </Container>
        );
    }
}

export default Menu;