import { Card, Divider, Flex, Typography } from "antd"
import { professionImage, scienceImage, universityImage, extracurriculumImage } from "../assets/images/achievements"

interface ICard {
    image: {
        src: string,
        alt: string
    },
    title: string,
    text: string
}

const cards: ICard[] = [
    {
        image: {
            src: universityImage,
            alt: "Universitet"
        },
        title: "'OTM'larga Kirish",
        text: "Maktabimiz o'quvchilari viloyatda Oliy Ta'lim Muassasalariga kirish ko'rsatkichi yuqoriligi bilan ham boshqa maktablardan ajralib turadi"
    },
    {
        image: {
            src: scienceImage,
            alt: "Fan Olimpiadalari"
        },
        title: "Fan Olimpiadalari",
        text: "Maktabimiz har yili fan olimpiadalarida faol ishtirok etib, yuqori o'rinda ekanligini ko'rsatib keladi. Bunda iqtidorli o'quvchilarni saralab olish muhim ahamiyatga ega"
    },
    {
        image: {
            src: professionImage,
            alt: "Kasbga Yo'naltirish"
        },
        title: "Kasbga Yo'naltirish",
        text: "Maktabimizda har bir o'quvchi uchun individual yondashilib, o'z kasbi bo'yicha mutaxasisligiga to'g'ri keladigan sinfda o'qitiladi"
    },
    {
        image: {
            src: extracurriculumImage,
            alt: "To'garak"
        },
        title: "Qo'shimcha To'garaklar",
        text: "Darsdan tashqari faoliyatlar o'quvchilar uchun ijodiy qobiliyatlarni rivojlantirish, muloqotlashish kabi ko'nikmalarning shakllanishini ta'minlash uchun muhimdir"
    },
]

const Achievements = () => {
    return (
        <section id="achievements" className="achievements">
            <Divider className="divider">
                <Typography.Title level={2} className="achievements__title">
                    YUTUQLAR
                </Typography.Title>
                <Typography.Text className="achievements__text">
                    Maktabimizning yutuqlari nimada?
                </Typography.Text>
            </Divider>
            <Flex className="cards-container">
                {
                    cards.map((card: ICard, index: number) => (
                        <Card
                            hoverable
                            key={index}
                            style={{ width: 240 }}
                            cover={<img src={card.image.src} alt={card.image.alt} />}
                            className="card"
                        >
                            <Card.Meta
                                title={card.title}
                                description={card.text} />
                        </Card>
                    ))
                }
            </Flex>
        </section>
    )
}

export default Achievements