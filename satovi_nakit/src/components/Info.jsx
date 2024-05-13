import React from 'react'
import '../styles/Info.css'
import Mapa from '../assets/mapa.png'
import Logo from '../assets/Logo.png'

const Info = () => {
  return (
    <div id='contact' className='container_info'>
        <div className='text_info'>
            <div className='logo_info'>
                <img src={Logo}/>
                <p><strong>Tel:</strong> 060/1429-145</p>
                <p><strong>E-mail:</strong> info@satovi-nakit.com</p>
            </div>
            <div className='time_info'>
                <div className='day'>
                    <strong>
                        <p>Pon:</p>
                        <p>Uto:</p>
                        <p>Sre:</p>
                        <p>Cet:</p>
                        <p>Pet:</p>
                        <p>Sub:</p>
                        <p>Ned:</p>
                    </strong>
                </div>

                <div className='open'>
                    <p>9am-8pm</p>
                    <p>9am-8pm</p>
                    <p>9am-8pm</p>
                    <p>9am-8pm</p>
                    <p>9am-8pm</p>
                    <p>9am-2pm</p>
                    <p>Zatvoreno</p>
                </div>
            </div>
        </div>

        <div className='maps_info'>
            <a target='_blank' href='https://www.google.com/maps/place/Skala+Shop/@46.100134,19.6627003,16z/data=!4m6!3m5!1s0x474366cf29983113:0xf0718b0a1122763e!8m2!3d46.1004969!4d19.6647295!16s%2Fg%2F11_rblcrw?entry=ttu'><img src={Mapa}/></a>

            <a target='_blank' href='https://www.google.com/maps/place/Skala+Shop/@46.100134,19.6627003,16z/data=!4m6!3m5!1s0x474366cf29983113:0xf0718b0a1122763e!8m2!3d46.1004969!4d19.6647295!16s%2Fg%2F11_rblcrw?entry=ttu'>            <p>Trg republike 4,<br/>Subotica 24000</p></a>

        </div>
    </div>
  )
}

export default Info