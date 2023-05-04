let pathName = new URL(import.meta.url).pathname;
let name = pathName.split("/").pop().replace(".js", "");

export default class MyHeader extends HTMLElement{
    static async components(){
        return await (await fetch(pathName.replace(".js", ".html"))).text();
    }

    constructor(){
        super();
        this.attachShadow({mode: "open"});
        console.log("Header on");
    }

    handleEvent(e){
        (e.type === 'click') ? this.enviarWorker(e):undefined
    }
    enviarWorker(e){
        e.preventDefault();
        alert('On')
    }

    connectedCallback(){
        Promise.resolve(MyHeader.components()).then(html=>{
            this.shadowRoot.innerHTML = html
            this.MyHeader = this.shadowRoot,this.querySelector("#boton")
            this.MyHeader.addEventListener('click', this.handleEvent.bind(this))
        })
    }
}

customElements.define(name, MyHeader);