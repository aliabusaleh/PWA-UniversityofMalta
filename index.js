import {
    html, PolymerElement
}
from '@polymer/polymer/polymer-element.js';
import '@polymer/app-layout/app-layout.js';

/**
 * @customElement
 * @polymer
 */
class PwatutorialApp extends PolymerElement {
    static get template() {
        return html `
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
       <! -- Main Content -- >

       <style include="app-grid-style">

    :host {
      --app-grid-columns: 2;
      /* --app-grid-item-height: 20vw;
      --app-grid-item-width: 20vw; */
    }

    ul {
      padding: 0;
      list-style: none;
      width:100%;
      height:350px;
    }

    .item {
      background-color:#002171;
      color:white;
      border: 0.5px solid white;
      text-align:center;
      background-size: 50%;
      background-repeat: no-repeat;
      background-position: 50% 10px;
    }

    .item p{
      margin:0;display: inline-block;vertical-align: -120px;
    }
  </style>
    <h2>Start<br /> saving<br /> foot today!</h2>
  <ul class="app-grid">
    <li onclick="[[openHomeUser]]" style="background-image: url('/images/donation.png');" class="item">
      <p>Indivdual User</p>
    </li>
    <li onclick="[[openHomeSupermarket]]" style="background-image: url('/images/basket-full.png');" class="item">
      <p>Supermarket</p>
    </li>
    <li onclick="[[openHomeRestaurant]]" style="background-image: url('/images/recipe.png');" class="item">
      <p>Cafe/Restaurant</p>
    </li>
    <li onclick="[[openAbout]]" style="background-image: url('/images/open-book.png');" class="item">
      <p>About Us</p>
    </li>
  </ul>
    `;
    }
    static get properties() {
        return {
            prop1: {
                type: String,
                value: 'pwatutorial-app'
            }
        };
    }
    openHomeUser() {
        var url = "home-user.html";
        window.location.href = url;
    }
    openHomeSupermarket() {
        var url = "home-user.html";
        window.location.href = url;
    }
    openHomeRestaurant() {
        var url = "home-user.html";
        window.location.href = url;
    }
    openAbout() {
        var url = "home-user.html";
        window.location.href = url;
    }
}

window.customElements.define('pwatutorial-app', PwatutorialApp);
