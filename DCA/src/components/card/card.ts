import {getData} from '../../service/getData'
import {getData2} from '../../service/getData2'

import styles from './card.css'

export enum Attributes {
    img? : URL;
}

class card extends HTMLElement {
    img? = URL;

    constructor(){
        super();
        this.attachShadow({mode:'open'});
    }

    connectedCallback(){
        this.render();
    }

    attributeChangedCallback(
    )

    render(){

    }
}

customElements.define("my-card", card);
export default card;

