import { FacebookOutlined, InstagramOutlined, SendOutlined, YoutubeOutlined } from "@ant-design/icons"
import { Space, Typography } from "antd"
import ThemeButton from "../components/ThemeButton"

const Footer = () => {
    return (
        <footer id="contact" className="footer">
            <Typography.Paragraph className="footer__copyright">
                © Copyright 2020-{new Date().getFullYear()}<br />
                Web sayt 68-sonli DIMIning o'quvchisi <a href="https://Jahongirhacking.netlify.app">Hayitov Jahongir</a> tomonidan ishlab chiqildi
                <ThemeButton />
            </Typography.Paragraph>
            <Space direction="vertical" size={20} className="contact-details">
                <div className="links">
                    <a href="https://www.youtube.com/channel/UCcCMHnnX5p9yfZ-ZtaCaGCw">
                        <YoutubeOutlined />
                    </a>
                    <a href="https://www.facebook.com/shavkat.qultayev">
                        <FacebookOutlined />
                    </a>
                    <a href="https://www.instagram.com/jahongir_khayitov/">
                        <InstagramOutlined />
                    </a>
                    <a href="https://t.me/JahongirKhayitov">
                        <SendOutlined />
                    </a>
                </div>
                <p>
                    <span>Telefon: </span>
                    <a href="tel:+998977346569">+998977346569</a>
                </p>
            </Space>
            <Space direction="vertical" size={20}>
                <p className="footer__address">
                    Qashqadaryo viloyati<br />
                    G'uzor tumani<br />
                    Tinchlik mahallasi
                </p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3117.165086796387!2d66.25392347528819!3d38.62208307178412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4b93da0c07c2c7%3A0x8069a74ab18448bf!2sG&#39;uzor%20tumanidagi%2068-sonli%20aniq%20fanlarga%20ixtisoslashtirilgan%20maktab%20internati!5e0!3m2!1sen!2s!4v1710591083296!5m2!1sen!2s" width="600" height="450" style={{ border: 0, width: "300px", height: "100px" }} loading="lazy" />
            </Space>
        </footer>
    )
}

export default Footer