const posts= [
    {
        usuario:"meowed",
        img:"gato-telefone.svg",
        userCurtida:"respondeai",
        quantCurtida: "101.523"
    },
    {
        usuario:"barked",
        img:"dog.svg",
        userCurtida:"adorable_animals",
        quantCurtida: "99.159"
    }
];
const icones=[  {name:"chevron-forward-circle",tipo:"story"},
                {name:"ellipsis-horizontal",tipo:"config"},
                {name:"heart-outline",tipo:"nav"},
                {name:"chatbubble-outline",tipo:"nav"},
                {name:"paper-plane-outline",tipo:"nav"},
                {name:"bookmark-outline",tipo:"salvar"}
            ];  
export default function Posts(){
    return(
                <div class="posts">
                    {posts.map((publicacao) => (<Post 
                                                usuario={publicacao.usuario} 
                                                img={publicacao.img} 
                                                userCurtida={publicacao.userCurtida} 
                                                quantCurtida= {publicacao.quantCurtida}/>)
                                                )}
                </div>
    );
}

function Post(props){
    return(
                <div class="post">
                    <Topo usuario={props.usuario}/>
                    <Conteudo img={props.img}/>
                    <Fundo userCurtida={props.userCurtida} quantCurtida={props.quantCurtida}/>
                </div>  
        
    );
}
function Topo(props){
    return(
        <div class="topo">
                    <div class="usuario">
                        <img src={`assets/img/${props.usuario}.svg`}/>
                        {props.usuario}
                    </div>
                    <div class="acoes">
                        {<Ion name={(icones.find((icone)=> icone.tipo=="config")).name}/>}
                    </div>
                </div>
    );
}
function Conteudo(props){
    return(
        <div class="conteudo">
            <img src={`assets/img/${props.img}`}/>
        </div>
    );
}
function Fundo(props){
    return(
        <div class="fundo">
            <div class="acoes">
                <div>
                    {icones.filter((icone)=> icone.tipo=="nav")
                    .map((icone) => (<Ion name={icone.name}/>))}
                </div>
                <div>
                    {<Ion name={(icones.find((icone)=> icone.tipo=="salvar")).name}/>}
                </div>
            </div>

            <div class="curtidas">
            <   img src={`assets/img/${props.userCurtida}.svg`}/>
                <div class="texto">
                    Curtido por <strong>{props.userCurtida}</strong> e <strong>outras {props.quantCurtida} pessoas</strong>
                </div>
            </div>
        </div>
    );
}
function Ion(props){
    return(
        <ion-icon name={props.name}></ion-icon>
    );
}