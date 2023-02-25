import { Card } from "antd";
import { Field, Form, Formik } from "formik";
import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { checkingAuthentication, startGoogleSignIn } from "../../store/auth/thunks";
// import styles from "../../styles.css";

export const LoginPage = () => {

    const form = useRef();
    const dispatch = useDispatch();

    const valuesInitial = {
        mail: "",
        password: "",
    }

    const submit = () => {
        dispatchEvent(checkingAuthentication());
        // window.alert("Heyyy");
    }

    const onGoogleSignIn = () => {
        dispatch(startGoogleSignIn());
    }

    return (

        <div style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            display: "flex",
            background: "rgba(255,0,0,0.7)",
            justifyContent: "center",
            alignItems: "center",
        }}>
            <Card actions={[
                <div>
                    <button style={{
                        background: "gray",
                        border: "none",
                        borderRadius: "10px",
                        padding: "10px 20px",
                        fontFamily: "sans-serif",
                        fontSize: "20px",
                        fontWeight: "600",
                        margin: "0 10px",
                        cursor: "pointer",
                    }} type="submit" onClick={() => {
                        form.current.submitForm();
                        console.log(form.current.values);
                    }}>
                        Enviar
                    </button>

                    <button style={{
                        background: "gray",
                        border: "none",
                        borderRadius: "10px",
                        padding: "10px 20px",
                        fontFamily: "sans-serif",
                        fontSize: "20px",
                        fontWeight: "600",
                        margin: "0 10px",
                        cursor: "pointer",
                    }} type="submit" onClick={() => {
                        onGoogleSignIn();
                    }}>
                        Google
                    </button>
                </div>
            ]}>
                <Formik innerRef={form} onSubmit={submit} initialValues={valuesInitial} >
                    <Form>
                        <div style={{ margin: "0" }}>
                            <label style={{ fontFamily: "sans-serif", fontSize: "20px" }}>Correo Electrónico:</label>
                            <Field type="mail" name="mail" style={{ margin: "10px", padding: "5px 0", borderRadius: "6px" }} />
                            <label style={{ fontFamily: "sans-serif", fontSize: "20px" }}>Contraseña:</label>
                            <Field type="password" name="password" style={{ margin: "10px", padding: "5px 0", borderRadius: "6px" }} />
                        </div>
                    </Form>
                </Formik>
            </Card>
        </div >
    )
}