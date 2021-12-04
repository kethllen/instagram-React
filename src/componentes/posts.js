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

function Post({usuario, img, userCurtida, quantCurtida}){
    return(
                <div class="post">
                    <Topo usuario={usuario}/>
                    <Conteudo img={img}/>
                    <Fundo userCurtida={userCurtida} quantCurtida={quantCurtida}/>
                </div>  
        
    );
}
function Topo({usuario}){
    return(
        <div class="topo">
                    <div class="usuario">
                        <img src={`assets/img/${usuario}.svg`}/>
                        {usuario}
                    </div>
                    <div class="acoes">
                        {<Ion name={(icones.find((icone)=> icone.tipo=="config")).name}/>}
                    </div>
                </div>
    );
}
function Conteudo({img}){
    return(
        <div class="conteudo">
            <img src={`assets/img/${img}`}/>
        </div>
    );
}
function Fundo({userCurtida, quantCurtida}){
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
            <   img src={`assets/img/${userCurtida}.svg`}/>
                <div class="texto">
                    Curtido por <strong>{userCurtida}</strong> e <strong>outras {quantCurtida} pessoas</strong>
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