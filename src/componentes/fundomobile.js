const icones=[{name:"home"},{name:"search-outline"},{name:"add-circle-outline"},{name:"heart-outline"},{name:"person-outline"}]

export default function FundoMobile(){
    return(
        <div class="fundo-mobile">
            {icones.map((icone) => (<Ion name={icone.name}/>))}
        </div>
    );
}

function Ion(props){
    return(
        <ion-icon name={props.name}></ion-icon>
    );
}