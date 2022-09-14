import React, { useContext, useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Pheader from './pheader'
import Sidebar from './sidebar'
import { useRouter } from 'next/router'
import Swal from 'sweetalert2'
import * as Icon from 'react-feather'
import App from '../app'


const Templates = ({ container }) => {
    const username = useContext(App)
    const [nama, setNama] = useState('')
    useEffect(() => {
        const session = typeof window != localStorage.getItem('username') ? localStorage.getItem('username') : null
        setNama(session)
        console.log(username)
    }, [])


    const route = useRouter()
    const logout = (e) => {

        e.preventDefault();
        Swal.fire({
            title: 'confirm',
            text: 'Anda akan keluar dari aplikasi',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
        }).then((result) => {
            if (result.isConfirmed) {

                console.log('logout');
                route.push('/');
            }
        })

    }
    return (<>


        <div id="kt_header_mobile" className="header-mobile align-items-center header-mobile-fixed">

            <a href="index.html">
                <img alt="Logo" src="assets/media/logos/logo-light.png" />
            </a>

            <div className="d-flex align-items-center">
                {/*begin::Aside Mobile Toggle*/}
                <button className="btn p-0 burger-icon burger-icon-left" id="kt_aside_mobile_toggle">
                    <span />
                </button>
                {/*end::Aside Mobile Toggle*/}
                {/*begin::Header Menu Mobile Toggle*/}
                <button className="btn p-0 burger-icon ml-4" id="kt_header_mobile_toggle">
                    <span />
                </button>
                {/*end::Header Menu Mobile Toggle*/}
                {/*begin::Topbar Mobile Toggle*/}
                <button className="btn btn-hover-text-primary p-0 ml-2" id="kt_header_mobile_topbar_toggle">
                    <span className="svg-icon svg-icon-xl">
                        {/*begin::Svg Icon | path:assets/media/svg/icons/General/User.svg*/}
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                            <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                <polygon points="0 0 24 0 24 24 0 24" />
                                <path d="M12,11 C9.790861,11 8,9.209139 8,7 C8,4.790861 9.790861,3 12,3 C14.209139,3 16,4.790861 16,7 C16,9.209139 14.209139,11 12,11 Z" fill="#000000" fillRule="nonzero" opacity="0.3" />
                                <path d="M3.00065168,20.1992055 C3.38825852,15.4265159 7.26191235,13 11.9833413,13 C16.7712164,13 20.7048837,15.2931929 20.9979143,20.2 C21.0095879,20.3954741 20.9979143,21 20.2466999,21 C16.541124,21 11.0347247,21 3.72750223,21 C3.47671215,21 2.97953825,20.45918 3.00065168,20.1992055 Z" fill="#000000" fillRule="nonzero" />
                            </g>
                        </svg>
                        {/*end::Svg Icon*/}
                    </span>
                </button>
                {/*end::Topbar Mobile Toggle*/}
            </div>
            {/*end::Toolbar*/}
        </div>
        {/*end::Header Mobile*/}
        <div className="d-flex flex-column flex-root">
            {/*begin::Page*/}
            <div className="d-flex flex-row flex-column-fluid page">
                {/*begin::Aside*/}
                <div className="aside aside-left aside-fixed d-flex flex-column flex-row-auto" id="kt_aside">
                    {/*begin::Brand*/}
                    <div className="brand flex-column-auto" id="kt_brand" style={{ 'background': '#fff' }} >
                        {/*begin::Logo*/}
                        <a href="index.html" className="brand-logo">
                            {/* <img alt="Logo" src="http://localhost:97/pi_kpi/public/assets/img/logo.png" /> */}
                            <img alt="Logo" src="http://localhost:97/pi_kpi/public/assets/img/logo.png" style={{ 'width': '50%' }} />

                        </a>
                        {/*end::Logo*/}
                        {/*begin::Toggle*/}
                        <button className="brand-toggle btn btn-sm px-0" id="kt_aside_toggle">
                            <span className="svg-icon svg-icon svg-icon-xl">
                                {/*begin::Svg Icon | path:assets/media/svg/icons/Navigation/Angle-double-left.svg*/}
                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                        <polygon points="0 0 24 0 24 24 0 24" />
                                        <path d="M5.29288961,6.70710318 C4.90236532,6.31657888 4.90236532,5.68341391 5.29288961,5.29288961 C5.68341391,4.90236532 6.31657888,4.90236532 6.70710318,5.29288961 L12.7071032,11.2928896 C13.0856821,11.6714686 13.0989277,12.281055 12.7371505,12.675721 L7.23715054,18.675721 C6.86395813,19.08284 6.23139076,19.1103429 5.82427177,18.7371505 C5.41715278,18.3639581 5.38964985,17.7313908 5.76284226,17.3242718 L10.6158586,12.0300721 L5.29288961,6.70710318 Z" fill="#000000" fillRule="nonzero" transform="translate(8.999997, 11.999999) scale(-1, 1) translate(-8.999997, -11.999999)" />
                                        <path d="M10.7071009,15.7071068 C10.3165766,16.0976311 9.68341162,16.0976311 9.29288733,15.7071068 C8.90236304,15.3165825 8.90236304,14.6834175 9.29288733,14.2928932 L15.2928873,8.29289322 C15.6714663,7.91431428 16.2810527,7.90106866 16.6757187,8.26284586 L22.6757187,13.7628459 C23.0828377,14.1360383 23.1103407,14.7686056 22.7371482,15.1757246 C22.3639558,15.5828436 21.7313885,15.6103465 21.3242695,15.2371541 L16.0300699,10.3841378 L10.7071009,15.7071068 Z" fill="#000000" fillRule="nonzero" opacity="0.3" transform="translate(15.999997, 11.999999) scale(-1, 1) rotate(-270.000000) translate(-15.999997, -11.999999)" />
                                    </g>
                                </svg>
                                {/*end::Svg Icon*/}
                            </span>
                        </button>
                        {/*end::Toolbar*/}
                    </div>
                    {/*end::Brand*/}
                    {/*begin::Aside Menu*/}
                    <div className="aside-menu-wrapper flex-column-fluid" id="kt_aside_menu_wrapper">
                        {/*begin::Menu Container*/}
                        <Sidebar />
                        {/*end::Menu Container*/}
                    </div>
                    {/*end::Aside Menu*/}
                </div>
                {/*end::Aside*/}
                {/*begin::Wrapper*/}
                <div className="d-flex flex-column flex-row-fluid wrapper" id="kt_wrapper">
                    {/*begin::Header*/}
                    <div id="kt_header" className="header header-fixed">
                        {/*begin::Container*/}
                        <div className="container-fluid d-flex align-items-stretch justify-content-between">
                            {/*begin::Header Menu Wrapper*/}
                            <div className="header-menu-wrapper header-menu-wrapper-left" id="kt_header_menu_wrapper">
                                {/*begin::Header Menu*/}
                                <div id="kt_header_menu" className="header-menu header-menu-mobile header-menu-layout-default">
                                    {/* <img alt="Logo" src="http://localhost:97/pi_kpi/public/assets/img/logo.png" style={{ 'height': '70%' }} /> */}
                                </div>
                                {/*end::Header Menu*/}
                            </div>
                            {/*end::Header Menu Wrapper*/}
                            {/*begin::Topbar*/}
                            <div className="topbar">
                                {/*begin::Search*/}

                                <div className="topbar-item">
                                    <a href='#' onClick={logout}> Hy , {nama}
                                        <Icon.User />
                                    </a>
                                </div>


                                {/*end::User*/}
                            </div>
                            {/*end::Topbar*/}
                        </div>
                        {/*end::Container*/}
                    </div>
                    {/*end::Header*/}
                    {/*begin::Content*/}
                    <div className="content d-flex flex-column flex-column-fluid" id="kt_content">
                        {/*begin::Subheader*/}

                        {/*end::Subheader*/}
                        {/*begin::Entry*/}
                        <div className="d-flex flex-column-fluid">
                            {/*begin::Container*/}
                            <div className="container" style={{ 'margin-top': '40px' }}>
                                {container}
                            </div>
                            {/*end::Container*/}
                        </div>
                        {/*end::Entry*/}
                    </div>
                    {/*end::Content*/}
                    {/*begin::Footer*/}
                    <div className="footer bg-white py-4 d-flex flex-lg-column" id="kt_footer">
                        {/*begin::Container*/}
                        <div className="container-fluid d-flex flex-column flex-md-row align-items-center justify-content-between">
                            {/*begin::Copyright*/}
                            <div className="text-dark order-2 order-md-1">
                                <span className="text-muted font-weight-bold mr-2">2021©</span>
                                <a href="http://keenthemes.com/metronic" target="_blank" className="text-dark-75 text-hover-primary">Keenthemes</a>
                            </div>
                            {/*end::Copyright*/}
                            {/*begin::Nav*/}
                            <div className="nav nav-dark">
                                <a href="http://keenthemes.com/metronic" target="_blank" className="nav-link pl-0 pr-5">About</a>
                                <a href="http://keenthemes.com/metronic" target="_blank" className="nav-link pl-0 pr-5">Team</a>
                                <a href="http://keenthemes.com/metronic" target="_blank" className="nav-link pl-0 pr-0">Contact</a>
                            </div>
                            {/*end::Nav*/}
                        </div>
                        {/*end::Container*/}
                    </div>
                    {/*end::Footer*/}
                </div>
                {/*end::Wrapper*/}
            </div>
            {/*end::Page*/}
        </div>




    </>);
}

export default Templates;
