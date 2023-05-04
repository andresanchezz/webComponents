let pathName = new URL(import.meta.url).pathname;
let name = pathName.split("/").pop().replace(".js", "");

export default class MySelection extends HTMLElement{

    static async components(){
        return await (await fetch(pathName.replace(".js", ".html"))).text();
    }

    constructor(){
        super();
        this.attachShadow({mode: "open"});
        console.log("Selection on");
    }

    handleEvent(e){
        (e.type === "click") ? this.enviarWorker(e) : undefined;
    }
    enviarWorker(e){
        e.preventDefault()
        alert('On')
    }

    connectedCallback(){
        Promise.resolve(MySelection.components()).then(html=>{
            this.shadowRoot.innerHTML = html;
            this.MySelection = this.shadowRoot.querySelector("#boton");
            this.MySelection.addEventListener("click", this.handleEvent.bind(this))
        })
    }

}

customElements.define(name, MySelection);