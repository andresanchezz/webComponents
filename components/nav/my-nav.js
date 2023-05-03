let pathName = new URL(import.meta.url).pathname;
let name = pathName.split("/").pop().replace(".js", "");

export default class MyNav extends HTMLElement{
    static async components(){
        return await (await fetch(pathName.replace(".js", ".html"))).text();
    }

    constructor(){
        super();
        this.attachShadow({mode: "open"});
        Promise.resolve(MyNav.components()).then(html=>{
            this.shadowRoot.innerHTML = html
        })
        console.log("Nav on");
    }
}

customElements.define(name, MyNav);