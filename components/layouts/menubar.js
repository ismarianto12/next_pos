import React from "react";
import Menuitem from '../menu'
import Link from "next/link"
import * as Icon from 'react-feather'
import { useRouter } from "next/router";

class MenuBar extends React.Component {

    constructor(props) {
        super(props)

        //   console.log(props.router.query.loc)

        this.state = {
            group: false,
            // loc: props.router.query.loc,
            loaded: false
        };

    }
    state = {};

    handleClick(item) {

        // const style = {
        //     marginRight: 10,
        //     color: this.state.loc.asPath === href ? 'red' : 'black',
        // } 
        // console.log(style)
        this.setState(prevState => ({ [item]: !prevState[item] }))
    }


    handler = children => {
        const { state } = this;
        // const style = subOption.children ? '' : 'background:red';

        return children.map((subOption, ind) => {
            // if (typeof subOption.group !== 'undefined') {
            //     //    const style = true;
            //     this.state.setState({
            //         style: true,
            //     })
            // } else {
            //     //    const style = false;
            //     this.state.setState({
            //         style: false,
            //     })
            // }
            // console.log(this.state.style)
            if (!subOption.children) {
                //  const isset = (subOption.group) => typeof ref !== 'undefined'
                if (typeof subOption.group !== 'undefined') {
                    return (
                        <>
                            <li
                                className={`${subOption.children ? 'menu-item-submenu' : 'menu-item __warna'}`}
                                aria-haspopup="true"
                                style={{ 'background': 'rgb(102 102 102)' }}
                            >
                                <Link className="menu-link" href={`${subOption.url}`}>


                                    <a href="#" className={"menu-link"}>
                                        <span className="svg-icon menu-icon">
                                            {subOption.icon}
                                        </span>
                                        <span className="menu-text"> {subOption.name}</span>
                                    </a>



                                </Link>
                            </li>

                        </>
                    );
                } else {
                    return (
                        <>
                            <li
                                className={`${subOption.children ? 'menu-item-submenu' : 'menu-item __warna'}`}
                                aria-haspopup="true"
                            >
                                <Link className="menu-link" href={`${subOption.url}`}  >


                                    <a href="#" className={"menu-link"}>
                                        <span className="svg-icon menu-icon">
                                            {subOption.icon}
                                        </span>
                                        <span className="menu-text">  {subOption.name}</span>
                                    </a>



                                </Link>
                            </li>

                        </>
                    );
                }

            }

            return (

                <li
                    className={`menu-item menu-item-submenu ${state[subOption.name] ? 'menu-item-open' : ''}`}
                    aria-haspopup="true"
                    data-menu-toggle="hover"
                    onClick={() => this.handleClick(subOption.name)}
                >
                    <a
                        className="menu-link menu-toggle"

                    >
                        <i className="menu-bullet menu-bullet-dot">
                            {subOption.icon}
                        </i>
                        <span className="menu-text">{subOption.name}</span>

                        {state[subOption.name] ?  <Icon.ArrowDown /> :  <Icon.ArrowRight />}
                        
                    </a>
                    <div className="menu-submenu">

                        <ul className="menu-subnav">

                            {this.handler(subOption.children)}

                        </ul>
                    </div>
                </li>
            );
        });
    };

    render() {
        return this.handler(Menuitem);
    }


}

export default MenuBar;
