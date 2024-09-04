// controllo il collegamento corretto fra i file
console.log('Js ok');

/**
 * Descrizione:
Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta usando Vue e l'array di oggetti allegato.
Quando mostriamo un'immagine, mostriamo anche il relativo titolo e la relativa descrizione.
Bonus:
0 - realizziamo ora anche le thumbnails!
1- al click su una thumb, visualizzare in grande l'immagine corrispondente
2- applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
3- quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce
 */

const {createApp} = Vue;
createApp({
    data(){
        return {
            activeIndex: 0,
            imageList: [
                {
                    image: 'img/01.webp',
                    title: 'Marvel\'s Spiderman Miles Morale',
                    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                },
                {
                    image: 'img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                },
                {
                    image: 'img/03.webp',
                    title: 'Fortnite',
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                },
                {
                    image: 'img/04.webp',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                },
                {
                    image: 'img/05.webp',
                    title: "Marvel's Avengers",
                    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                },
            ],
        }
    },
    methods: {
        // mi servirà una funzione per andare indietro nello slider : devo decrementare activeIndex
        previousImg : function(){
            if(this.activeIndex === 0){
                this.activeIndex = this.imageList.length-1;
            } else {
                this.activeIndex--;
            }
        },
         // mi servirà una funzione per andare avanti nello slider : devo aumentare activeIndex
        nextImg :function(){
            if(this.activeIndex === this.imageList.length-1){
                this.activeIndex = 0;
            } else {
                this.activeIndex++;
            }
        },
    },
    created(){
        console.log('Applicazione creata');
    }
}).mount('#app')