const icones=[{name:"home"},{name:"search-outline"},{name:"add-circle-outline"},{name:"heart-outline"},{name:"person-outline"}]

export default function FundoMobile(){
    return(
        <div class="fundo-mobile">
            {icones.map((icone) => (<Ion name={icone.name}/>))}
        </div>
    );
}

function Ion({name}){
    return(
        <ion-icon name={name}></ion-icon>
    );
}