let pathName = new URL(import.meta.url).pathname;
let name = pathName.split("/").pop().replace(".js", "");

export default class MySection extends HTMLElement{
    static async components(){
        return await (await fetch(pathName.replace(".js", ".html"))).text();
    }

    constructor(){
        super();
        this.attachShadow({mode: "open"});
        console.log("Section on");
    }

    handleEvent(e){
        (e.type === 'click') ? this.enviarWorker(e) : undefined;
    }

    enviarWorker(e){
        e.preventDefault();
        alert('oni oni oni')
        
    }

    connectedCallback(){
        Promise.resolve(MySection.components()).then(html=>{
            this.shadowRoot.innerHTML = html
            this.MySection = this.shadowRoot.querySelector("#boton")
            this.MySection.addEventListener('click', this.handleEvent.bind(this))
        })
    }



}

customElements.define(name, MySection);