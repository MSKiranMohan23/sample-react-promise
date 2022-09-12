import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import { Card, Box, Grid, } from '@material-ui/core'
import Text from '../../Inputs/Text';
import Password from '../../Inputs/Password';
import BasicButton from '../../Inputs/Button';
import Header from '../../Pages/Header';

function Signin() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const updateUserName = (userName = '') => {
    if (userName !== '') {
      setUserName(userName);
    }
  }
  const updateUserPassword = (password = '')=>{
    if(password !== ''){
        setPassword(password);
    }
} 

  const onClickHandler = () => {
    let newPromise = new Promise(function (resolve, reject) {
      // "Producing Code" (May take some time)
      if (sessionStorage.getItem('userName') !== null && sessionStorage.getItem('userName') === userName) {
        resolve(userName); // when successful
      } else {
        reject("error");  // when error
      }
    });

    newPromise.then(
      (userName) => {
        window !== null && window.alert("Successfull Logged in " + userName);
        setTimeout(() => {
          navigate('/home');
        }, 1000);
      },
      (Error) => {
        window !== null && window.alert(Error);
      }
    )
  }

  const navigateRegister = (e) => {
    e.preventDefault();
    navigate('/register')
  }
  return (
    <Box>
      <Header name ={'Login here'} />
      <Grid>
        <Card className="forms">
          <Text name={'username'} placeHolder={'Username'} onChangeHandler={updateUserName} />
          <Password name={'password'} placeHolder={'Password'} onChangeHandler={updateUserPassword} />

          <BasicButton onClick={onClickHandler} name={'Login'} />
          <BasicButton onClick={navigateRegister} name={'Register'} />
        </Card>
      </Grid>
    </Box>
  );
}

export default Signin;