import Login_Button from './Box1_Components/Login_Button.js'
import Signup_Button from './Box1_Components/Signup_Button.js'
import TagLine from './Box1_Components/TagLine.js';
import Search_bar from './Box1_Components/Search_bar.js';
import Search_Button from './Box1_Components/Search_Button.js';
import Popular_cities from './Box1_Components/Popular_cities.js';

export default function Box(){
    return( 
        <div className="box1">
            <Login_Button/>
            <Signup_Button/>
            <TagLine/>
            <Search_bar/>
            <Search_Button/>
            <Popular_cities/> 
        </div>
    );
}