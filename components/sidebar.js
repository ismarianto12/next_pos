
import menudata from '../helpers/menu'
import Link from 'next/link'
import * as Icon from 'react-feather'
import { useRouter } from 'next/router'

const Sidebar = () => {
    const router = useRouter()
    return (

        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-white sidebar collapse">
            <div className="position-sticky pt-3">
                <h4 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                    <span><Icon.UserPlus />Company name</span>
                    <a className="link-secondary" href="#" aria-label="Add a new report">
                        <span data-feather="plus-circle" />
                    </a>
                </h4>
                <br />
                <ul className="nav flex-column">

                    {menudata.map((a, j) => {

                        return (<><li
                            className="nav-item">
                            <Link href={`${a.url}`}>
                                <a className={router.pathname === a.url ? "nav-link active" : "nav-link"} href="#">
                                    {a.icon}
                                    {a.name}
                                </a>
                            </Link>
                        </li></>)
                    })}

                </ul>
                <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                    <span>Saved reports</span>
                    <a className="link-secondary" href="#" aria-label="Add a new report">
                        <span data-feather="plus-circle" />
                    </a>
                </h6>
                {/* <ul className="nav flex-column mb-2">
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <span data-feather="file-text" />
                            Current month
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <span data-feather="file-text" />
                            Last quarter
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <span data-feather="file-text" />
                            Social engagement
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <span data-feather="file-text" />
                            Year-end sale
                        </a>
                    </li>
                </ul> */}
            </div>
        </nav>
    )
}
export default Sidebar