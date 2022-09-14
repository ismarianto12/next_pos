import Head from "next/head"
import { useEffect } from "react"
import styled from 'styled-components';

const Login = ({

    handleChange,
    handleSubmit
}) => {
    useEffect(() => {

        const dc = document.querySelector('__next');
        console.log(dc);



    }, [])
    const Container = styled.div`
    position: relative;
  `;

    return (
        <>
            <Container style={{ paddingTop: 0 }} >
                <Head>
                    <title>Login App</title>
                    <meta name="description" content="Login page example" />
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                </Head>
               
                <div className="d-flex flex-column flex-root" style={{
                    'height': 'calc(101vh - 10px)',
                    'overflow-y': 'hidden'
                }}>
                    {/*begin::Login*/}
                    <div className="login-1 login-signin-on d-flex flex-column flex-lg-row flex-column-fluid bg-white" id="kt_login">
                        {/*begin::Aside*/}
                        <div className="login-aside d-flex flex-column flex-row-auto" style={{
                            'background': 'url("http://localhost:97/pi_kpi/public/assets/img/backdepan.jpg")',
                            'background-position': 'bottom',
                            'background-repeat': 'no-repeat',
                            'background-size': 'contain',

                        }}>
                            {/*begin::Aside Top*/}
                            <div className="d-flex flex-column-auto flex-column pt-lg-40 pt-15">
                                {/*begin::Aside header*/}
                                <a href="#" className="text-center mb-10">
                                    <img src="" className="max-h-70px" alt="" />
                                </a>
                                {/*end::Aside header*/}
                                {/*begin::Aside title*/}
                                <h4 className="font-weight-bolder text-center font-size-h4 font-size-h1-lg" style={{ color: '#986923', padding: '10px 10px 10px' }}>Login Access App</h4>
                                {/*end::Aside title*/}
                            </div>
                            {/*end::Aside Top*/}
                            {/*begin::Aside Bottom*/}
                            <div className="aside-img d-flex flex-row-fluid bgi-no-repeat bgi-position-y-bottom bgi-position-x-center" style={{ backgroundImage: 'url(assets/media/svg/illustrations/login-visual-1.svg)' }} />
                            {/*end::Aside Bottom*/}
                        </div>
                        {/*begin::Aside*/}
                        {/*begin::Content*/}
                        <div className="login-content flex-row-fluid d-flex flex-column justify-content-center position-relative overflow-hidden p-7 mx-auto">
                            {/*begin::Content body*/}
                            <div className="d-flex flex-column-fluid flex-center">
                                {/*begin::Signin*/}
                                <div className="login-form login-signin">
                                    {/*begin::Form*/}
                                    <form className="form" id="kt_login_signin_form" onSubmit={handleSubmit}>

                                        {/*begin::Form group*/}
                                        <div className="form-group">
                                            <label className="font-size-h6 font-weight-bolder text-dark">Username</label>
                                            <input className="form-control form-control-solid h-auto py-6 px-6 rounded-lg" type="text" name="username" onChange={(e) => null} />
                                        </div>
                                        {/*end::Form group*/}
                                        {/*begin::Form group*/}
                                        <div className="form-group">
                                            <div className="d-flex justify-content-between mt-n5">
                                                <label className="font-size-h6 font-weight-bolder text-dark pt-5">Password</label>
                                                <a href="javascript:;" className="text-primary font-size-h6 font-weight-bolder text-hover-primary pt-5" id="kt_login_forgot">Forgot Password ?</a>
                                            </div>
                                            <input className="form-control form-control-solid h-auto py-6 px-6 rounded-lg" type="password" name="password" onChange={(e) => null} />
                                        </div>
                                        {/*end::Form group*/}
                                        {/*begin::Action*/}
                                        <div className="pb-lg-0 pb-5">
                                            <button type="submit" id="kt_login_signin_submit" className="btn btn-primary font-weight-bolder font-size-h6 px-8 py-4 my-3 mr-3">Sign In</button>
                                            <button type="button" className="btn btn-light-primary font-weight-bolder px-8 py-4 my-3 font-size-lg">
                                                <span className="svg-icon svg-icon-md">
                                                    {/*begin::Svg Icon | path:assets/media/svg/social-icons/google.svg*/}
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                                                        <path d="M19.9895 10.1871C19.9895 9.36767 19.9214 8.76973 19.7742 8.14966H10.1992V11.848H15.8195C15.7062 12.7671 15.0943 14.1512 13.7346 15.0813L13.7155 15.2051L16.7429 17.4969L16.9527 17.5174C18.879 15.7789 19.9895 13.221 19.9895 10.1871Z" fill="#4285F4" />
                                                        <path d="M10.1993 19.9313C12.9527 19.9313 15.2643 19.0454 16.9527 17.5174L13.7346 15.0813C12.8734 15.6682 11.7176 16.0779 10.1993 16.0779C7.50243 16.0779 5.21352 14.3395 4.39759 11.9366L4.27799 11.9466L1.13003 14.3273L1.08887 14.4391C2.76588 17.6945 6.21061 19.9313 10.1993 19.9313Z" fill="#34A853" />
                                                        <path d="M4.39748 11.9366C4.18219 11.3166 4.05759 10.6521 4.05759 9.96565C4.05759 9.27909 4.18219 8.61473 4.38615 7.99466L4.38045 7.8626L1.19304 5.44366L1.08875 5.49214C0.397576 6.84305 0.000976562 8.36008 0.000976562 9.96565C0.000976562 11.5712 0.397576 13.0882 1.08875 14.4391L4.39748 11.9366Z" fill="#FBBC05" />
                                                        <path d="M10.1993 3.85336C12.1142 3.85336 13.406 4.66168 14.1425 5.33717L17.0207 2.59107C15.253 0.985496 12.9527 0 10.1993 0C6.2106 0 2.76588 2.23672 1.08887 5.49214L4.38626 7.99466C5.21352 5.59183 7.50242 3.85336 10.1993 3.85336Z" fill="#EB4335" />
                                                    </svg>
                                                    {/*end::Svg Icon*/}
                                                </span>Sign in with Google</button>
                                        </div>
                                        {/*end::Action*/}
                                    </form>
                                    {/*end::Form*/}
                                </div>



                            </div>
                            {/*end::Content body*/}

                        </div>
                        {/*end::Content*/}
                    </div>
                    {/*end::Login*/}
                </div>

            </Container>
        </>
    )

}

export default Login