const icones=[  {name:"logo-instagram",
                 tipo:"logo"},
                {name:"home",
                 tipo:"nav"},
                {name:"search-outline",
                 tipo:"nav"},
                {name:"add-circle-outline",
                 tipo:"nav"},
                {name:"heart-outline",
                 tipo:"nav"},
                {name:"person-outline",
                 tipo:"msg"}]

export default function Navbar(){
    return(
        <div class="navbar">
            <div class="container">
                <div class="logo">
                    {<Ion name={(icones.find((icone)=> icone.tipo=="logo")).name}/>}
                    <div class="separador"></div>
                    <img src="assets/img/logo.png" />
                </div>

                <div class="logo-mobile">
                    {<Ion name={(icones.find((icone)=> icone.tipo=="logo")).name}/>}
                </div>

                <div class="instagram-mobile">
                    <img src="assets/img/logo.png" />
                </div>
        
                <div class="pesquisa">
                    <input type="text" placeholder="Pesquisar" />
                </div>
        
                <div class="icones">
                    {icones.filter((icone)=> icone.tipo=="nav")
                    .map((icone) => (<Ion name={icone.name}/>))}
                </div>

                <div class="icones-mobile">
                    {<Ion name={(icones.find((icone)=> icone.tipo=="msg")).name}/>}
                </div>
            </div>
        </div>
    );
}

function Ion({name}){
    return(
        <ion-icon name={name}></ion-icon>
    );
}