import Navbar from "./componentesPage/navbar";
import Corpo from "./componentesPage/corpo";
import FundoMobile from "./componentesPage/fundomobile";

export default function App(){
    return(
        <div>
            <Navbar/>
            <Corpo />
            <FundoMobile/>
        </div>
    );
}