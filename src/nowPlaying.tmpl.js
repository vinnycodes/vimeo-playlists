'use strict'


export default function nowPlayingTmpl(data) {

    return `
    <p class="current-vid__eyebrow">NOW PLAYING</p>
    <h3 class="current-vid__currentTitle">${data.title}</h3>
    <p class="current-vid__description">${data.description}</p>
    `;
    
}
