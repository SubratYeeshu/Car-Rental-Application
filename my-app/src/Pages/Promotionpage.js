import Box from './Components/Box.js'
import Header from './Components/Header.js'
import Footer from './Components/Footer.js'
import SliderImage from './Components/SliderImage.js';
import WebImage from './Components/WebImage.js';
import Box2 from './Components/Box2.js';
import AppPromotion from './Components/AppPromotion.js';

export default function Promotionpage(){
    return(
        <div>
            <Header/>
            <Box/>
            <SliderImage/>
            <Box2/>
            <WebImage/>
            <Box2/>
            <AppPromotion/>
            <Footer/>
        </div>
    );
}