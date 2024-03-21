import React from 'react'
import '../contact/Contact.scss'
import {useState, useEffect} from 'react';



export default function Contact() {
  const [loading, setLoading] = useState(true)
  useEffect(() =>{
    setLoading(true)
    setTimeout(() =>{
      setLoading(false)
    },2000)
  },2000)

  return (
    <>

            {
              loading?
                <div className='qush9'>
                    <img src="./imgs/qush11.gif" alt="" />
                </div>
              :
              <div className="kontact" >
                <h2>Контакты</h2>
                <section>
                    <div className="kon bb33">
                        <p>99 999 99 99</p>
                        <a href="tel: 99 999 99 99">Позвонить</a>
                    </div>
                    <div className="kon active12 bb33">
                        <p>99 999 99 99</p>
                        <a href="tel: 99 999 99 99">Позвонить</a>
                    </div>
                    <div className="kon active12">
                        <p>99 999 99 99</p>
                        <a href="tel: 99 999 99 99">Позвонить</a>
                    </div>
                </section>
                <h2>Тelegram</h2>
                <section>
                    <div className="kon">
                        <p>WellRise</p>
                        <a href="tel: 99 999 99 99">Перейти</a>
                    </div>
                </section>
                <h2>YouTube</h2>
                <section>
                    <div className="kon">
                        <p>WellRise</p>
                        <a href="tel: 99 999 99 99">Перейти</a>
                    </div>
                </section>
                <h2>Instagram</h2>
                <section>
                    <div className="kon">
                        <p>WellRise</p>
                        <a href="tel: 99 999 99 99">Перейти</a>
                    </div>
                </section>
                <h2>YouTube</h2>
                <section>
                    <div className="kon">
                        <p>WellRise</p>
                        <a href="tel: 99 999 99 99">Перейти</a>
                    </div>
                </section>
                <h2>Facebook</h2>
                <section>
                    <div className="kon">
                        <p>WellRice</p>
                        <a href="tel: 99 999 99 99">Перейти</a>
                    </div>
                </section>
            </div>
 
           
            }


                         {/* <div className="contacts">
            <h2>Контакты</h2>

            <div className="number__cards">
                <div className="first__number">
                    <p>99 999 99 99</p>
                    <a href="#">Позвонить</a>
                </div>
                <div className="second__number">
                    <p>99 999 99 99</p>
                    <a href="#">Позвонить</a>
                </div>
                <div className="third__number">
                    <p>99 999 99 99</p>
                    <a href="#">Позвонить</a>
                </div>

            </div>

            <div className="profiles">
            <div className="first__profile">
                    <h3>Telegram</h3>
                    <div className="inside__texts">
                        <p>WellRice</p>
                        <a href="#">Перейти</a>
                    </div>
                 
                </div>
                <div className="second__profile">
                    <h3>YouTube</h3>
                    <div className="inside__texts">
                        <p>WellRice</p>
                        <a href="#">Перейти</a>
                    </div>
                </div>
                <div className="third__profile">
                    <h3>Instagram</h3>
                    <div className="inside__texts">
                        <p>WellRice</p>
                        <a href="#">Перейти</a>
                    </div>
                </div>
                <div className="fourth__profile">
                    <h3>YouTube</h3>
                    <div className="inside__texts">
                        <p>WellRice</p>
                        <a href="#">Перейти</a>
                    </div>
                </div>
                <div className="fives__profile">
                    <h3>Facebook</h3>
                    <div className="inside__texts">
                        <p>WellRice</p>
                        <a href="#">Перейти</a>
                    </div>
                </div>
               
            </div>

        </div> */}

       

    </>
  )
}
