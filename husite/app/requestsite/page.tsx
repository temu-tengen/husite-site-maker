"use client";
import styles from "./page.module.css";

import { useActionState } from "react";
import { submitRequest, FormState } from "../actions/actions";

const initialState: FormState = { success: false, message: "" };

export default function RequestSitePage() {
    const [state, formAction, isPending] = useActionState(submitRequest, initialState);
    return (
        <div className={styles.page}>
            <h1>Request Your Site</h1>

            <div className={styles.formContainer}>
                <form action={formAction}>
                    <input name="requestName" className={styles.textField} required placeholder="Site Name"/>
                    <input name="email" placeholder="Email" className={styles.textField} required/>
                    <input name="firstName" placeholder="First Name" className={styles.textField} required/>
                    <input name="lastName" placeholder="Last Name" className={styles.textField} required/>
                    <input name="description" placeholder="Description" className={styles.textFieldXL} required/>
                    <button type="submit" className={styles.submitButton}>{isPending ? "Sending in.." : "Submit Request"} </button>
                    <p>{state.message}</p>
                </form>
            </div>
        </div>
    );
}