import a from 'next/link'
import * as Icon from 'react-feather'
import { useRouter } from 'next/router'
import SVG from "react-inlinesvg";
import Link from 'next/link';

const Sidebar = () => {

    const location = useRouter()

    function getCurrentUrl(location) {
        return location.pathname.split(/[?#]/)[0];
    }

    function checkIsActive(location, url) {
        const current = getCurrentUrl(location);
        console.log(current)
        if (!current || !url) {
            false;
        }

        if (current === url) {
            true;
        }

        if (current.indexOf(url) > -1) {
            true;
        }

        false;
    }

    const getMenuItemActive = (url, hasSubmenu = false) => {

        return checkIsActive(location, url)
            ? ` ${!hasSubmenu &&
            "menu-item-active"} menu-item-open menu-item-not-hightlighted`
            : "menu-item-active";
    };
    // console.log(getMenuItemActive("/dashboard", false))
    return (
        <>
            <div id="kt_aside_menu" className="aside-menu my-4" data-menu-vertical={1} data-menu-scroll={1} data-menu-dropdown-timeout={500}>
                {/*begin::Menu Nav*/}
                <ul className={`menu-nav aside_menu`}>
                    {/*begin::1 Level*/}
                    <li
                        className={`menu-item ${getMenuItemActive("/dashboard", false)}`}
                        aria-haspopup="true"
                    >
                        <Link className="menu-link" href="/dashboard">
                            <a href="#" className="menu-link">
                                <span className="svg-icon menu-icon">
                                    <Icon.Home />
                                </span>
                                <span className="menu-text">Dashboard</span>
                            </a>
                        </Link>
                    </li>
                    {/*end::1 Level*/}

                    {/*begin::1 Level*/}
                    <li
                        className={`menu-item ${getMenuItemActive("/builder", false)}`}
                        aria-haspopup="true"
                    >
                        <Link className="menu-link" href="/barang">
                            <a href="#" className="menu-link">
                                <span className="svg-icon menu-icon">
                                    <Icon.List /> 
                                </span>
                                <span className="menu-text">Data Master</span>
                            </a>
                        </Link>
                    </li>
                    {/*end::1 Level*/}

                    {/* Components */}
                    {/* begin::section */}
                    <li className="menu-section ">
                        <h4 className="menu-text">Components</h4>
                        <i className="menu-icon flaticon-more-v2"></i>
                    </li>
                    {/* end:: section */}

                    {/* Material-UI */}
                    {/*begin::1 Level*/}
                    <li
                        className={`menu-item menu-item-submenu ${getMenuItemActive(
                            "/master-data",
                            true
                        )}`}
                        aria-haspopup="true"
                        data-menu-toggle="hover"
                    >
                        <a className="menu-link menu-toggle" to="/master-data">
                            <span className="svg-icon menu-icon">
                                <SVG src={("/media/svg/icons/Design/Cap-2.svg")} />
                            </span>
                            <span className="menu-text">Material UI</span>
                            <i className="menu-arrow" />
                        </a>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                                <li className="menu-item  menu-item-parent" aria-haspopup="true">
                                    <span className="menu-link">
                                        <span className="menu-text">Material UI</span>
                                    </span>
                                </li>

                                {/* Inputs */}
                                {/*begin::2 Level*/}
                                <li
                                    className={`menu-item menu-item-submenu ${getMenuItemActive(
                                        "/master-data/inputs",
                                        true
                                    )}`}
                                    aria-haspopup="true"
                                    data-menu-toggle="hover"
                                >
                                    <a
                                        className="menu-link menu-toggle"
                                        to="/master-data/inputs"
                                    >
                                        <i className="menu-bullet menu-bullet-dot">
                                            <span />
                                        </i>
                                        <span className="menu-text">Inputs</span>
                                        <i className="menu-arrow" />
                                    </a>
                                    <div className="menu-submenu ">
                                        <i className="menu-arrow" />
                                        <ul className="menu-subnav">
                                            {/*begin::3 Level*/}
                                            <li
                                                className={`menu-item  ${getMenuItemActive(
                                                    "/master-data/inputs/autocomplete"
                                                )}`}
                                                aria-haspopup="true"
                                            >
                                                <a
                                                    className="menu-link"
                                                    to="/master-data/inputs/autocomplete"
                                                >
                                                    <i className="menu-bullet menu-bullet-dot">
                                                        <span />
                                                    </i>
                                                    <span className="menu-text">Autocomplete</span>
                                                </a>
                                            </li>
                                            {/*end::3 Level*/}

                                            {/*begin::3 Level*/}
                                            <li
                                                className={`menu-item ${getMenuItemActive(
                                                    "/master-data/inputs/buttons"
                                                )}`}
                                                aria-haspopup="true"
                                            >
                                                <a
                                                    className="menu-link"
                                                    to="/master-data/inputs/buttons"
                                                >
                                                    <i className="menu-bullet menu-bullet-dot">
                                                        <span />
                                                    </i>
                                                    <span className="menu-text">Buttons</span>
                                                </a>
                                            </li>
                                            {/*end::3 Level*/}

                                            {/*begin::3 Level*/}
                                            <li
                                                className={`menu-item ${getMenuItemActive(
                                                    "/master-data/inputs/checkboxes"
                                                )}`}
                                                aria-haspopup="true"
                                            >
                                                <a
                                                    className="menu-link"
                                                    to="/master-data/inputs/checkboxes"
                                                >
                                                    <i className="menu-bullet menu-bullet-dot">
                                                        <span />
                                                    </i>
                                                    <span className="menu-text">Checkboxes</span>
                                                </a>
                                            </li>
                                            {/*end::3 Level*/}

                                            {/*begin::3 Level*/}
                                            <li
                                                className={`menu-item ${getMenuItemActive(
                                                    "/master-data/inputs/pickers"
                                                )}`}
                                                aria-haspopup="true"
                                            >
                                                <a
                                                    className="menu-link"
                                                    to="/master-data/inputs/pickers"
                                                >
                                                    <i className="menu-bullet menu-bullet-dot">
                                                        <span />
                                                    </i>
                                                    <span className="menu-text">Pickers</span>
                                                </a>
                                            </li>
                                            {/*end::3 Level*/}

                                            {/*begin::3 Level*/}
                                            <li
                                                className={`menu-item ${getMenuItemActive(
                                                    "/master-data/inputs/radio-buttons"
                                                )}`}
                                                aria-haspopup="true"
                                            >
                                                <a
                                                    className="menu-link"
                                                    to="/master-data/inputs/radio-buttons"
                                                >
                                                    <i className="menu-bullet menu-bullet-dot">
                                                        <span />
                                                    </i>
                                                    <span className="menu-text">Radio Buttons</span>
                                                </a>
                                            </li>
                                            {/*end::3 Level*/}

                                            {/*begin::3 Level*/}
                                            <li
                                                className={`menu-item ${getMenuItemActive(
                                                    "/master-data/inputs/selects"
                                                )}`}
                                                aria-haspopup="true"
                                            >
                                                <a
                                                    className="menu-link"
                                                    to="/master-data/inputs/selects"
                                                >
                                                    <i className="menu-bullet menu-bullet-dot">
                                                        <span />
                                                    </i>
                                                    <span className="menu-text">Selects</span>
                                                </a>
                                            </li>
                                            {/*end::3 Level*/}

                                            {/*begin::3 Level*/}
                                            <li
                                                className={`menu-item ${getMenuItemActive(
                                                    "/master-data/inputs/switches"
                                                )}`}
                                                aria-haspopup="true"
                                            >
                                                <a
                                                    className="menu-link"
                                                    to="/master-data/inputs/switches"
                                                >
                                                    <i className="menu-bullet menu-bullet-dot">
                                                        <span />
                                                    </i>
                                                    <span className="menu-text">Switches</span>
                                                </a>
                                            </li>
                                            {/*end::3 Level*/}

                                            {/*begin::3 Level*/}
                                            <li
                                                className={`menu-item ${getMenuItemActive(
                                                    "/master-data/inputs/text-fields"
                                                )}`}
                                                aria-haspopup="true"
                                            >
                                                <a
                                                    className="menu-link"
                                                    to="/master-data/inputs/text-fields"
                                                >
                                                    <i className="menu-bullet menu-bullet-dot">
                                                        <span />
                                                    </i>
                                                    <span className="menu-text">Text Fields</span>
                                                </a>
                                            </li>
                                            {/*end::3 Level*/}

                                            {/*begin::3 Level*/}
                                            <li
                                                className={`menu-item ${getMenuItemActive(
                                                    "/master-data/inputs/transfer-list"
                                                )}`}
                                                aria-haspopup="true"
                                            >
                                                <a
                                                    className="menu-link"
                                                    to="/master-data/inputs/transfer-list"
                                                >
                                                    <i className="menu-bullet menu-bullet-dot">
                                                        <span />
                                                    </i>
                                                    <span className="menu-text">Transfer List</span>
                                                </a>
                                            </li>
                                            {/*end::3 Level*/}
                                        </ul>
                                    </div>
                                </li>
                                {/*end::2 Level*/}

                                {/* Navigation */}
                                {/*begin::2 Level*/}
                                <li
                                    className={`menu-item menu-item-submenu  ${getMenuItemActive(
                                        "/master-data/navigation",
                                        true
                                    )}`}
                                    aria-haspopup="true"
                                    data-menu-toggle="hover"
                                >
                                    <a
                                        className="menu-link menu-toggle"
                                        to="/master-data/navigation"
                                    >
                                        <i className="menu-bullet menu-bullet-dot">
                                            <span />
                                        </i>
                                        <span className="menu-text">Navigation</span>
                                        <i className="menu-arrow" />
                                    </a>
                                    <div className="menu-submenu">
                                        <i className="menu-arrow" />
                                        <ul className="menu-subnav">
                                            {/*begin::3 Level*/}
                                            <li
                                                className={`menu-item ${getMenuItemActive(
                                                    "/master-data/navigation/bottom-navigation"
                                                )}`}
                                                aria-haspopup="true"
                                            >
                                                <a
                                                    className="menu-link"
                                                    to="/master-data/navigation/bottom-navigation"
                                                >
                                                    <i className="menu-bullet menu-bullet-dot">
                                                        <span />
                                                    </i>
                                                    <span className="menu-text">Bottom Navigation</span>
                                                </a>
                                            </li>
                                            {/*end::3 Level*/}

                                            {/*begin::3 Level*/}
                                            <li
                                                className={`menu-item ${getMenuItemActive(
                                                    "/master-data/navigation/breadcrumbs"
                                                )}`}
                                                aria-haspopup="true"
                                            >
                                                <a
                                                    className="menu-link"
                                                    to="/master-data/navigation/breadcrumbs"
                                                >
                                                    <i className="menu-bullet menu-bullet-dot">
                                                        <span />
                                                    </i>
                                                    <span className="menu-text">Breadcrumbs</span>
                                                </a>
                                            </li>
                                            {/*end::3 Level*/}

                                            {/*begin::3 Level*/}
                                            <li
                                                className={`menu-item ${getMenuItemActive(
                                                    "/master-data/navigation/drawern"
                                                )}`}
                                                aria-haspopup="true"
                                            >
                                                <a
                                                    className="menu-link"
                                                    to="/master-data/navigation/drawer"
                                                >
                                                    <i className="menu-bullet menu-bullet-dot">
                                                        <span />
                                                    </i>
                                                    <span className="menu-text">Drawers</span>
                                                </a>
                                            </li>
                                            {/*end::3 Level*/}

                                            {/*begin::3 Level*/}
                                            <li
                                                className={`menu-item ${getMenuItemActive(
                                                    "/master-data/navigation/links"
                                                )}`}
                                                aria-haspopup="true"
                                            >
                                                <a
                                                    className="menu-link"
                                                    to="/master-data/navigation/links"
                                                >
                                                    <i className="menu-bullet menu-bullet-dot">
                                                        <span />
                                                    </i>
                                                    <span className="menu-text">as</span>
                                                </a>
                                            </li>
                                            {/*end::3 Level*/}

                                            {/*begin::3 Level*/}
                                            <li
                                                className={`menu-item ${getMenuItemActive(
                                                    "/master-data/navigation/menus"
                                                )}`}
                                                aria-haspopup="true"
                                            >
                                                <a
                                                    className="menu-link"
                                                    to="/master-data/navigation/menus"
                                                >
                                                    <i className="menu-bullet menu-bullet-dot">
                                                        <span />
                                                    </i>
                                                    <span className="menu-text">Menus</span>
                                                </a>
                                            </li>
                                            {/*end::3 Level*/}

                                            {/*begin::3 Level*/}
                                            <li
                                                className={`menu-item ${getMenuItemActive(
                                                    "/master-data/navigation/steppers"
                                                )}`}
                                                aria-haspopup="true"
                                            >
                                                <a
                                                    className="menu-link"
                                                    to="/master-data/navigation/steppers"
                                                >
                                                    <i className="menu-bullet menu-bullet-dot">
                                                        <span />
                                                    </i>
                                                    <span className="menu-text">Steppers</span>
                                                </a>
                                            </li>
                                            {/*end::3 Level*/}

                                            {/*begin::3 Level*/}
                                            <li
                                                className={`menu-item ${getMenuItemActive(
                                                    "/master-data/navigation/tabs"
                                                )}`}
                                                aria-haspopup="true"
                                            >
                                                <a
                                                    className="menu-link"
                                                    to="/master-data/navigation/tabs"
                                                >
                                                    <i className="menu-bullet menu-bullet-dot">
                                                        <span />
                                                    </i>
                                                    <span className="menu-text">Tabs</span>
                                                </a>
                                            </li>
                                            {/*end::3 Level*/}
                                        </ul>
                                    </div>
                                </li>
                                {/*end::2 Level*/}

                                {/* Surfaces */}
                                {/*begin::2 Level*/}
                                <li
                                    className={`menu-item menu-item-submenu ${getMenuItemActive(
                                        "/master-data/surfaces",
                                        true
                                    )}`}
                                    aria-haspopup="true"
                                    data-menu-toggle="hover"
                                >
                                    <a
                                        className="menu-link menu-toggle"
                                        to="/master-data/surfaces"
                                    >
                                        <i className="menu-bullet menu-bullet-dot">
                                            <span />
                                        </i>
                                        <span className="menu-text">Surfaces</span>
                                        <i className="menu-arrow" />
                                    </a>
                                    <div className="menu-submenu">
                                        <i className="menu-arrow" />
                                        <ul className="menu-subnav">
                                            {/*begin::3 Level*/}
                                            <li
                                                className={`menu-item ${getMenuItemActive(
                                                    "/master-data/surfaces/app-bar"
                                                )}`}
                                                aria-haspopup="true"
                                            >
                                                <a
                                                    className="menu-link"
                                                    to="/master-data/surfaces/app-bar"
                                                >
                                                    <i className="menu-bullet menu-bullet-dot">
                                                        <span />
                                                    </i>
                                                    <span className="menu-text">App Bar</span>
                                                </a>
                                            </li>
                                            {/*end::3 Level*/}

                                            {/*begin::3 Level*/}
                                            <li
                                                className={`menu-item ${getMenuItemActive(
                                                    "/master-data/surfaces/paper"
                                                )}`}
                                                aria-haspopup="true"
                                            >
                                                <a
                                                    className="menu-link"
                                                    to="/master-data/surfaces/paper"
                                                >
                                                    <i className="menu-bullet menu-bullet-dot">
                                                        <span />
                                                    </i>
                                                    <span className="menu-text">Paper</span>
                                                </a>
                                            </li>
                                            {/*end::3 Level*/}

                                            {/*begin::3 Level*/}
                                            <li
                                                className={`menu-item ${getMenuItemActive(
                                                    "/master-data/surfaces/cards"
                                                )}`}
                                                aria-haspopup="true"
                                            >
                                                <a
                                                    className="menu-link"
                                                    to="/master-data/surfaces/cards"
                                                >
                                                    <i className="menu-bullet menu-bullet-dot">
                                                        <span />
                                                    </i>
                                                    <span className="menu-text">Cards</span>
                                                </a>
                                            </li>
                                            {/*end::3 Level*/}

                                            {/*begin::3 Level*/}
                                            <li
                                                className={`menu-item ${getMenuItemActive(
                                                    "/master-data/surfaces/expansion-panels"
                                                )}`}
                                                aria-haspopup="true"
                                            >
                                                <a
                                                    className="menu-link"
                                                    to="/master-data/surfaces/expansion-panels"
                                                >
                                                    <i className="menu-bullet menu-bullet-dot">
                                                        <span />
                                                    </i>
                                                    <span className="menu-text">Expansion Panels</span>
                                                </a>
                                            </li>
                                            {/*end::3 Level*/}
                                        </ul>
                                    </div>
                                </li>
                                {/*end::2 Level*/}

                                {/* Feedback */}
                                {/*begin::2 Level*/}
                                <li
                                    className={`menu-item menu-item-submenu ${getMenuItemActive(
                                        "/master-data/feedback",
                                        true
                                    )}`}
                                    aria-haspopup="true"
                                    data-menu-toggle="hover"
                                >
                                    <a
                                        className="menu-link menu-toggle"
                                        to="/master-data/feedback"
                                    >
                                        <i className="menu-bullet menu-bullet-dot">
                                            <span />
                                        </i>
                                        <span className="menu-text">Feedback</span>
                                        <i className="menu-arrow" />
                                    </a>
                                    <div className="menu-submenu">
                                        <i className="menu-arrow" />
                                        <ul className="menu-subnav">
                                            {/*begin::3 Level*/}
                                            <li
                                                className={`menu-item ${getMenuItemActive(
                                                    "/master-data/feedback/progress"
                                                )}`}
                                                aria-haspopup="true"
                                            >
                                                <a
                                                    className="menu-link"
                                                    to="/master-data/feedback/progress"
                                                >
                                                    <i className="menu-bullet menu-bullet-dot">
                                                        <span />
                                                    </i>
                                                    <span className="menu-text">Progress</span>
                                                </a>
                                            </li>
                                            {/*end::3 Level*/}

                                            {/*begin::3 Level*/}
                                            <li
                                                className={`menu-item ${getMenuItemActive(
                                                    "/master-data/feedback/dialogs"
                                                )}`}
                                                aria-haspopup="true"
                                            >
                                                <a
                                                    className="menu-link"
                                                    to="/master-data/feedback/dialogs"
                                                >
                                                    <i className="menu-bullet menu-bullet-dot">
                                                        <span />
                                                    </i>
                                                    <span className="menu-text">Dialogs</span>
                                                </a>
                                            </li>
                                            {/*end::3 Level*/}

                                            {/*begin::3 Level*/}
                                            <li
                                                className={`menu-item ${getMenuItemActive(
                                                    "/master-data/feedback/snackbars"
                                                )}`}
                                                aria-haspopup="true"
                                            >
                                                <a
                                                    className="menu-link"
                                                    to="/master-data/feedback/snackbars"
                                                >
                                                    <i className="menu-bullet menu-bullet-dot">
                                                        <span />
                                                    </i>
                                                    <span className="menu-text">Snackbars</span>
                                                </a>
                                            </li>
                                            {/*end::3 Level*/}
                                        </ul>
                                    </div>
                                </li>
                                {/*end::2 Level*/}

                                {/* Data Display */}
                                {/*begin::2 Level*/}
                                <li
                                    className={`menu-item menu-item-submenu ${getMenuItemActive(
                                        "/master-data/data-displays",
                                        true
                                    )}`}
                                    aria-haspopup="true"
                                    data-menu-toggle="hover"
                                >
                                    <a
                                        className="menu-link menu-toggle"
                                        to="/master-data/data-displays"
                                    >
                                        <i className="menu-bullet menu-bullet-dot">
                                            <span />
                                        </i>
                                        <span className="menu-text">Data Display</span>
                                        <i className="menu-arrow" />
                                    </a>
                                    <div className="menu-submenu">
                                        <i className="menu-arrow" />
                                        <ul className="menu-subnav">
                                            {/*begin::3 Level*/}
                                            <li
                                                className={`menu-item ${getMenuItemActive(
                                                    "/master-data/data-displays/avatars"
                                                )}`}
                                                aria-haspopup="true"
                                            >
                                                <a
                                                    className="menu-link"
                                                    to="/master-data/data-displays/avatars"
                                                >
                                                    <i className="menu-bullet menu-bullet-dot">
                                                        <span />
                                                    </i>
                                                    <span className="menu-text">Avatars</span>
                                                </a>
                                            </li>
                                            {/*end::3 Level*/}

                                            {/*begin::3 Level*/}
                                            <li
                                                className={`menu-item ${getMenuItemActive(
                                                    "/master-data/data-displays/badges"
                                                )}`}
                                                aria-haspopup="true"
                                            >
                                                <a
                                                    className="menu-link"
                                                    to="/master-data/data-displays/badges"
                                                >
                                                    <i className="menu-bullet menu-bullet-dot">
                                                        <span />
                                                    </i>
                                                    <span className="menu-text">Badges</span>
                                                </a>
                                            </li>
                                            {/*end::3 Level*/}

                                            {/*begin::3 Level*/}
                                            <li
                                                className={`menu-item ${getMenuItemActive(
                                                    "/master-data/data-displays/chips"
                                                )}`}
                                                aria-haspopup="true"
                                            >
                                                <a
                                                    className="menu-link"
                                                    to="/master-data/data-displays/chips"
                                                >
                                                    <i className="menu-bullet menu-bullet-dot">
                                                        <span />
                                                    </i>
                                                    <span className="menu-text">Chips</span>
                                                </a>
                                            </li>
                                            {/*end::3 Level*/}

                                            {/*begin::3 Level*/}
                                            <li
                                                className={`menu-item ${getMenuItemActive(
                                                    "/master-data/data-displays/dividers"
                                                )}`}
                                                aria-haspopup="true"
                                            >
                                                <a
                                                    className="menu-link"
                                                    to="/master-data/data-displays/dividers"
                                                >
                                                    <i className="menu-bullet menu-bullet-dot">
                                                        <span />
                                                    </i>
                                                    <span className="menu-text">Dividers</span>
                                                </a>
                                            </li>
                                            {/*end::3 Level*/}

                                            {/*begin::3 Level*/}
                                            <li
                                                className={`menu-item ${getMenuItemActive(
                                                    "/master-data/data-displays/icons"
                                                )}`}
                                                aria-haspopup="true"
                                            >
                                                <a
                                                    className="menu-link"
                                                    to="/master-data/data-displays/icons"
                                                >
                                                    <i className="menu-bullet menu-bullet-dot">
                                                        <span />
                                                    </i>
                                                    <span className="menu-text">Icons</span>
                                                </a>
                                            </li>
                                            {/*end::3 Level*/}

                                            {/*begin::3 Level*/}
                                            <li
                                                className={`menu-item ${getMenuItemActive(
                                                    "/master-data/data-displays/lists"
                                                )}`}
                                                aria-haspopup="true"
                                            >
                                                <a
                                                    className="menu-link"
                                                    to="/master-data/data-displays/lists"
                                                >
                                                    <i className="menu-bullet menu-bullet-dot">
                                                        <span />
                                                    </i>
                                                    <span className="menu-text">Lists</span>
                                                </a>
                                            </li>
                                            {/*end::3 Level*/}

                                            {/*begin::3 Level*/}
                                            <li
                                                className={`menu-item ${getMenuItemActive(
                                                    "/master-data/data-displays/tables"
                                                )}`}
                                                aria-haspopup="true"
                                            >
                                                <a
                                                    className="menu-link"
                                                    to="/master-data/data-displays/tables"
                                                >
                                                    <i className="menu-bullet menu-bullet-dot">
                                                        <span />
                                                    </i>
                                                    <span className="menu-text">Tables</span>
                                                </a>
                                            </li>
                                            {/*end::3 Level*/}

                                            {/*begin::3 Level*/}
                                            <li
                                                className={`menu-item ${getMenuItemActive(
                                                    "/master-data/data-displays/tooltips"
                                                )}`}
                                                aria-haspopup="true"
                                            >
                                                <a
                                                    className="menu-link"
                                                    to="/master-data/data-displays/tooltips"
                                                >
                                                    <i className="menu-bullet menu-bullet-dot">
                                                        <span />
                                                    </i>
                                                    <span className="menu-text">Tooltips</span>
                                                </a>
                                            </li>
                                            {/*end::3 Level*/}

                                            {/*begin::3 Level*/}
                                            <li
                                                className={`menu-item ${getMenuItemActive(
                                                    "/master-data/data-displays/typography"
                                                )}`}
                                                aria-haspopup="true"
                                            >
                                                <a
                                                    className="menu-link"
                                                    to="/master-data/data-displays/typography"
                                                >
                                                    <i className="menu-bullet menu-bullet-dot">
                                                        <span />
                                                    </i>
                                                    <span className="menu-text">Typography</span>
                                                </a>
                                            </li>
                                            {/*end::3 Level*/}
                                        </ul>
                                    </div>
                                </li>
                                {/*end::2 Level*/}

                                {/* Utils */}
                                {/*begin::2 Level*/}
                                <li
                                    className={`menu-item menu-item-submenu ${getMenuItemActive(
                                        "/master-data/utils",
                                        true
                                    )}`}
                                    aria-haspopup="true"
                                    data-menu-toggle="hover"
                                >
                                    <a
                                        className="menu-link menu-toggle"
                                        to="/master-data/utils"
                                    >
                                        <i className="menu-bullet menu-bullet-dot">
                                            <span />
                                        </i>
                                        <span className="menu-text">Utils</span>
                                        <i className="menu-arrow" />
                                    </a>
                                    <div className="menu-submenu">
                                        <i className="menu-arrow" />
                                        <ul className="menu-subnav">
                                            {/*begin::3 Level*/}
                                            <li
                                                className={`menu-item ${getMenuItemActive(
                                                    "/master-data/utils/click-away-listener"
                                                )}`}
                                                aria-haspopup="true"
                                            >
                                                <a
                                                    className="menu-link"
                                                    to="/master-data/utils/click-away-listener"
                                                >
                                                    <i className="menu-bullet menu-bullet-dot">
                                                        <span />
                                                    </i>
                                                    <span className="menu-text">Click Away Listener</span>
                                                </a>
                                            </li>
                                            {/*end::3 Level*/}

                                            {/*begin::3 Level*/}
                                            <li
                                                className={`menu-item ${getMenuItemActive(
                                                    "/master-data/utils/no-ssr"
                                                )}`}
                                                aria-haspopup="true"
                                            >
                                                <a
                                                    className="menu-link"
                                                    to="/master-data/utils/no-ssr"
                                                >
                                                    <i className="menu-bullet menu-bullet-dot">
                                                        <span />
                                                    </i>
                                                    <span className="menu-text">No SSR</span>
                                                </a>
                                            </li>
                                            {/*end::3 Level*/}

                                            {/*begin::3 Level*/}
                                            <li
                                                className={`menu-item ${getMenuItemActive(
                                                    "/master-data/utils/popover"
                                                )}`}
                                                aria-haspopup="true"
                                            >
                                                <a
                                                    className="menu-link"
                                                    to="/master-data/utils/popover"
                                                >
                                                    <i className="menu-bullet menu-bullet-dot">
                                                        <span />
                                                    </i>
                                                    <span className="menu-text">Popover</span>
                                                </a>
                                            </li>
                                            {/*end::3 Level*/}

                                            {/*begin::3 Level*/}
                                            <li
                                                className={`menu-item ${getMenuItemActive(
                                                    "/master-data/utils/popper"
                                                )}`}
                                                aria-haspopup="true"
                                            >
                                                <a
                                                    className="menu-link"
                                                    to="/master-data/utils/popper"
                                                >
                                                    <i className="menu-bullet menu-bullet-dot">
                                                        <span />
                                                    </i>
                                                    <span className="menu-text">Popper</span>
                                                </a>
                                            </li>
                                            {/*end::3 Level*/}

                                            {/*begin::3 Level*/}
                                            <li
                                                className={`menu-item ${getMenuItemActive(
                                                    "/master-data/utils/portal"
                                                )}`}
                                                aria-haspopup="true"
                                            >
                                                <a
                                                    className="menu-link"
                                                    to="/master-data/utils/portal"
                                                >
                                                    <i className="menu-bullet menu-bullet-dot">
                                                        <span />
                                                    </i>
                                                    <span className="menu-text">Portal</span>
                                                </a>
                                            </li>
                                            {/*end::3 Level*/}

                                            {/*begin::3 Level*/}
                                            <li
                                                className={`menu-item ${getMenuItemActive(
                                                    "/master-data/utils/transitions"
                                                )}`}
                                                aria-haspopup="true"
                                            >
                                                <a
                                                    className="menu-link"
                                                    to="/master-data/utils/transitions"
                                                >
                                                    <i className="menu-bullet menu-bullet-dot">
                                                        <span />
                                                    </i>
                                                    <span className="menu-text">Transitions</span>
                                                </a>
                                            </li>
                                            {/*end::3 Level*/}

                                            {/*begin::3 Level*/}
                                            <li
                                                className={`menu-item ${getMenuItemActive(
                                                    "/master-data/utils/use-media-query"
                                                )}`}
                                                aria-haspopup="true"
                                            >
                                                <a
                                                    className="menu-link"
                                                    to="/master-data/utils/use-media-query"
                                                >
                                                    <i className="menu-bullet menu-bullet-dot">
                                                        <span />
                                                    </i>
                                                    <span className="menu-text">useMediaQuery</span>
                                                </a>
                                            </li>
                                            {/*end::3 Level*/}
                                        </ul>
                                    </div>
                                </li>
                                {/*end::2 Level*/}

                                {/* Layout */}
                                {/*begin::2 Level*/}
                                <li
                                    className={`menu-item menu-item-submenu ${getMenuItemActive(
                                        "/master-data/layout",
                                        true
                                    )}`}
                                    aria-haspopup="true"
                                    data-menu-toggle="hover"
                                >
                                    <a
                                        className="menu-link menu-toggle"
                                        to="/master-data/layout"
                                    >
                                        <i className="menu-bullet menu-bullet-dot">
                                            <span />
                                        </i>
                                        <span className="menu-text">Layout</span>
                                        <i className="menu-arrow" />
                                    </a>
                                    <div className="menu-submenu">
                                        <i className="menu-arrow" />
                                        <ul className="menu-subnav">
                                            {/*begin::3 Level*/}
                                            <li
                                                className={`menu-item ${getMenuItemActive(
                                                    "/master-data/layout/box"
                                                )}`}
                                                aria-haspopup="true"
                                            >
                                                <a
                                                    className="menu-link"
                                                    to="/master-data/layout/box"
                                                >
                                                    <i className="menu-bullet menu-bullet-dot">
                                                        <span />
                                                    </i>
                                                    <span className="menu-text">Box</span>
                                                </a>
                                            </li>
                                            {/*end::3 Level*/}

                                            {/*begin::3 Level*/}
                                            <li
                                                className={`menu-item ${getMenuItemActive(
                                                    "/master-data/layout/container"
                                                )}`}
                                                aria-haspopup="true"
                                            >
                                                <a
                                                    className="menu-link"
                                                    to="/master-data/layout/container"
                                                >
                                                    <i className="menu-bullet menu-bullet-dot">
                                                        <span />
                                                    </i>
                                                    <span className="menu-text">Container</span>
                                                </a>
                                            </li>
                                            {/*end::3 Level*/}

                                            {/*begin::3 Level*/}
                                            <li
                                                className={`menu-item ${getMenuItemActive(
                                                    "/master-data/layout/grid"
                                                )}`}
                                                aria-haspopup="true"
                                            >
                                                <a
                                                    className="menu-link"
                                                    to="/master-data/layout/grid"
                                                >
                                                    <i className="menu-bullet menu-bullet-dot">
                                                        <span />
                                                    </i>
                                                    <span className="menu-text">Grid</span>
                                                </a>
                                            </li>
                                            {/*end::3 Level*/}

                                            {/*begin::3 Level*/}
                                            <li
                                                className={`menu-item ${getMenuItemActive(
                                                    "/master-data/layout/grid-list"
                                                )}`}
                                                aria-haspopup="true"
                                            >
                                                <a
                                                    className="menu-link"
                                                    to="/master-data/layout/grid-list"
                                                >
                                                    <i className="menu-bullet menu-bullet-dot">
                                                        <span />
                                                    </i>
                                                    <span className="menu-text">Grid list</span>
                                                </a>
                                            </li>
                                            {/*end::3 Level*/}

                                            {/*begin::3 Level*/}
                                            <li
                                                className={`menu-item ${getMenuItemActive(
                                                    "/master-data/layout/hidden"
                                                )}`}
                                                aria-haspopup="true"
                                            >
                                                <a
                                                    className="menu-link"
                                                    to="/master-data/layout/hidden"
                                                >
                                                    <i className="menu-bullet menu-bullet-dot">
                                                        <span />
                                                    </i>
                                                    <span className="menu-text">Hidden</span>
                                                </a>
                                            </li>
                                            {/*end::3 Level*/}
                                        </ul>
                                    </div>
                                </li>
                                {/*end::2 Level*/}
                            </ul>
                        </div>
                    </li>
                    {/*end::1 Level*/}

                    {/* Bootstrap */}
                    {/*begin::1 Level*/}
                    <li
                        className={`menu-item menu-item-submenu ${getMenuItemActive(
                            "/react-bootstrap",
                            true
                        )}`}
                        aria-haspopup="true"
                        data-menu-toggle="hover"
                    >
                        <a className="menu-link menu-toggle" to="/react-bootstrap">
                            <span className="svg-icon menu-icon">
                                <SVG src={("/media/svg/icons/Shopping/Box2.svg")} />
                            </span>
                            <span className="menu-text">Bootstrap</span>
                            <i className="menu-arrow" />
                        </a>
                        <div className="menu-submenu ">
                            <ul className="menu-subnav">
                                <ul className="menu-subnav">
                                    <li
                                        className="menu-item  menu-item-parent"
                                        aria-haspopup="true"
                                    >
                                        <span className="menu-link">
                                            <span className="menu-text">Bootstrap</span>
                                        </span>
                                    </li>

                                    {/*begin::2 Level*/}
                                    <li
                                        className={`menu-item ${getMenuItemActive(
                                            "/react-bootstrap/alert"
                                        )}`}
                                        aria-haspopup="true"
                                    >
                                        <a className="menu-link" to="/react-bootstrap/alert">
                                            <i className="menu-bullet menu-bullet-dot">
                                                <span />
                                            </i>
                                            <span className="menu-text">Alerts</span>
                                        </a>
                                    </li>
                                    {/*end::2 Level*/}

                                    {/*begin::2 Level*/}
                                    <li
                                        className={`menu-item ${getMenuItemActive(
                                            "/react-bootstrap/badge"
                                        )}`}
                                        aria-haspopup="true"
                                    >
                                        <a className="menu-link" to="/react-bootstrap/badge">
                                            <i className="menu-bullet menu-bullet-dot">
                                                <span />
                                            </i>
                                            <span className="menu-text">Badge</span>
                                        </a>
                                    </li>
                                    {/*end::2 Level*/}

                                    {/*begin::2 Level*/}
                                    <li
                                        className={`menu-item ${getMenuItemActive(
                                            "/react-bootstrap/breadcrumb"
                                        )}`}
                                        aria-haspopup="true"
                                    >
                                        <a
                                            className="menu-link"
                                            to="/react-bootstrap/breadcrumb"
                                        >
                                            <i className="menu-bullet menu-bullet-dot">
                                                <span />
                                            </i>
                                            <span className="menu-text">Breadcrumb</span>
                                        </a>
                                    </li>
                                    {/*end::2 Level*/}

                                    {/*begin::2 Level*/}
                                    <li
                                        className={`menu-item ${getMenuItemActive(
                                            "/react-bootstrap/buttons"
                                        )}`}
                                        aria-haspopup="true"
                                    >
                                        <a className="menu-link" to="/react-bootstrap/buttons">
                                            <i className="menu-bullet menu-bullet-dot">
                                                <span />
                                            </i>
                                            <span className="menu-text">Buttons</span>
                                        </a>
                                    </li>
                                    {/*end::2 Level*/}

                                    {/*begin::2 Level*/}
                                    <li
                                        className={`menu-item ${getMenuItemActive(
                                            "/react-bootstrap/button-group"
                                        )}`}
                                        aria-haspopup="true"
                                    >
                                        <a
                                            className="menu-link"
                                            to="/react-bootstrap/button-group"
                                        >
                                            <i className="menu-bullet menu-bullet-dot">
                                                <span />
                                            </i>
                                            <span className="menu-text">Button Group</span>
                                        </a>
                                    </li>
                                    {/*end::2 Level*/}

                                    {/*begin::2 Level*/}
                                    <li
                                        className={`menu-item ${getMenuItemActive(
                                            "/react-bootstrap/cards"
                                        )}`}
                                        aria-haspopup="true"
                                    >
                                        <a className="menu-link" to="/react-bootstrap/cards">
                                            <i className="menu-bullet menu-bullet-dot">
                                                <span />
                                            </i>
                                            <span className="menu-text">Cards</span>
                                        </a>
                                    </li>
                                    {/*end::2 Level*/}

                                    {/*begin::2 Level*/}
                                    <li
                                        className={`menu-item ${getMenuItemActive(
                                            "/react-bootstrap/carousel"
                                        )}`}
                                        aria-haspopup="true"
                                    >
                                        <a className="menu-link" to="/react-bootstrap/carousel">
                                            <i className="menu-bullet menu-bullet-dot">
                                                <span />
                                            </i>
                                            <span className="menu-text">Carousel</span>
                                        </a>
                                    </li>
                                    {/*end::2 Level*/}

                                    {/*begin::2 Level*/}
                                    <li
                                        className={`menu-item ${getMenuItemActive(
                                            "/react-bootstrap/dropdowns"
                                        )}`}
                                        aria-haspopup="true"
                                    >
                                        <a
                                            className="menu-link"
                                            to="/react-bootstrap/dropdowns"
                                        >
                                            <i className="menu-bullet menu-bullet-dot">
                                                <span />
                                            </i>
                                            <span className="menu-text">Dropdowns</span>
                                        </a>
                                    </li>
                                    {/*end::2 Level*/}

                                    {/*begin::2 Level*/}
                                    <li
                                        className={`menu-item ${getMenuItemActive(
                                            "/react-bootstrap/forms"
                                        )}`}
                                        aria-haspopup="true"
                                    >
                                        <a className="menu-link" to="/react-bootstrap/forms">
                                            <i className="menu-bullet menu-bullet-dot">
                                                <span />
                                            </i>
                                            <span className="menu-text">Forms</span>
                                        </a>
                                    </li>
                                    {/*end::2 Level*/}

                                    {/*begin::2 Level*/}
                                    <li
                                        className={`menu-item ${getMenuItemActive(
                                            "/react-bootstrap/input-group"
                                        )}`}
                                        aria-haspopup="true"
                                    >
                                        <a
                                            className="menu-link"
                                            to="/react-bootstrap/input-group"
                                        >
                                            <i className="menu-bullet menu-bullet-dot">
                                                <span />
                                            </i>
                                            <span className="menu-text">Input Group</span>
                                        </a>
                                    </li>
                                    {/*end::2 Level*/}

                                    {/*begin::2 Level*/}
                                    <li
                                        className={`menu-item ${getMenuItemActive(
                                            "/react-bootstrap/images"
                                        )}`}
                                        aria-haspopup="true"
                                    >
                                        <a className="menu-link" to="/react-bootstrap/images">
                                            <i className="menu-bullet menu-bullet-dot">
                                                <span />
                                            </i>
                                            <span className="menu-text">Images</span>
                                        </a>
                                    </li>
                                    {/*end::2 Level*/}

                                    {/*begin::2 Level*/}
                                    <li
                                        className={`menu-item ${getMenuItemActive(
                                            "/react-bootstrap/figures"
                                        )}`}
                                        aria-haspopup="true"
                                    >
                                        <a className="menu-link" to="/react-bootstrap/figures">
                                            <i className="menu-bullet menu-bullet-dot">
                                                <span />
                                            </i>
                                            <span className="menu-text">Figures</span>
                                        </a>
                                    </li>
                                    {/*end::2 Level*/}

                                    {/*begin::2 Level*/}
                                    <li
                                        className={`menu-item ${getMenuItemActive(
                                            "/react-bootstrap/jumbotron"
                                        )}`}
                                        aria-haspopup="true"
                                    >
                                        <a
                                            className="menu-link"
                                            to="/react-bootstrap/jumbotron"
                                        >
                                            <i className="menu-bullet menu-bullet-dot">
                                                <span />
                                            </i>
                                            <span className="menu-text">Jumbotron</span>
                                        </a>
                                    </li>
                                    {/*end::2 Level*/}

                                    {/*begin::2 Level*/}
                                    <li
                                        className={`menu-item ${getMenuItemActive(
                                            "/react-bootstrap/list-group"
                                        )}`}
                                        aria-haspopup="true"
                                    >
                                        <a
                                            className="menu-link"
                                            to="/react-bootstrap/list-group"
                                        >
                                            <i className="menu-bullet menu-bullet-dot">
                                                <span />
                                            </i>
                                            <span className="menu-text">List group</span>
                                        </a>
                                    </li>
                                    {/*end::2 Level*/}

                                    {/*begin::2 Level*/}
                                    <li
                                        className={`menu-item ${getMenuItemActive(
                                            "/react-bootstrap/modal"
                                        )}`}
                                        aria-haspopup="true"
                                    >
                                        <a className="menu-link" to="/react-bootstrap/modal">
                                            <i className="menu-bullet menu-bullet-dot">
                                                <span />
                                            </i>
                                            <span className="menu-text">Modal</span>
                                        </a>
                                    </li>
                                    {/*end::2 Level*/}

                                    {/*begin::2 Level*/}
                                    <li
                                        className={`menu-item ${getMenuItemActive(
                                            "/react-bootstrap/navs"
                                        )}`}
                                        aria-haspopup="true"
                                    >
                                        <a className="menu-link" to="/react-bootstrap/navs">
                                            <i className="menu-bullet menu-bullet-dot">
                                                <span />
                                            </i>
                                            <span className="menu-text">Navs</span>
                                        </a>
                                    </li>
                                    {/*end::2 Level*/}

                                    {/*begin::2 Level*/}
                                    <li
                                        className={`menu-item ${getMenuItemActive(
                                            "/react-bootstrap/navbar"
                                        )}`}
                                        aria-haspopup="true"
                                    >
                                        <a className="menu-link" to="/react-bootstrap/navbar">
                                            <i className="menu-bullet menu-bullet-dot">
                                                <span />
                                            </i>
                                            <span className="menu-text">Navbar</span>
                                        </a>
                                    </li>
                                    {/*end::2 Level*/}

                                    {/*begin::2 Level*/}
                                    <li
                                        className={`menu-item ${getMenuItemActive(
                                            "/react-bootstrap/overlays"
                                        )}`}
                                        aria-haspopup="true"
                                    >
                                        <a className="menu-link" to="/react-bootstrap/overlays">
                                            <i className="menu-bullet menu-bullet-dot">
                                                <span />
                                            </i>
                                            <span className="menu-text">Overlays</span>
                                        </a>
                                    </li>
                                    {/*end::2 Level*/}

                                    {/*begin::2 Level*/}
                                    <li
                                        className={`menu-item ${getMenuItemActive(
                                            "/react-bootstrap/pagination"
                                        )}`}
                                        aria-haspopup="true"
                                    >
                                        <a
                                            className="menu-link"
                                            to="/react-bootstrap/pagination"
                                        >
                                            <i className="menu-bullet menu-bullet-dot">
                                                <span />
                                            </i>
                                            <span className="menu-text">Pagination</span>
                                        </a>
                                    </li>
                                    {/*end::2 Level*/}

                                    {/*begin::2 Level*/}
                                    <li
                                        className={`menu-item ${getMenuItemActive(
                                            "/react-bootstrap/popovers"
                                        )}`}
                                        aria-haspopup="true"
                                    >
                                        <a className="menu-link" to="/react-bootstrap/popovers">
                                            <i className="menu-bullet menu-bullet-dot">
                                                <span />
                                            </i>
                                            <span className="menu-text">Popovers</span>
                                        </a>
                                    </li>
                                    {/*end::2 Level*/}

                                    {/*begin::2 Level*/}
                                    <li
                                        className={`menu-item ${getMenuItemActive(
                                            "/react-bootstrap/progress"
                                        )}`}
                                        aria-haspopup="true"
                                    >
                                        <a className="menu-link" to="/react-bootstrap/progress">
                                            <i className="menu-bullet menu-bullet-dot">
                                                <span />
                                            </i>
                                            <span className="menu-text">Progress</span>
                                        </a>
                                    </li>
                                    {/*end::2 Level*/}

                                    {/*begin::2 Level*/}
                                    <li
                                        className={`menu-item ${getMenuItemActive(
                                            "/react-bootstrap/spinners"
                                        )}`}
                                        aria-haspopup="true"
                                    >
                                        <a className="menu-link" to="/react-bootstrap/spinners">
                                            <i className="menu-bullet menu-bullet-dot">
                                                <span />
                                            </i>
                                            <span className="menu-text">Spinners</span>
                                        </a>
                                    </li>
                                    {/*end::2 Level*/}

                                    {/*begin::2 Level*/}
                                    <li
                                        className={`menu-item ${getMenuItemActive(
                                            "/react-bootstrap/table"
                                        )}`}
                                        aria-haspopup="true"
                                    >
                                        <a className="menu-link" to="/react-bootstrap/table">
                                            <i className="menu-bullet menu-bullet-dot">
                                                <span />
                                            </i>
                                            <span className="menu-text">Table</span>
                                        </a>
                                    </li>
                                    {/*end::2 Level*/}

                                    {/*begin::2 Level*/}
                                    <li
                                        className={`menu-item ${getMenuItemActive(
                                            "/react-bootstrap/tabs"
                                        )}`}
                                        aria-haspopup="true"
                                    >
                                        <a className="menu-link" to="/react-bootstrap/tabs">
                                            <i className="menu-bullet menu-bullet-dot">
                                                <span />
                                            </i>
                                            <span className="menu-text">Tabs</span>
                                        </a>
                                    </li>
                                    {/*end::2 Level*/}

                                    {/*begin::2 Level*/}
                                    <li
                                        className={`menu-item ${getMenuItemActive(
                                            "/react-bootstrap/tooltips"
                                        )}`}
                                        aria-haspopup="true"
                                    >
                                        <a className="menu-link" to="/react-bootstrap/tooltips">
                                            <i className="menu-bullet menu-bullet-dot">
                                                <span />
                                            </i>
                                            <span className="menu-text">Tooltips</span>
                                        </a>
                                    </li>
                                    {/*end::2 Level*/}

                                    {/*begin::2 Level*/}
                                    <li
                                        className={`menu-item ${getMenuItemActive(
                                            "/react-bootstrap/toasts"
                                        )}`}
                                        aria-haspopup="true"
                                    >
                                        <a className="menu-link" to="/react-bootstrap/toasts">
                                            <i className="menu-bullet menu-bullet-dot">
                                                <span />
                                            </i>
                                            <span className="menu-text">Toasts</span>
                                        </a>
                                    </li>
                                    {/*end::2 Level*/}
                                </ul>
                            </ul>
                        </div>
                    </li>
                    {/*end::1 Level*/}

                    {/* Applications */}
                    {/* begin::section */}
                    <li className="menu-section ">
                        <h4 className="menu-text">Applications</h4>
                        <i className="menu-icon flaticon-more-v2"></i>
                    </li>
                    {/* end:: section */}

                    {/* eCommerce */}
                    {/*begin::1 Level*/}
                    <li
                        className={`menu-item menu-item-submenu ${getMenuItemActive(
                            "/e-commerce",
                            true
                        )}`}
                        aria-haspopup="true"
                        data-menu-toggle="hover"
                    >
                        <a className="menu-link menu-toggle" to="/e-commerce">
                            <span className="svg-icon menu-icon">
                                <SVG src={("/media/svg/icons/Shopping/Bag2.svg")} />
                            </span>
                            <span className="menu-text">eCommerce</span>
                        </a>
                        <div className="menu-submenu">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                                <li className="menu-item menu-item-parent" aria-haspopup="true">
                                    <span className="menu-link">
                                        <span className="menu-text">eCommerce</span>
                                    </span>
                                </li>
                                {/*begin::2 Level*/}
                                <li
                                    className={`menu-item ${getMenuItemActive(
                                        "/e-commerce/customers"
                                    )}`}
                                    aria-haspopup="true"
                                >
                                    <a className="menu-link" to="/e-commerce/customers">
                                        <i className="menu-bullet menu-bullet-dot">
                                            <span />
                                        </i>
                                        <span className="menu-text">Customers</span>
                                    </a>
                                </li>
                                {/*end::2 Level*/}
                                {/*begin::2 Level*/}
                                <li
                                    className={`menu-item ${getMenuItemActive(
                                        "/e-commerce/products"
                                    )}`}
                                    aria-haspopup="true"
                                >
                                    <a className="menu-link" to="/e-commerce/products">
                                        <i className="menu-bullet menu-bullet-dot">
                                            <span />
                                        </i>
                                        <span className="menu-text">Products</span>
                                    </a>
                                </li>
                                {/*end::2 Level*/}
                            </ul>
                        </div>
                    </li>
                    {/*end::1 Level*/}

                    {/*begin::1 Level*/}
                    <li
                        className={`menu-item ${getMenuItemActive("/user-profile", false)}`}
                        aria-haspopup="true"
                    >
                        <a className="menu-link" to="/user-profile">
                            <span className="svg-icon menu-icon">
                                <SVG
                                    src={(
                                        "/media/svg/icons/Communication/Add-user.svg"
                                    )}
                                />
                            </span>
                            <span className="menu-text">User Profile</span>
                        </a>
                    </li>
                    {/*end::1 Level*/}

                    {/* Custom */}
                    {/* begin::section */}
                    <li className="menu-section ">
                        <h4 className="menu-text">Custom</h4>
                        <i className="menu-icon flaticon-more-v2"></i>
                    </li>
                    {/* end:: section */}

                    {/* Error Pages */}
                    {/*begin::1 Level*/}
                    <li
                        className={`menu-item menu-item-submenu ${getMenuItemActive(
                            "/error",
                            true
                        )}`}
                        aria-haspopup="true"
                        data-menu-toggle="hover"
                    >
                        <a className="menu-link menu-toggle" to="/error">
                            <span className="svg-icon menu-icon">
                                <SVG
                                    src={("/media/svg/icons/Code/Error-circle.svg")}
                                />
                            </span>
                            <span className="menu-text">Error Pages</span>
                            <i className="menu-arrow" />
                        </a>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                                <li className="menu-item  menu-item-parent" aria-haspopup="true">
                                    <span className="menu-link">
                                        <span className="menu-text">Error Pages</span>
                                    </span>
                                </li>

                                {/*begin::2 Level*/}
                                <li
                                    className={`menu-item ${getMenuItemActive("/error/error-v1")}`}
                                    aria-haspopup="true"
                                >
                                    <a className="menu-link" to="/error/error-v1">
                                        <i className="menu-bullet menu-bullet-dot">
                                            <span />
                                        </i>
                                        <span className="menu-text">Error Page - 1</span>
                                    </a>
                                </li>
                                {/*end::2 Level*/}

                                {/*begin::2 Level*/}
                                <li
                                    className={`menu-item ${getMenuItemActive("/error/error-v2")}`}
                                    aria-haspopup="true"
                                >
                                    <a className="menu-link" to="/error/error-v2">
                                        <i className="menu-bullet menu-bullet-dot">
                                            <span />
                                        </i>
                                        <span className="menu-text">Error Page -2</span>
                                    </a>
                                </li>
                                {/*end::2 Level*/}

                                {/*begin::2 Level*/}
                                <li
                                    className={`menu-item ${getMenuItemActive("/error/error-v3")}`}
                                    aria-haspopup="true"
                                >
                                    <a className="menu-link" to="/error/error-v3">
                                        <i className="menu-bullet menu-bullet-dot">
                                            <span />
                                        </i>
                                        <span className="menu-text">Error Page - 3</span>
                                    </a>
                                </li>
                                {/*end::2 Level*/}

                                {/*begin::2 Level*/}
                                <li
                                    className={`menu-item ${getMenuItemActive("/error/error-v4")}`}
                                    aria-haspopup="true"
                                >
                                    <a className="menu-link" to="/error/error-v4">
                                        <i className="menu-bullet menu-bullet-dot">
                                            <span />
                                        </i>
                                        <span className="menu-text">Error Page - 4</span>
                                    </a>
                                </li>
                                {/*end::2 Level*/}

                                {/*begin::2 Level*/}
                                <li
                                    className={`menu-item ${getMenuItemActive("/error/error-v5")}`}
                                    aria-haspopup="true"
                                >
                                    <a className="menu-link" to="/error/error-v5">
                                        <i className="menu-bullet menu-bullet-dot">
                                            <span />
                                        </i>
                                        <span className="menu-text">Error Page - 5</span>
                                    </a>
                                </li>
                                {/*end::2 Level*/}

                                {/*begin::2 Level*/}
                                <li
                                    className={`menu-item ${getMenuItemActive("/error/error-v6")}`}
                                    aria-haspopup="true"
                                >
                                    <a className="menu-link" to="/error/error-v6">
                                        <i className="menu-bullet menu-bullet-dot">
                                            <span />
                                        </i>
                                        <span className="menu-text">Error Page - 6</span>
                                    </a>
                                </li>
                                {/*end::2 Level*/}
                            </ul>
                        </div>
                    </li>
                    {/*end::1 Level*/}
                </ul>
                {/*end::Menu Nav*/}
            </div>
        </>)

}

export default Sidebar