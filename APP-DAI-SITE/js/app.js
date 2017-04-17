export class Formulario{
    keyReference;
    titulo;
    descricao;
    imagem;

    constructor(){
        this.titulo = titulo;
        this.descricao = descricao
        this.imagem = imagem;
    }
}

(function() {
    //Inicializando Firebase
    const firebaseConfig = {
        apiKey: "AIzaSyCT5QhqGe8tXBhcCwXE27VUoWyngERdJYM",
        authDomain: "appdai-beta.firebaseapp.com",
        databaseURL: "https://appdai-beta.firebaseio.com",
        storageBucket: "appdai-beta.appspot.com",
        messagingSenderId: "562100545330",
    };
    firebase.initializeApp(firebaseConfig);

    
}());

// function Checkfiles(){
//     var fup = document.getElementById('filename');
//     var fileName = fup.value;
//     var ext = fileName.substring(fileName.lastIndexOf('.') + 1);

//     if(ext =="jpeg" || ext=="png"){
//         return true;
//     }
//     else{
//         return false;
//     }
// }