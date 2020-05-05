import React from 'react'
import './Boost.css'
import PanelInfo from "./PanelInfo/PanelInfo";
import Button from "../../common/Button/Button";

class Boost extends React.Component {

    initialState=[
        {ava:'https://i.ibb.co/N30qqwR/palec18.jpg', text: 'Пальцев Артур - отвечает за команду де-буста доты 2', id: 1,
        vk:'https://vk.com/pricell_art'},
        {ava:'https://i.ibb.co/YXcmCFv/DimaAMDa.jpg', text: 'Дмитрий Селюк - отвечает за команду Apex, GTA5', id: 2,
        vk:'https://vk.com/im?sel=144402424'},
        {ava:'https://i.ibb.co/tqwt7yQ/Alexey.jpg', text: 'Алексей Милинкевич - тренирует персонал, и бустеров', id: 3,
        vk:'https://vk.com/milinkiewicz'},
        {ava:'https://i.ibb.co/M9jnvrR/slava.jpg', text: 'Святослав Лобиков - рандомно тут оказался, реклама', id: 4,
        vk:'https://vk.com/slavalobikov'},

    ];




    render() {

        let panel = this.initialState.map ( p => <PanelInfo ava={p.ava} key={p.id} text={p.text}  vk={p.vk} /> );

        return (
            <div className='boost'>

                <div>
                    <div className='Zakaz'>Заказать де-буст у нашей команды!</div>
                    <div><img className='boostImg' src="https://i.ibb.co/PmHLrpV/komanda.jpg" alt=""/></div>
                    <div className='boostGrid'>
                        {panel}
                        </div>
                        <PanelInfo />
                    </div>
                    <Button a='https://discord.gg/h52ddHM' text='Заказать де-буст'/>
                    <div className='had'></div>
                </div>


        )
    }
}

export default Boost;