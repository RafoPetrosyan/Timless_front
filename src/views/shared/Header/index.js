import React from "react";
import {Dropdown, Space} from "antd";
import {v4 as uniqueId} from "uuid";
import {NavLink} from "react-router-dom";
import {DownOutlined} from "@ant-design/icons";

import useContainer from "./hook";
import 'antd/dist/antd.min.css';
import "./style.scss";

const Header = () => {
    const {menuItems, dropDownMenu, pathname} = useContainer();

    return (
        <div className="header">
            {menuItems.map(item => (Boolean(item.children.length) ?
                    <Dropdown
                        menu={{items: dropDownMenu(item?.children)}}
                        key={uniqueId()}
                        className={pathname === item.to ? "activeNavLink" : "navLink"}
                    >
                        <NavLink to={item.to} className={({isActive}) => isActive ? 'activeNavLink' : 'navLink' }>
                                {item.name}
                                <DownOutlined />
                        </NavLink>
                    </Dropdown> :
                    <NavLink to={item.to} className={({isActive}) => isActive ? 'activeNavLink' : 'navLink' } key={uniqueId()}>
                        <Space>
                            {item.name}
                        </Space>
                    </NavLink>
            ))}
        </div>
    )
};

export default Header;