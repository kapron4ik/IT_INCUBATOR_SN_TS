import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {PostsType} from "../Profile/MyPosts/MyPosts";
import {AppStateType} from "../../redux/redux-store";
import { Redirect } from "react-router-dom";
import style from "../common/FormsControls/FormsControls.module.css"

type PropsType = {
    isAuth: any,
    login: (email: string, pasword: string, rememberMe: boolean) => void
}

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Input} name={"login"}
                       validate={[required]}
                       type="text" placeholder={"Login"}/>

                <Field component={Input} name={"password"}
                       validate={[required]}
                       type="password" placeholder={"Password"}/>
            </div>
            <div>
                <Field component={Input} name={"rememberMe"} type="checkbox"/>remember me
            </div>
            {props.error && <div className={style.formSummaryError}>
                {props.error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType>({
    form: 'login'
})(LoginForm)

const Login: React.FC<PropsType> = (props) => {
    const onSubmit = (formData: FormDataType) => {
        props.login(formData.login, formData.password, formData.rememberMe)
    }

    if (props.isAuth){
        return <Redirect to={"/profile"}/>
    }

        return <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
}

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login)