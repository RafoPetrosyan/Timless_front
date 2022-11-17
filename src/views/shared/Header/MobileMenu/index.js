import React, {useState} from "react";
import { Menu } from 'antd';
import "./style.scss";

function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}
const items = [
    getItem('Home', '/'),
    getItem('Services', '/services', null, [
        getItem('Roofing', '/roofing', null,
            [
                getItem('Shingle Roof', '1'),
                getItem('Flat Roof', '2'),
                getItem('Metal Roof', '3'),
                getItem('Solar system', '4'),
            ],
        ),
        getItem('Roofing', '/5'),
        getItem('Plumbing', '/6'),
        getItem('Bathroom', '7'),
        getItem('Kitchen', '8'),
    ]),
    getItem('About us', '/about us'),
    getItem('Contact', '/contact'),
];

const MobileMenu = ({menuItems}) => {
    return (
        <div className="mobileMenuVisible">
            <Menu
                style={{
                    width: 256,
                }}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode='inline'
                theme='light'
                items={items}
            />
        </div>
    )
};

export default MobileMenu;