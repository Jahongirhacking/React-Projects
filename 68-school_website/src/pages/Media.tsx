import { Card, Divider, Flex, Image, Typography } from "antd";
import { image1, image2, image3, image4, image5, image6 } from "../assets/images/media";
import { useSelector } from "react-redux";
import { IStore } from "../app/store";

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
        </section>
    )
}

export default Media