import Navbar from "./componentes/navbar";
import Corpo from "./componentes/corpo";
import FundoMobile from "./componentes/fundomobile";

export default function App(){
    return(
        <div>
            <Navbar/>
            <Corpo />
            <FundoMobile/>
        </div>
    );
}