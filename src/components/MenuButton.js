import React, {PureComponent} from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: #96D9FF;
  margin-bottom: 20px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 10px solid #0065A6;
  outline: none;
  transition: all .2s cubic-bezier(0, 1.26, .8, 1.28);
  
  &:hover{
    background-color: #96D9FF;
    cursor: pointer;
    border-color: #003557;
    transform: scale(1.2,1.2);
  }
  
  &:active{
    border-color: #003557;
    background-color: #FFF;
  }
`;

class MenuButton extends PureComponent{
    render(){
        return(
            <Button onMouseDown={this.props.handleMouseDown}/>
        );
    }
}

export default MenuButton;