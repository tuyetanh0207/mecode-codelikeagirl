import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import {
  FlatList,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import styles from '../Utils/styles';
import * as CONST from '../Utils/constants';
import {logInStyles} from '../Utils/logInStyles';
import { AppButton } from '../Components/JoinBtn';
import client from '../api/client';
import { signIn } from '../api/user';
import { useLogin } from '../Contexts/LoginProvider';
export default function LogInScreen({navigation: {goBack}, route}) {
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')
    const {setIsLoggedIn} = useLogin()
    const [isShowPwd, setIsShowPwd] = useState(false)
    const [userInfo, setUserInfo] = useState({
        email: '',
        password: ''
    })
    const {email, password} = userInfo
    const handleOnChangeText = (value, fieldName) => {
        setUserInfo({...userInfo, [fieldName]:value})
    }
    const handleLogInBtn = async ()=>{
        try {
           
            console.log('prepare sending')
            //const res = await signIn(userInfo.email, userInfo.password)
            const res = await signIn("myemail5@gmail.com", "123456")
            console.log(res.data)
            setIsLoggedIn(true)
            // const signInRes = await client.post('/sign-in', {
            //     email,
            //     password,
            // })
            // console.log(signInRes.data)
        
        } catch (error) {
            console.log(error.message)
        }
           
    }
    //console.log(userInfo)
    
    return (
    <ImageBackground
      source={require("../assets/images/background.png")}
      style={styles.imageBackground}
    >
        <TouchableOpacity onPress={() => goBack()} 
            style={logInStyles.backicon}
            >
                
                <Image
                    source={require("../assets/images/Back.png")}
                    style={logInStyles.backicon}
                />
            </TouchableOpacity>
        <View style={logInStyles.container}>
            
            <View style={logInStyles.header}>
                <Text style={styles.heading2}>Sign in with Google</Text>
            </View>
            <Text style={logInStyles.continuetext}>
                Sign in to continue
                <Text style={logInStyles.greensteptext}> GreenStep!</Text>
            </Text>
            <View style={logInStyles.email}>
                <TextInput  style={logInStyles.emailinput} 
                value={email} 
                placeholder='Email or phone'
                onChangeText={(value) => handleOnChangeText(value, 'email')}/> 
            </View>
            <View style={logInStyles.email}>
            <TextInput  style={logInStyles.emailinput} 
            value={password} 
            placeholder='Password'
            onChangeText={(value) => handleOnChangeText(value, 'password')}
            /> 
            </View>
            <View  style={logInStyles.showpwd}>
                {isShowPwd?
                <View style={logInStyles.showpwdsquare}></View>
                :
                <View style={logInStyles.showpwdsquare}></View>
                }
                
                <Text style={logInStyles.showpwdtext}>Show password</Text>

            </View>
            <TouchableOpacity onPress ={handleLogInBtn}>
                <AppButton title={"Log in"} backgroundColor={'black'} color={CONST.BACKGROUND_COLOR} size='m'/>
            </TouchableOpacity>
            

        </View>
    </ImageBackground>
    );
}