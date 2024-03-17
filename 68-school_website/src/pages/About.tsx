import { Collapse, CollapseProps, Divider, Image, Space, Typography } from "antd"
import { aboutImage1, aboutImage2, aboutImage3, aboutImage4 } from "../assets/images/about";

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
            <Image src={aboutImage3} className="collapse__image" />
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
            <Image src={aboutImage1} className="collapse__image" />
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
            <Image src={aboutImage2} className="collapse__image" />
            <p>
                G‘uzorlik o‘quvchi yoshlar viloyat fan olimpiadalari bosqichida g‘oliblikni qo‘lga kiritib, muddatidan oldin talaba bo‘lishdi

                2023 yil — "Insonga eʼtibor va sifatli taʼlim yili"da o‘quvchi yoshlarni qo‘llab-quvvatlash maqsadida Qashqadaryoda o‘quvchi yoshlar o‘rtasida matematika, fizika, kimyo, biologiya va informatika fanlari bo‘yicha "Asosiy fan olimpiadasi"ning viloyat bosqichi o‘tkazildi.

                Unda G‘uzor tumanidagi 68-sonli Davlat ixtisoslashtirilgan umumiy ta‘lim maktab-internatida taʼlim olayotgan o‘quvchi yoshlar ham munosib ishtirok etishdi.

                Yakuniy natijalarga ko‘ra, g‘uzorlik o‘quvchi yoshlarning 7 nafari 1-o‘rinni, 2 nafari 2-o‘rinni va 1 nafari 3-o‘rinni egallashib, diplom va pul mukofotlari bilan taqdirlandi.

                Shuningdek, fan olimpiada g‘oliblari orasidan 3 nafari muddatidan oldin nufuzli oliygohga grant asosida o‘qishga qabul qilindi.
            </p>
        </Typography.Paragraph>,
    },
    {
        key: '4',
        label: (
            <Space direction="vertical">
                <h2>
                    Litseyimizning asosiy sayti haqida
                </h2>
                <p>Asosiy sayt nima maqsadda yaratilgan va nima uchun xizmat qilmoqda?</p>
            </Space>
        )
        ,
        children: <Typography.Paragraph>
            <Image src={aboutImage4} className="collapse__image" />
            <p>
                Albatta, maktabimizning asosiy sayti yaratilgan bo'lib saytning maqsadi o'z o'quvchilarining bilimi qay darajadaligini bilish uchun yaratilgan. Bu saytda testlar, turli o'yinlar va qiziqarli yangiliklar berib boriladi, Faol o'quvchilar XP (ochko) bilan taqdirlanadi eng ko'p ochko olgan o'quvchilar yuqori o'ringa ko'tariladi<br /><br />
                <a href="http://68dimi.atwebpages.com/">Ro'yxatdan o'tish</a> - ushbu link orqali siz ro'yxatdan o'tishigiz mumkin. Ro'xatdan o'tish tartibi: Berilgan maydonlarga ism, familyangiz, tug'ilgan sanangiz, qaysi maktab va nechanchi sinfligingizni kiritasiz, So'ng Kalit so'zi maydoniga o'zingiz xohlagan kirish uchun kalit so'z tanlaysiz, masalan: Azim0510
                Parol maydonida esa sizga avtomatik parol beriladi, uni o'zgartirishingiz ham mumkin. Maydonlarni to'ldirib bo'lgandan keyin pastdagi "Jo'natish" tugmasini bosing. Keyingi bosqichlarda profilingiz qay darajada xavfsiz ekanligi 3 bosqichda tekshiriladi. Hamma jarayondan o'tib bo'lganingizdan so'ng Kabinetingizga o'tish uchun tugmachani bosing.
                Eslatma* Parol va Kalit so'zni hech qachon esingizdan chiqarmang!<br /><br />
                <a href="http://68dimi.atwebpages.com/sign_in">Kabinetga o'tish</a> - ushbu link orqali Kabinet bo'limiga o'tishingiz mumkin.
                Yuqorida kiritgan Kalit so'z va Parol bilan siz o'z kabinetingizga kirishingiz mumkin. Agar sizning profilingiz admin tomonidan hali tasdiqlanmagan bo'lsa (yo siz maktabimiz o'quvchisi bo'lmasangiz) yoki Ro'yxatdan o'tishni istamasangiz u holda siz saytga Mehmon sifatida tashrif buyurishingiz mumkin buning uchun saytning o'ng tomonidagi ko'k portfel ustiga bosing. Mehmon bo'lib kirganingizda faqat saytdagi ma'lumotlarni va O'quvchilar o'rnini ko'rishingiz mumkin. Mehmon bo'lish kamchiligi: Saytda sizning o'rningiz ko'rinmaydi ya'ni siz faqatgina tomoshabinsiz
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