interface MenuItem {
    id: number;
    title: string;
    link: string;
    has_dropdown: boolean;
    target?: '_blank' | '_self';  // Optional property to specify where the link should open
    sub_menus?: {
        link: string;
        title: string;
        target?: '_blank' | '_self';
    }[];
}

const menu_data: MenuItem[] = [
    {
        id: 1,
        has_dropdown: false,
        title: "Home",
        link: "/",
        target: '_self'
    },
    {
        id: 2,
        has_dropdown: false,
        title: "Feature",
        link: "/#feature",
        target: '_self'
    },
    {
        id: 3,
        has_dropdown: false,
        title: "Tokenomic",
        link: "/#chart",
        target: '_self'
    },
    {
        id: 4,
        has_dropdown: false,
        title: "RoadMap",
        link: "/#roadMap",
        target: '_self'
    },
    {
        id: 5,
        has_dropdown: true,
        title: "Blog",
        link: "/blog",
        target: '_self',
        sub_menus: [
            { link: "/blog", title: "Our Blog", target: '_self' },
            { link: "/blog-details", title: "Blog-Details", target: '_self' },
        ],
    },
    {
        id: 6,
        has_dropdown: false,
        title: "Contact",
        link: "/contact",
        target: '_self'
    },
    {
        id: 7,
        has_dropdown: false,
        title: "DeFi Wallet",
        link: "https://vectoriumdefi.xyz",
        target: '_blank'  // Opens in a new tab
    },
];
export default menu_data;
