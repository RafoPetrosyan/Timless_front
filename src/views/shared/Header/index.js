import React from "react";
import {Dropdown, Popover, Space} from "antd";
import {v4 as uniqueId} from "uuid";
import {Link, NavLink} from "react-router-dom";
import {CloseOutlined, MenuOutlined} from "@ant-design/icons";

import Porch from "assets/svg/Porch";
import Timeless from "assets/svg/Timeless";
import MobileMenu from "views/shared/Header/MobileMenu";
import useContainer from "./hook";
import 'antd/dist/antd.min.css';
import "./style.scss";

const Header = () => {
    const { menuItems, dropDownMenu, pathname, dropDownVisible, handleDropDownOpen, onMenuOpenChange, mobileMenuVisible } = useContainer();

    return (
        <>
            <div className="header">
                <div className='content'>
                    <div className='iconDiv'>
                        <Timeless width={135} height={71} fill="#FFCC59" />
                    </div>
                    <div className='navLinks'>
                        {menuItems.map(item => (Boolean(item.children.length) ?
                                <Dropdown
                                    onOpenChange={(e) => handleDropDownOpen(e, item.name)}
                                    open={dropDownVisible?.[item.name] || false}
                                    menu={{items: dropDownMenu(item?.children)}}
                                    key={uniqueId()}
                                    className={pathname === item.to ? "activeNavLink" : "navLink"}
                                >
                                    <div className="navLinkItem">
                                        <NavLink to={item.to} className={({isActive}) => isActive ? 'activeNavLink' : 'navLink' }>
                                            {item.name}
                                            <Porch fill="white" deg={180} width={21} height={38} />
                                        </NavLink>
                                        <div className={pathname === item.to || dropDownVisible?.[item.name] ? 'borderBottomActive' : 'borderBottom'}/>
                                    </div>
                                </Dropdown> :
                                <div className="navLinkItem" key={uniqueId()}>
                                    <NavLink to={item.to} className={({isActive}) => isActive ? 'activeNavLink' : 'navLink' }>
                                        <Space>
                                            {item.name}
                                        </Space>
                                    </NavLink>
                                    <div className={pathname === item.to ? 'borderBottomActive' : 'borderBottom'}/>
                                </div>
                        ))}
                    </div>
                    <div className="searchInput"></div>
                </div>
                <div className="mobileMenu">
                    <Link to='/'>
                        <Timeless width={70} height={37} fill="#FFCC59" />
                    </Link>
                        {mobileMenuVisible ?
                            <CloseOutlined className="mobileMenuIcon" onClick={onMenuOpenChange} /> :
                            <MenuOutlined className="mobileMenuIcon" onClick={onMenuOpenChange} />}
                </div>
                {mobileMenuVisible && <MobileMenu menuItems={menuItems} />}
            </div>
        </>
    )
};

export default Header;