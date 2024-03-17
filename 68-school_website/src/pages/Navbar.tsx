import { FileImageOutlined, FireOutlined, InfoCircleOutlined, LoginOutlined, MailOutlined, MenuOutlined } from "@ant-design/icons"
import { MenuProps, Menu, Drawer } from "antd";
import logo from "../assets/images/68Logo.png"
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { IStore } from "../app/store";
import ThemeButton from "../components/ThemeButton";

const MEDIUM_SIZE = 950;

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
    const [showNavbar, setShowNavbar] = useState(window.innerWidth > MEDIUM_SIZE);
    const [open, setOpen] = useState(false);
    const themeColor = useSelector((state: IStore) => state.theme);


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


    useEffect(() => {
        const handleWidth = () => {
            setShowNavbar(window.innerWidth > MEDIUM_SIZE);
        };
        window.addEventListener('resize', handleWidth);
        // Cleanup
        return () => {
            window.removeEventListener('resize', handleWidth);
        };
    }, []); // Empty dependency array to run the effect only once

    return (
        <nav className={`header__nav ${windowScrollY > 100 ? "active" : ""}`}>
            <img src={logo} className="logo" />
            {
                showNavbar
                    ? <Menu mode="horizontal" items={items} theme="dark" className="nav__menu" />
                    : <>
                        <MenuOutlined style={{ color: "#fff", fontSize: "18pt" }} onClick={() => { setOpen(true) }} />
                        <Drawer
                            title="Bo'limlarni tanlang:"
                            onClose={() => { setOpen(false) }}
                            open={open}
                            footer={<span style={{ color: themeColor === "dark" ? "#fff" : "#000" }}>Qashqadaryo viloyati G'uzor tumani 68-sonli ixtisoslashtirilgan maktab internati</span>}
                        >
                            <Menu mode="vertical" items={items} className="nav__menu" onClick={() => { setOpen(false) }} />
                            <ThemeButton />
                        </Drawer>
                    </>
            }
        </nav >
    )
}

export default Navbar