import React from 'react'
import styles from './SignUpPage.module.scss'
import { GooleIcon } from '../../icones/GooleIcon'
import { Link, NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';

export const SignUpPage = () => {
    const { register, handleSubmit, watch, reset, formState } = useForm({
        mode: 'onChange'
    });
    const onSubmit = (data) => {
        console.log('Submitted data:', data);
        reset();
    };
    const errorEmail = formState.errors['email']?.message;
    const errorPassword = formState.errors['password']?.message;
    const errorName = formState.errors['name']?.message;
    const emailValue = watch('email');
    const nameValue = watch('name');
    const passwordValue = watch('password');



    return (
        <div className={styles.main}>
            <img src="./imges/SignUp/dl.beatsnoop 1.png" alt="" />
            <div className={`${styles.signUpForm}`}>
                <h2>Create an account</h2>
                <p>Enter your details below</p>
                <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <input
                            type="text"
                            placeholder="Name"
                            {...register('name', {
                                required: 'This field is required',
                                pattern: {
                                    value: /^[A-Za-zÀ-ÿ'-]{2,}(?: [A-Za-zÀ-ÿ'-]{2,})*$/,
                                    message: 'Please enter a valid name (letters only)',
                                },
                            })}
                        />
                        {
                            errorName && (
                                <span
                                    style={{
                                        color: 'red',
                                    }}
                                >
                                    {errorName}
                                </span>
                            )
                        }
                        {!errorName && nameValue && (
                            <span
                                style={{
                                    color: 'green',
                                }}
                            >
                                ✅ Looks good!
                            </span>
                        )

                        }

                    </div>
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
                    <button className={styles.formBtn}
                        type="submit"
                    >Create Account</button>
                    <button className={styles.gooleIconBtn}>
                        <GooleIcon width={24} height={24} />
                        Sign up with Google
                    </button>
                </form>
                <div className={styles.logeIn}>
                    <span>Already have account?</span>
                    <Link to="/login">
                        <button>Log In</button>
                    </Link>

                </div>
            </div>
        </div>
    )
}
