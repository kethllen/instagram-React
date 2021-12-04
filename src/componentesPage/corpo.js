import Posts from "./componentes/posts";

const stories = [
    {usuario:"9gag"},{usuario:"meowed"},{usuario:"barked"},{usuario:"nathanwpylestrangeplanet"},
    {usuario:"wawawicomics"},{usuario:"respondeai"},{usuario:"filomoderna"},{usuario:"memeriagourmet"}
];
const icones=[  {name:"chevron-forward-circle",tipo:"story"},
                {name:"ellipsis-horizontal",tipo:"config"},
                {name:"heart-outline",tipo:"nav"},
                {name:"chatbubble-outline",tipo:"nav"},
                {name:"paper-plane-outline",tipo:"nav"},
                {name:"bookmark-outline",tipo:"salvar"}
            ];       
const sugestoes = [
    {usuario:"catanacomics",nome:"Catana"},
    {usuario:"bad.vibes.memes",razao:"Segue você"},
    {usuario:"chibirdart",razao:"Segue você"},
    {usuario:"razoesparaacreditar",razao:"Novo no Instagram"},
    {usuario:"adorable_animals",razao:"Segue você"},
    {usuario:"smallcutecats",razao:"Segue você"},
];

export default function Corpo(){
    return(
        <div class="corpo">
            <div class="esquerda">
                <Stories/>
                <Posts />
            </div>
            <div class="sidebar">
                <UserSidebar/>
                <Sugestoes />
                <Links/>
                <CopyRigth/>            
            </div>
        </div>
    );
}

function Story({usuario}){
    return(
        <div class="story">
            <div class="imagem">
                <img src={`assets/img/${usuario}.svg`}/>
            </div>
            <div class="usuario">
                {usuario}
            </div>
        </div>
    );
}

function Ion({name}){
    return(
        <ion-icon name={name}></ion-icon>
    );
}

function Sugestao({usuario, razao}){
    return(
        <div class="sugestao">
            <div class="usuario">
                <img src={`assets/img/${usuario}.svg`}/>
                <div class="texto">
                    <div class="nome">{usuario}</div>
                    <div class="razao">{razao}</div>
                </div>
            </div>
            <div class="seguir">Seguir</div>
        </div>);
}


function UserSidebar(){
    return(
        <div class="usuario">
                    <img src={`assets/img/${(sugestoes.find((user=> (!user.razao && true))).usuario)}.svg`} />
                    <div class="texto">
                        <strong>{(sugestoes.find((user=> (!user.razao && true))).usuario)}</strong>
                        {(sugestoes.find((user=> (!user.razao && true))).nome)}
                    </div>
                </div>
    );
}
function Stories(){
    return(
        <div class="stories">
            {stories.map((storie)=> <Story usuario={storie.usuario}/>)}
            <div class="setinha">
                {<Ion name={(icones.find((icone)=> icone.tipo=="story")).name}/>}
            </div>
        </div>
    );
}
function Sugestoes(){
    return(
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            {sugestoes.filter((sugestao)=> (sugestao.razao && true)).map((sugestao) => (
                                            <Sugestao
                                                usuario={sugestao.usuario} 
                                                razao={sugestao.razao}/>
                                                ))}
        </div>
    )
}
function Links(){
    return(
        <div class="links">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
        </div>
    );
}
function CopyRigth(){
    return(
        <div class="copyright">
            © 2021 INSTAGRAM DO FACEBOOK
        </div>
    );
}