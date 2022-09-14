import Sidebar from "../sidebar"
import * as Icon from 'react-feather'
import { useState } from "react"

const Template = ({ container }) => {
    const [show, setShow] = useState(false)

    return (
        <div>
            <header className="navbar navbar-dark sticky-top bg-light flex-md-nowrap p-0 shadow">
                <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#" style={{
                    'color': '#000'
                }}>Administrator</a>
                <Icon.Menu />
                <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search" />
                <div className="navbar-nav">
                    <div className="nav-item text-nowrap">
                        <a className="nav-link px-3" href="#" style={{
                            'color': '#000'
                        }}>Sign out</a>
                    </div>
                </div>
            </header>
            <div className="container-fluid">
                <div className="row">
                    <br /><br />
                    <Sidebar />
                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        <div className="pt-3 pb-2 mb-3 border-bottom">
                            {container}
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default Template