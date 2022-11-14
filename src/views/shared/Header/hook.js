import {Link, useLocation} from "react-router-dom";

const servicesInfo = [
    {
        id: 1,
        parent_id: null,
        title: "ROOFING",
        children: [
            {
                id: 1_1,
                parent_id: null,
                title: "SHINGLE ROOF",
                children: []
            },
            {
                id: 1_2,
                parent_id: null,
                title: "TILE ROOF",
                children: []
            },
            {
                id: 1_3,
                parent_id: null,
                title: "FLAT ROOF",
                children: []
            },
            {
                id: 1_4,
                parent_id: null,
                title: "METAL ROOF",
                children: []
            },
            {
                id: 1_5,
                parent_id: null,
                title: "SOLAR SYSTEM",
                children: []
            },
            {
                id: 1_6,
                parent_id: null,
                title: "WATERPROOF DECKING",
                children: []
            },
        ]
    },
    {
        id: 2,
        parent_id: null,
        title: "PLUMBING",
        children: [
            {
                id: 2_1,
                parent_id: null,
                title: "REPIPING SERVICES",
                children: []
            },
            {
                id: 2_2,
                parent_id: null,
                title: "SEWER LINE REPAIR AND REPLACEMENT",
                children: []
            },
            {
                id: 2_3,
                parent_id: null,
                title: "WATER FILTRATION SYSTEMS",
                children: []
            },
            {
                id: 2_4,
                parent_id: null,
                title: "WATER HEATER INSTALLATION",
                children: []
            },
        ]
    },
    {
        id: 3,
        parent_id: null,
        title: "BATHROOM REMODELING",
        children: []
    },
    {
        id: 4,
        parent_id: null,
        title: "KITCHEN REMODELING",
        children: []
    },
];
const galleryInfo = [
    {
        id: 1,
        parent_id: null,
        title: "ROOFING",
        children: [
            {
                id: 1_1,
                parent_id: null,
                title: "SHINGLE ROOF",
                children: []
            },
            {
                id: 1_2,
                parent_id: null,
                title: "TILE ROOF",
                children: []
            },
            {
                id: 1_3,
                parent_id: null,
                title: "FLAT ROOF",
                children: []
            },
            {
                id: 1_4,
                parent_id: null,
                title: "METAL ROOF",
                children: []
            },
            {
                id: 1_5,
                parent_id: null,
                title: "SOLAR SYSTEM",
                children: []
            },
            {
                id: 1_6,
                parent_id: null,
                title: "WATERPROOF DECKING",
                children: []
            },
        ]
    },
    {
        id: 2,
        parent_id: null,
        title: "PLUMBING",
        children: [
            {
                id: 2_1,
                parent_id: null,
                title: "REPIPING SERVICES",
                children: []
            },
            {
                id: 2_2,
                parent_id: null,
                title: "SEWER LINE REPAIR AND REPLACEMENT",
                children: []
            },
            {
                id: 2_3,
                parent_id: null,
                title: "WATER FILTRATION SYSTEMS",
                children: []
            },
            {
                id: 2_4,
                parent_id: null,
                title: "WATER HEATER INSTALLATION",
                children: []
            },
        ]
    },
    {
        id: 3,
        parent_id: null,
        title: "BATHROOM",
        children: []
    },
    {
        id: 4,
        parent_id: null,
        title: "KITCHEN",
        children: []
    },
];

function useContainer() {
    const {pathname} = useLocation();

    const menuItems = [
        {name: 'HOME', to: '/', children: []},
        {name: 'SERVICES', to: '/services', children: servicesInfo},
        {name: 'GALLERY', to: '/gallery', children: galleryInfo},
        {name: 'ABOUT US', to: '/about-us', children: []},
        {name: 'CONTACT', to: '/contact', children: []},
    ];

    const dropDownMenu = (values) => {
        return values.map(item => {
            item = {
                ...item,
                key: item.id,
                label: <Link to={`category/${item.id}`}>{item.title}</Link>,
                children: Boolean(item.children.length) ? dropDownMenu(item.children) : null,
            }
            return item
        });
    };

    return {
        menuItems,
        dropDownMenu,
        servicesInfo,
        pathname,
    }
}

export default useContainer;