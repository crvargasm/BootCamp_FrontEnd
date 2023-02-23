import { Card } from "antd";
import { Field, Form, Formik } from "formik";
import React, { useRef } from "react";

export const LoginPage = () => {

    const form = useRef();


    const valuesInitial = {
        mail: "",
        password: ""
    }

    return (
        <div>
            <Card actions={[
                <div>
                    <button type="submit" onClick={() => {
                        form.current.submitForm();
                        console.log(form.current.values);
                    }}>
                        Enviar
                    </button>
                </div>
            ]}>
                <Formik innerRef={form} onSubmit={() => { }} initialValues={valuesInitial}>
                    <Form>
                        <div>
                            <label>Correo Electrónico</label>
                            <Field type="text" name="mail" />
                        </div>
                        <div>
                            <label>Contraseña</label>
                            <Field name="password" />
                        </div>
                    </Form>
                </Formik>
            </Card>
        </div>
    )
}