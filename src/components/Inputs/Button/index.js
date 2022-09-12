import React from 'react';
import {Button,Card} from '@material-ui/core';

const BasicButton = (props)=> {
    return (
      <Card className="text-box">
        <Button onClick={props.onClick} variant="contained" color={'primary'} > {props.name}</Button>
      </Card>
    );
  }
  
  export default BasicButton;