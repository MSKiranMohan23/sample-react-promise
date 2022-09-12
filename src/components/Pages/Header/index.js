import React from 'react';

const Header = (props)=>{
    return(
        <header className="App-header">
        {props.name}
      </header>
    )
}

export default Header;