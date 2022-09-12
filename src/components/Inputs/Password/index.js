import React from 'react';
import {Card, Input} from '@material-ui/core'

function Password(props) {
    const onChangeHandle = (e)=>{
        e.preventDefault();
        if(e.target.value !=='' && e.target.value !==null){
          props.onChangeHandler(e.target.value);
        }
      }
    return (
      <Card className="text-box">
        <Input type='password' name = {props.name} placeholder={props.placeHolder} onChange={ onChangeHandle}/>
      </Card>
    );
  }
  
  export default Password;