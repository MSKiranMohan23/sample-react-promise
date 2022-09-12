import React,{useState} from 'react';
import { useNavigate } from "react-router-dom";
import { Card, Box, Grid, } from '@material-ui/core'
import Text from './../../Inputs/Text';
import Password from '../../Inputs/Password';
import BasicButton from '../../Inputs/Button';
import Header from '../../Pages/Header';
const Register = () => {
    const navigate = useNavigate();
    const [userName,setUserName] = useState('');
    const [password,setPassword] = useState('');
    const [email, setUserEmail] = useState('');
    const onClickHandler = () => {
        console.log('userName', userName);
        console.log('password',password);
        console.log('email',email)

        let newPromise = new Promise(function(resolve, reject) {
            // "Producing Code" (May take some time)
            if(typeof sessionStorage !== 'undefined' && sessionStorage !== null ){
                sessionStorage.setItem("userName",userName);
                sessionStorage.setItem("password",password);
                sessionStorage.setItem("email",email);

            }
            if(sessionStorage.getItem('userName')!== null && sessionStorage.getItem('userName') === userName){
              resolve(userName); // when successful
            }else{
              reject("error");  // when error
            }
            });

            newPromise.then(
                (userName)=>{
                    window !== null && window.alert("Successfull registration for "+ userName);
                    setTimeout(()=>{
                        navigate('/login');
                    },1000);
                },
                (Error)=>{
                    window !== null && window.alert( Error);
                }
            )
        
      }
    const updateUserName = (userName = '')=>{
        if(userName !== ''){
            setUserName(userName);
        }
    } 
    const updateUserEmail = (email = '')=>{
        if(email !== ''){
            setUserEmail(email);
        }
    } 
    
    const updateUserPassword = (password = '')=>{
        if(password !== ''){
            setPassword(password);
        }
    } 
    const backToLogin =(e)=>{
        e.preventDefault();
        navigate('/login',{ replace: true })
    }
    return (
        <div>
            <Header name ={'Register here'} />
            <Box>
                <Grid>
                    <Card className="forms">
                        <Text name = {'username'} placeHolder={'Username'} onChangeHandler={updateUserName}/>
                        <Text name = {'email'} placeHolder={'Email'} onChangeHandler={updateUserEmail}/>

                        <Password name ={'password'} placeHolder={'Password'} onChangeHandler={updateUserPassword}/>
                        <BasicButton onClick={onClickHandler} name={'Submit'}/>
                        <BasicButton onClick={backToLogin} name={'Back to Login'}/>
                    </Card>
                </Grid>
            </Box>
        </div>
    );
}

export default Register;