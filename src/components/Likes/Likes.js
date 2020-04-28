import React from 'react'
import './Likes.css'
import PanelInfo from "../Boost/PanelInfo/PanelInfo";
import Comments from "./Comments/Comments";
import Button from "../../common/Button/Button";

class Likes extends React.Component {
    initialState=[

        {ava:'https://svirtus.cdnvideo.ru/QgG7_kxJerpaMp0e08Hm5FWk6LM=/0x0:371x366/800x0/filters:quality(100)/https://hb.bizmrg.com/cybersportru-media/45/452bae45b5afd669d4f80551042467a4.png?m=b489ecd2905c3c1f38d6da455224ba1c',
            text: 'Спасибо Дмитрию за прекрасно проделанную работу! Инсайд инфа, благодаря нему пробился в киберспорт! Низкий поклон, по жизни буду обязан!', id: 1, name:'9impulse'},
        {ava:'https://estnn.com/wp-content/uploads/2019/11/dendi.jpg',
            text: 'Что бы я делал, без вашей прекрасной канторы! В особенности отмечу Артура, который взялся в мой аккаунт с головой. Буду рекомендовать вас всей команде!', id: 1,  name:'Даниил Ишутин'},
        {ava:'https://i.ibb.co/ZH1RYpS/syava.jpg',
            text: 'Возьмите на работу пж!!!, я буду стараться, ебашить да и вообще я хороший, должен подойти на работу', id: 1,  name:'Святослав Лобиков'},
        {ava:'https://i.ibb.co/fCzKGcy/Anna.jpg',
            text: 'Не думала, что когда-нибудь буду нуждаться в ваших услугах, однако вы , а в особенности Алексей очень сильно мне помогли!', id: 1,  name:'Аня Афанасенко'},
        {ava:'https://game2day.ru/images/made/9b6624abc349d15a/byvshii-kibersportsmen-pashabiceps-snyalsya-v-strannoi-reklame-old-spice_600_400_c1.jpg',
            text: 'Jestes jedynym promieniem swiatla w moim piekle, dzieki', id: 1,  name:'Pasha Biceps'},
        {ava:'https://tntmusic.ru/media/content/article/2019-03-10_10-37-56__9125a71c-4320-11e9-a801-af2b63426d3d.jpg',
            text: 'Пацаны большое спасибо, где бы я был, если бы не вы!! Отдельный респект за город Monte_Carlo в Ц-фактори, вот было время! Вы на всегда в моем сердце!)', id: 1,  name:'Адиль Жалелов'},
        {ava:'https://sun9-10.userapi.com/c855720/v855720142/81bcf/VwS7VY3mLKk.jpg',
            text: 'Вышел на вас благодаря рассказу Денди, думал нобманите, даже боялся, однако Артур выручил. Всем советую заказывать у парней дебуст и не бояться! GL HF!', id: 1,  name:'Владимир Миненко'},
        {ava:'',
            text: '', id: 1,  name:''},

    ];


    render() {

        let panel = this.initialState.map ( p => <Comments ava={p.ava} key={p.id} text={p.text}  name={p.name} /> );
        return (
            <div className='comments'>
                <h1> Отзывы о проделанной нами работе! </h1>
                {panel}
                <h2> Написать свой отзыв </h2>
                <div className='textarea'>
                    <textarea></textarea>
                    <input className='input' type='button' value='Отправить отзыв'  onClick={() => alert('Ваш браузер устарел, обновите пожалуйста!')} >
                        {/*<Button text='Отправить отзыв'/>*/}
                    </input>
                    <div className='yyy'></div>
                </div>



            </div>
        )

    }
}

export default Likes;