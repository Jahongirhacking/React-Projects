import { FileImageOutlined, FireOutlined, InfoCircleOutlined, LoginOutlined, MailOutlined } from "@ant-design/icons"
import { MenuProps, Menu } from "antd";
import logo from "../assets/images/68Logo.png"
import { useEffect, useState } from "react";

const items: MenuProps['items'] = [
    {
        label: (
            <a href="#achievements">
                Yutuqlar
            </a>
        ),
        key: 'achievements',
        icon: <FireOutlined />,
    },

    {
        label: (
            <a href="#media">
                Media
            </a>
        ),
        key: 'media',
        icon: <FileImageOutlined />,
    },
    {
        label: (
            <a href="#about">
                Biz Haqimizda
            </a>
        ),
        key: 'about',
        icon: <InfoCircleOutlined />,
    },
    {
        label: (
            <a href="#contact">
                Bog'lanish
            </a>
        ),
        key: 'contact',
        icon: <MailOutlined />,
    },
    {
        label: (
            <a href="http://68dimi.atwebpages.com/sign_in/">
                Kabinetga Kirish
            </a>
        ),
        key: 'sign_in',
        icon: <LoginOutlined />,
    },
]

const Navbar = () => {
    const [windowScrollY, setWindowScrollY] = useState(window.scrollY);

    useEffect(() => {
        const handleScroll = () => {
            setWindowScrollY(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        // Cleanup
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Empty dependency array to run the effect only once

    return (
        <nav className={`header__nav ${windowScrollY > 100 ? "active" : ""}`}>
            <img src={logo} className="logo" />
            <Menu mode="horizontal" items={items} theme="dark" className="nav__menu" />
        </nav>
    )
}

export default Navbar