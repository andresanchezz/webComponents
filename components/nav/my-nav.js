let pathName = new URL(import.meta.url).pathname;
let name = pathName.split("/").pop().replace(".js", "");

export default class MyNav extends HTMLElement{
    static async components(){
        return await (await fetch(pathName.replace(".js", ".html"))).text();
    }

    constructor(){
        super();
        this.attachShadow({mode: "open"});
        console.log("Nav on");
    }

    handleEvent(e){
        (e.type === 'click') ? this.enviarWorker() : undefined
    }
    enviarWorker(){
        alert('on too')
        e.preventDefault();
    }

    connectedCallback(){
        Promise.resolve(MyNav.components()).then(html=>{
            this.shadowRoot.innerHTML = html
            this.MyNav = this.shadowRoot.querySelector("#boton")
            this.MyNav.addEventListener('click', this.handleEvent.bind(this))
        })
    }
}

customElements.define(name, MyNav);