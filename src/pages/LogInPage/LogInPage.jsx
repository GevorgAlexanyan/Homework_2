import React from 'react'
import styles from './LogInPage.module.scss'
import { useForm } from 'react-hook-form';


export const LogInPage = () => {
    const { register, handleSubmit, watch, reset, formState } = useForm({
        mode: 'onChange'
    });
    const onSubmit = (data) => {
        console.log('Submitted data:', data);
        reset();
    };
    const errorEmail = formState.errors['email']?.message;
    const errorPassword = formState.errors['password']?.message;
    const passwordValue = watch('password');
    const emailValue = watch('email');



    return (
        <div className={styles.main}>
            <img src="./imges/SignUp/dl.beatsnoop 1.png" alt="" />
            <div className={styles.logIn}>
                <div className={styles.logInInfo}>
                    <h2>Log in to Exclusive</h2>
                    <p>Enter your details below</p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.inputEl}>
                        <input
                            type="text"
                            placeholder="Email or Phone Number"
                            {...register('email', {
                                required: 'This field is required',
                                pattern: {
                                    value: /^((\+?\d{1,4}[\s-]?)?(\(?\d{3}\)?[\s-]?)?\d{3}[\s-]?\d{4}|[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
                                    message: 'Please enter a valid email or phone number',
                                },
                            })}
                        />
                        {errorEmail && (
                            <span style={{ color: 'red' }}>
                                {errorEmail}
                            </span>
                        )}
                        {
                            !errorEmail && emailValue && (
                                <span style={{ color: 'green' }}>
                                    ✅ Looks good!
                                </span>)
                        }
                    </div>
                    <div className={styles.inputEl}>
                        <input
                            type="password"
                            placeholder="Password"
                            {...register('password', {
                                required: 'This field is required',
                                pattern: {
                                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d])[A-Za-z\d\S]{8,}$/,
                                    message: 'Password must be at least 8 characters and include uppercase, lowercase, number, and special character',
                                },
                            })}
                        />
                        {
                            errorPassword && (
                                <span
                                    style={{
                                        color: 'red',
                                    }}
                                >
                                    {errorPassword}
                                </span>
                            )
                        }
                        {!errorPassword && passwordValue && (
                            <span
                                style={{
                                    color: 'green'
                                }}
                            >
                                ✅ Looks good!
                            </span>
                        )
                        }
                    </div>
                    <div className={styles.btnDiv}>
                        <button
                            type="submit"
                        >Log In</button>
                        <a href="">Forget Password?</a>
                    </div>
                </form>
            </div>
        </div>
    )
}
