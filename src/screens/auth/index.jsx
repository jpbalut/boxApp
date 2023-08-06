import { useState } from "react"
import { View, Text, TextInput } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch } from "react-redux";
import { useSignInMutation, useSignUpMutation } from "../../store/auth/api";
import { setUser } from "../../store/auth/authSlice";
import { COLORS } from '../../themes';

import {styles} from "./styles"

const Auth = () => {
    const dispatch = useDispatch()
    const [isLogin, setIsLogin] = useState(true)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const headerTitle = isLogin ? 'Login' : 'Register'
    const buttonTitle = isLogin ? 'Login' : 'Register'
    const messageText = isLogin ? 'Create a new account' : 'Already have an account'

    const [signIn, {data}] = useSignInMutation()
    const [signUp] = useSignUpMutation()

    const onHandleAuth = async() => {
        try {
            if(isLogin){
                const result = await signIn({email, password})
                
                if(result?.data) {
                    console.log(result.data)
                    dispatch(setUser(result.data))}
            } else {
                await signUp({email, password})
            }
        } catch(e){
            console.log(e)
        }
    }

    // const onHandlerInputChange = ({ name, value }) => {
    //     onInputChange({ name, value, dispatch: dispatchFormState, formState });
    //   };
    // useEffect(() => {
    //   if(data){
    //     dispatch(setUser(data))
    //   }
  
    // }, [data])
    

    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.header}>{headerTitle}</Text>
                <Text style={styles.header}>Email</Text>
                <TextInput
                styles={styles.input}
                placeholder='email@domain.com'
                placeholderTextColor={COLORS.gray}
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={(text)=>{setEmail(text)}}
                value={email}
                />
                 <Text style={styles.header}>Password</Text>
                <TextInput
                styles={styles.input}
                placeholder='********'
                placeholderTextColor={COLORS.gray}
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry
                onChangeText={(text)=>{setPassword(text)}}
                value={password}
                />
                <View style={styles.linkContainer}>
                    <TouchableOpacity style={styles.link} onPress={()=>setIsLogin(!isLogin)}>
                        <Text style={styles.linkText}>{messageText}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={onHandleAuth}>
                        <Text style={styles.buttonText}>{buttonTitle}</Text>
                    </TouchableOpacity>
                </View>
                

            </View>
        </View>
    )
}

export default Auth