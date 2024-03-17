import { Button, Card, Divider, Flex, Image, Typography } from "antd";
import { image1, image2, image3, image4, image5, image6 } from "../assets/images/media";
import { useSelector } from "react-redux";
import { IStore } from "../app/store";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

interface IMedia {
    src: string,
    info: string
}

const media: IMedia[] = [
    {
        src: image5,
        info: "O'quvchilar letsiyga kirish uchun test imtihonlarida (2015-yil)"
    },
    {
        src: image6,
        info: "Rus tili fani o'qituvchisi Fayziyeva D. ustoz darslaridan lavha (2015-yil)"
    },
    {
        src: image1,
        info: "O'zbek tili - ona tili bayramini nishonlash uchun musiqaviy chiqish (2016-yil)"
    },
    {
        src: image2,
        info: "Xotira va Qadrlash bayrami uchun tadbirdan lavha (2018-yil)"
    },
    {
        src: image3,
        info: "Zahiriddin Muhammad Bobur tavalludining 529 yilligi (2012-yil)"
    },
    {
        src: image4,
        info: "Ustoz va Murabbiylar bayrami uchun letsiyimizning yosh qizlar jamoasi nomidan musiqiy chiqish (2019-yil)"
    },
]

const Media = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    const themeColor = useSelector((state: IStore) => state.theme);

    return (
        <section id="media" className="media" style={{ backgroundColor: themeColor === "dark" ? "#0e0e0e" : "#e2e2e2" }}>
            <Divider className="divider">
                <Typography.Title level={2} className="media__title">
                    MEDIA VA RASMLAR
                </Typography.Title>
                <Typography.Text className="media__text">
                    Maktabimizni tasvirlovchi qisqacha rasmlar
                </Typography.Text>
            </Divider>
            <Flex className="cards-container">
                {media.map((image: IMedia, index: number) => (
                    <Card
                        data-aos={index % 3 === 0 ? "fade-right" : index % 3 === 1 ? "fade-up" : "fade-left"}
                        hoverable
                        key={index}
                        cover={
                            <Image src={image.src} />
                        }

                        style={{
                            maxWidth: "400px",
                            width: "95%",
                        }}
                    >
                        <Card.Meta description={image.info} />
                    </Card>
                ))
                }
            </Flex>
            <Button href="https://www.google.com/maps/place/G'uzor+tumanidagi+68-sonli+aniq+fanlarga+ixtisoslashtirilgan+maktab+internati/@38.6220831,66.2564984,3a,75y,90t/data=!3m8!1e2!3m6!1sAF1QipO7CKHG3b-0P8eow19rkQlL_hR8WHXKrh38hAwP!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipO7CKHG3b-0P8eow19rkQlL_hR8WHXKrh38hAwP%3Dw397-h298-k-no!7i1333!8i1000!4m9!3m8!1s0x3f4b93da0c07c2c7:0x8069a74ab18448bf!8m2!3d38.6220831!4d66.2564984!10e5!14m1!1BCgIgAQ!16s%2Fg%2F11s76x1_6x?entry=ttu#">
                Ko'proq Ko'rish
            </Button>
        </section>
    )
}

export default Media