import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import './FooterAl.css'

function FooterAll() {
    const [showTopBtn, setShowTopBtn] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            // console.log('llll',document.documentElement.scrollTop > 20)
            if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
                setShowTopBtn(true);
            }
            else{
                setShowTopBtn(false);
            }
        })
    }, [])

    const goTop = () => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

  return (
    <Container  fluid >
       
        {
            showTopBtn && (<div className='go-top' onClick={goTop}></div>)
        }
    </Container>
  )
}

export default FooterAll;