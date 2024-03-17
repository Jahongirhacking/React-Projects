import { Button, Carousel, Space, Typography } from "antd";
import backgroundImage1 from "../assets/images/school_background-1.jpg";
import { FileImageOutlined, MailOutlined, SafetyOutlined } from "@ant-design/icons";
import { ReactElement } from "react";

interface IBanner {
    title: string,
    text: string,
    button?: {
        icon?: ReactElement,
        label: string,
        href: string
    }
}

const banners: IBanner[] = [
    {
        title: "Assalomu Alaykum!",
        text: "Qashqadaryo viloyati G'uzor tumani 68-sonli davlat ixtisoslashtirilgan maktab internatining web-saytiga xush kelibsiz!",
        button: {
            icon: <SafetyOutlined style={{ fontSize: "15pt" }} />,
            label: "Ro'yxatdan O'tish",
            href: "http://68dimi.atwebpages.com/"
        }
    },
    {
        title: "Eng Muhimi An'ana",
        text: "Ko'p yillar mobaynida sayqallanib kelayotgan o'zgacha an'anaga ega ekanligimiz bilan doim faxrlanamiz!",
        button: {
            icon: <FileImageOutlined style={{ fontSize: "15pt" }} />,
            label: "Rasmlar va Lavhalar",
            href: "#media"
        }
    },
    {
        title: "Bizda Sifatli Ta'lim",
        text: "Litseyimiz sifatli ta'limni xohlovchi o'quvchilar uchun doimo ochiq",
        button: {
            icon: <MailOutlined style={{ fontSize: "15pt" }} />,
            label: "Bog'lanish",
            href: "#contact"
        }
    },
]

const Banner = () => {
    return (
        <Carousel
            autoplay
            className="banner"
            style={{
                background: `
                linear-gradient(90deg, rgba(0,0,0,0.6), rgba(0,0,0,0.9)), 
                url(${backgroundImage1})
                #555`,
            }}>
            {
                banners.map((banner: IBanner, index: number) => (
                    <div
                        className={`banner__item-${index} banner__item`}
                        key={index}
                    >
                        <Space direction="vertical" className="banner__content">
                            <Typography.Title level={1} className="banner__title">
                                {banner.title}
                            </Typography.Title>
                            <Typography.Text className="banner__text">
                                {banner.text}
                            </Typography.Text>
                            {
                                banner.button &&
                                <Button
                                    className="banner__btn"
                                    type="link"
                                    href={banner.button.href}
                                    icon={banner.button.icon}
                                    size="large"
                                >
                                    {banner.button.label}
                                </Button>
                            }
                        </Space>
                    </div>
                ))
            }
        </Carousel>
    )
}

export default Banner