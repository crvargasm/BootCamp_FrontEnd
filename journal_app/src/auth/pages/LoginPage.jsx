import { Card, Modal } from "antd";
import { Field, Form, Formik } from "formik";
import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUserWithEmailPassword } from "../../firebase/providers";
import { checkingAuthentication, startGoogleSignIn } from "../../store/auth/thunks";
// import styles from "../../styles.css";

export const LoginPage = () => {

    const form = useRef();
    const dispatch = useDispatch();
    const info = useSelector(state => state.auth);
    const [visible, setVisible] = useState(true);

    console.log("🚀 ~ file: LoginPage.jsx:13 ~ LoginPage ~ info:", info);

    const valuesInitial = {
        mail: info?.status === "checking" ? info?.email : "",
        password: "",
    }

    const onClose = () => {
        setVisible(false);
    }

    const submit = () => {
        dispatchEvent(checkingAuthentication());
    }

    const onGoogleSignIn = async () => {
        if (form.current?.values?.mail !== "" && form.current?.values?.password !== "") {
            console.log("🚀 ~ file: LoginPage.jsx:37 ~ onGoogleSignIn ~ values:", form?.current?.values)
            await dispatch(registerUserWithEmailPassword({ email: form?.current?.values.mail, password: form?.current?.values.password }));
        } else {
            window.alert("Se debe ingresar un correo y contraseña de 6 caracteres mínimo para continuar");
        }
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
            <Card
                title={`Hola ${info?.displayName}, ¿cómo estás?`}
                actions={[
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

                        <button disabled={info?.status === "checking" ? true : false} style={{
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
                            Crear un usuario
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
            <Modal onCancel={onClose} open={visible}>
                Holaaaa
            </Modal>
        </div >
    )
}