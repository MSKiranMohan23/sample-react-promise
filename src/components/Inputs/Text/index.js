import React from 'react';
import {Card,Input} from '@material-ui/core'

function Text(props) {
  const onChangeHandle = (e)=>{
    e.preventDefault();
    if(e.target.value !=='' && e.target.value !==null){
      props.onChangeHandler(e.target.value);
    }
  }
    return (
      <Card className="text-box">
        <Input type='text' name = {props.name} placeholder={props.placeHolder} onChange={ onChangeHandle}/>
      </Card>
    );
  }
  
  export default Text;