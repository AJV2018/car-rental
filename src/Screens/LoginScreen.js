import React, { useState } from 'react'
import { View, Text, Image, ActivityIndicator } from 'react-native'
import { almostBlack, backgroundColor, grey, primaryColor, white } from '../Theme/colors'
import Header from '../Components/Header'
import { PoppinsBold, PoppinsRegular, PoppinsSemiBold } from '../Theme/fonts'
import { bigHeading, h1, h2, h3, mediumHeading, pad2, pad5 } from '../Theme/dimensions'
import TextField from '../Components/TextField'
import NativeButton from '../Components/NativeButton'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { signIn, signUp } from '../Api/Authentication'
import { useDispatch, useSelector } from 'react-redux'
import { userLoggedIn } from '../Redux/actions/authActions'
export default function LoginScreen() {
    const [mode, setMode] = useState(0)
    const [loading, setLoading] = useState(false)

    const dispatch = useDispatch()

    const handleSignin = (email, password) => {
        setLoading(true)
        signIn(email, password).then(res => {
            alert('User Login Success')
            dispatch(userLoggedIn())
        }).catch(err => alert(err))
        .finally(()=>setLoading(false))
    }


    const onSignUpPress = (name, email, password) => {
        setLoading(true)
        signUp(name, email, password).then(res => {
            alert('Logged in Succesfully!')
        }).catch(err => alert(err))
        .finally(()=>setLoading(false))
    }
    return (
        <View style={{
            flex: 1,
            backgroundColor: backgroundColor
        }}>
            <Header
                title='Car Rental'
                leftButton={require('../Assets/images/menu.png')}
                leftButtonOnPress={() => alert('pressed')}
            />
            <View style={{
                flex: 1,
                flexDirection: 'row'
            }}>
                <View style={{
                    flex: 1,
                }}>
                    <Image
                        source={require('../Assets/images/carBanner.jpg')}
                        resizeMode='stretch'
                        style={{
                            flex: 1
                        }}
                    />
                </View>
                <View style={{
                    flex: 1,
                    backgroundColor: white,
                    padding: pad2,
                    alignItems: 'center'
                }}>
                    <Text style={{
                        fontFamily: PoppinsBold,
                        fontSize: mediumHeading,
                        color: almostBlack,


                    }}>
                        Welcome to{`\n`}carrental.com
                    </Text>


                    <View style={{
                        backgroundColor: white
                    }}>
                        <Text style={{
                            fontFamily: PoppinsBold,
                            fontSize: h1,
                            color: almostBlack,
                        }}>
                            Login to explore our range of services!
                        </Text>
                        {
                            mode === 0 ?
                                <Login
                                    setMode={mode => setMode(mode)}
                                    handleSignin={handleSignin}
                                    isLoading={loading}
                                />
                                :
                                <Signup
                                    handleSignUp={onSignUpPress}
                                    setMode={mode => setMode(mode)}
                                    isLoading={loading}
                                />
                        }
                    </View>
                </View>
            </View>
        </View>
    )
}


const Login = ({
    handleSignin = () => { },
    setMode = () => { },
    isLoading = false
}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <View style={{
            borderRadius: pad2,
            borderColor: backgroundColor,
            borderWidth: 1,
            padding: pad2,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.5,
            shadowRadius: 2,
            elevation: 2,
            backgroundColor: white,
            marginTop: pad2
        }}>
            <Text style={{
                fontFamily: PoppinsBold,
                fontSize: h1,
                color: almostBlack,
                textAlign: 'center'
            }}>
                Sign In
            </Text>
            <TextField
                label='Email'
                value={email}
                onType={setEmail}
            />
            <TextField
                label='Password'
                value={password}
                onType={setPassword}
                isPassword
            />
            {
                isLoading ?
                    <ActivityIndicator size='large' color={primaryColor} />
                    :
                    <NativeButton
                        onPress={() => handleSignin(email, password)}
                        buttonStyle={{
                            width: '90%',
                            padding: responsiveHeight(1.5),
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: primaryColor,
                            alignSelf: 'center',
                            marginTop: pad2
                        }}
                        textStyle={{
                            fontFamily: PoppinsBold,
                            fontSize: h1,
                            color: white,
                        }}
                        title='Log In'
                    />
            }

            <View style={{
                flexDirection: 'row',
                alignItems: "center",
                alignSelf: 'center',
                marginTop: pad2
            }}>
                <Text style={{
                    fontFamily: PoppinsRegular,
                    fontSize: h3,
                    color: grey,
                }}>
                    Don't have an account?{' '}
                </Text>
                <NativeButton
                    onPress={() => setMode(1)}
                    title={'Signup'}
                    textStyle={{
                        fontFamily: PoppinsBold,
                        fontSize: h3,
                        color: almostBlack,
                    }}
                />
            </View>
        </View>
    )
}

const Signup = ({
    handleSignUp = () => { },
    setMode = () => { },
    isLoading = false
}) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <View style={{
            borderRadius: pad2,
            borderColor: backgroundColor,
            borderWidth: 1,
            padding: pad2,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.5,
            shadowRadius: 2,
            elevation: 2,
            backgroundColor: white,
            marginTop: pad2
        }}>
            <Text style={{
                fontFamily: PoppinsBold,
                fontSize: h1,
                color: almostBlack,
                textAlign: 'center'
            }}>
                Sign Up
            </Text>
            <TextField
                label='Name'
                value={name}
                onType={setName}
            />
            <TextField
                label='Email'
                value={email}
                onType={setEmail}
            />
            <TextField
                label='Password'
                value={password}
                onType={setPassword}
                isPassword
            />
            {
                isLoading ?
                    <ActivityIndicator size='large' color={primaryColor} />
                    :
                    <NativeButton
                        onPress={() => handleSignUp(name, email, password)}
                        buttonStyle={{
                            width: '90%',
                            padding: responsiveHeight(1.5),
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: primaryColor,
                            alignSelf: 'center',
                            marginTop: pad2
                        }}
                        textStyle={{
                            fontFamily: PoppinsBold,
                            fontSize: h1,
                            color: white,
                        }}
                        title='Create Account'
                    />
            }

            <View style={{
                flexDirection: 'row',
                alignItems: "center",
                alignSelf: 'center',
                marginTop: pad2
            }}>
                <Text style={{
                    fontFamily: PoppinsRegular,
                    fontSize: h3,
                    color: grey,
                }}>
                    Already have an account?{' '}
                </Text>
                <NativeButton
                    onPress={() => setMode(0)}
                    title={'Login'}
                    textStyle={{
                        fontFamily: PoppinsBold,
                        fontSize: h3,
                        color: almostBlack,
                    }}
                />
            </View>


        </View>
    )
}


