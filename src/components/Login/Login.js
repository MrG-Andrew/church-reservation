import React from 'react'
import styles from './Login.module.css'

export default function Login() {
  return (
    <div>
	
	<div className="limiter">
		<div className={`container-login100 ${styles.backgroundImage}`}>
			<div className="wrap-login100">
				<form className="login100-form validate-form">
					<span className="login100-form-logo">
						<i className="zmdi zmdi-landscape"></i>
					</span>

					<span className="login100-form-title p-b-34 p-t-27">
						تسجيل دخول
					</span>

					<div className="wrap-input100 validate-input" data-validate = "Enter username">
						<input className="input100" type="text" name="username" placeholder="البريد الالكترونى او رقم الهاتف"/>
						<span className="focus-input100" data-placeholder="&#xf207;"></span>
					</div>

					<div className="wrap-input100 validate-input" data-validate="Enter password">
						<input className="input100" type="password" name="pass" placeholder="كلمه السر"/>
						<span className="focus-input100" data-placeholder="&#xf191;"></span>
					</div>

					<div className={`contact100-form-checkbox ${styles.rememberMeContainer}`}>
						<input className={`input-checkbox100 ${styles.rememberMebox}`} id="ckb1" type="checkbox" name="remember-me"/>
						<label className={`label-checkbox100 ${styles.rememberMe}`} htmlFor="ckb1">
							تذكرنى
						</label>
					</div>

					<div className="container-login100-form-btn">
						<button className="login100-form-btn">
							دخول
						</button>
					</div>

					<div className="text-center p-t-90">
						<a className="txt1" href="/">
							نسيت كلمه السر؟
						</a>
					</div>
				</form>
			</div>
		</div>
	</div>
	

	<div id="dropDownSelect1"></div>
</div>
  )
}
