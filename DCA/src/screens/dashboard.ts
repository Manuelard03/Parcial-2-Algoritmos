import card from '../components/card/card'

class button extends HTMLElement {
    button? = URL;

    constructor(){
        super();
        this.attachShadow({mode:'open'});
    }

    connectedCallback(){
        this.render();
    }

    render(){

    }
}

customElements.define("my-button", button);
export default button;