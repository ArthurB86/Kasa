import React from 'react'
import '../../style/index.scss'
import Image from '../../Components/Paysage'
import Footer from '../../Components/Footer/footer'
import Cards from '../../Products/Cards'



function Home() {
return ( 
<div className='home'>
    <Image></Image>
    <Cards></Cards>
    <Footer></Footer>
</div>
)
}

export default Home