import { Collapse, CollapseProps, Divider, Image, Space, Typography } from "antd"
import { aboutImage1, aboutImage2, aboutImage3 } from "../assets/images/about";

const items: CollapseProps['items'] = [
    {
        key: '1',
        label: (
            <Space direction="vertical">
                <h2>Litseyimiz Uchun Qabul</h2>
                <p>O'quvchilar qanday qilib ushbu litseyga qabul qilinishadi?</p>
            </Space>
        )
        ,
        children: <Typography.Paragraph>
            <Image src={aboutImage3} className="collapse__image" style={{ float: "right" }} />
            <p>
                2023-yilga qadar litseyimiz 5-sinf va undan yuqori sinfdagi o'quvchilarni avgust oyida topshiriladigan kirish test sinov-imtihonlari orqali saralab olardi.
                Endilikda esa litseyimiz test rejimida boshlang'ich sinflardan boshlab qabul qilishni yo'lga qo'ygan. Umumiy maktablarga o'xshab to'rtta chorakdan iborat ta'lim. Birinchi chorak Sentabr oyida boshlanib, oxirgi chorak esa May oyida yakuniga yetadi
            </p>
        </Typography.Paragraph>,
    },
    {
        key: '2',
        label: (
            <Space direction="vertical">
                <h2>Bilimlar Bellashuvlari va Fan Olimpiadalari</h2>
                <p>Maktabimizning Olimpiada va Bilimlar Bellashuvidagi natijalari va o'rinlari qay darajada?</p>
            </Space>
        )
        ,
        children: <Typography.Paragraph>
            <Image src={aboutImage1} className="collapse__image" style={{ float: "right" }} />
            <p>
                2013-2014 o’quv yilida Bilimlar bellashuvining Respublika bosqichida Informatika fanidan I o’rinni egallagan 8-sinf o’quvchisi Qo’yliyev Doston (o’qituvchisi Qultayev Shavkat), Biologiya fanidan II o’rinni egallagan 8-sinf o’quvchisi Toxirova Fotima (o’qituvchisi Nurillayeva Shoira), Tarix fanidan III o’rinni egallagan 7-sinf o’quvchisi Eshmirzayev Suxrob (o’qituvchisi Ergashev Abubakir). 2014-2015uchta o’quv yilda Bilimlar bellashuvi tuman II bosqichida maktabimizning 19 nafar o’quvchilarimiz faxrli I o’rinni egallab, III bosqich viloyat bosqichiga yo’llanmani qo’lga kiritshdi. 2015 yilda viloyat bosqichida 7 nafar o’quvchimiz g’olib bo’ldi. 2015 yilda o’tkazilgan Bilimlar bellashuvi Respublika bosqichida ishtirok etib, Informatika fanidan Sottorov Abbos faxrli birinchi o’rinni, Tarix fanidan Eshmirzayev Suxrob ikkinchi o’rinni, Fizika fanidan Turayev Bekjon ikkinchi o’rinni egalladi.
            </p>
        </Typography.Paragraph>,
    },
    {
        key: '3',
        label: (
            <Space direction="vertical">
                <h2>Muddatidan Oldin Talabalik</h2>
                <p>Olimpiadalarda qatnashish orqali muddatidan oldin OTMlarda talaba bo'lish mumkinmi?</p>
            </Space>
        )
        ,
        children: <Typography.Paragraph>
            <Image src={aboutImage2} className="collapse__image" style={{ float: "right" }} />
            <p>
                G‘uzorlik o‘quvchi yoshlar viloyat fan olimpiadalari bosqichida g‘oliblikni qo‘lga kiritib, muddatidan oldin talaba bo‘lishdi

                2023 yil — "Insonga eʼtibor va sifatli taʼlim yili"da o‘quvchi yoshlarni qo‘llab-quvvatlash maqsadida Qashqadaryoda o‘quvchi yoshlar o‘rtasida matematika, fizika, kimyo, biologiya va informatika fanlari bo‘yicha "Asosiy fan olimpiadasi"ning viloyat bosqichi o‘tkazildi.

                Unda G‘uzor tumanidagi 68-sonli Davlat ixtisoslashtirilgan umumiy ta‘lim maktab-internatida taʼlim olayotgan o‘quvchi yoshlar ham munosib ishtirok etishdi.

                Yakuniy natijalarga ko‘ra, g‘uzorlik o‘quvchi yoshlarning 7 nafari 1-o‘rinni, 2 nafari 2-o‘rinni va 1 nafari 3-o‘rinni egallashib, diplom va pul mukofotlari bilan taqdirlandi.

                Shuningdek, fan olimpiada g‘oliblari orasidan 3 nafari muddatidan oldin nufuzli oliygohga grant asosida o‘qishga qabul qilindi.
            </p>
        </Typography.Paragraph>,
    },
];


const About = () => {
    return (
        <section id="about" className="about">
            <Divider className="divider">
                <Typography.Title level={2} className="about__title">
                    Biz Haqimizda
                </Typography.Title>
                <Typography.Text className="about__text">
                    Maktabimizning faoliyati haqida qisqacha savollarga javoblar
                </Typography.Text>
            </Divider>
            <Collapse items={items} defaultActiveKey={['1', '2', '3']} className="about__collapse" />
        </section>
    )
}

export default About