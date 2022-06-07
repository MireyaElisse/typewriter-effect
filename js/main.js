// const TypeWriter = function(txtElement, words, wait = 3000) {
//     this.txtElement = txtElement;
//     this.words = words;
//     this.txt = '';
//     this.wordIndex = 0;
//     this.wait = parseInt(wait, 10);
//     this.type();
//     this.isDeleting = false;
// }

// // type Method
// TypeWriter.prototype.type = function() {
//    // Current index of word
//    const current = this.wordIndex % this.words.length;
   
//    // Get full text of current word
//    const fulltxt = this.words[current];

//    // Check if deleteing
//       if(this.isDeleting) {
//        // Remove char
//        this.txt = fullTxt.substring(0, this.txt.length - 1);
//    } else {
//        // Add char
//        this.txt = fullTxt.substring(0, this.txt.length + 1);
//    }
 
//    // Instert Txt into element
//    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

//     setTimeout(() => this.type(), 500)
// }
// // Init on DOM laod
// document.addEventListener('DOMContentLoaded', init);

// // Init App
// function init() {
//     const txtElement = document.querySelector('.txt-type');
//     const words = JSON.parse(txtElement.getAttribute('data-words'));
//     const wait = txtElement.getAttribute('data-wait')
//     // Init TypeWriter
//     new TypeWriter (txtElement, words, wait);
// }

class TypeWriter {
    constructor(txtElement, words, wait = 3000) {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = ""; 
        this.wordIndex = 0; 
        this.wait = parseInt(wait, 10); 
        this.type(); 
        this.isDeleting = false;
    }

    type() {
    // CURRENT INDEX OF WORD
        const current = this.wordIndex % this.words.length;
    // GET FULL TEXT OF CURRENT WORD
        const fulltxt = this.words[current];

    // CHECK IF DELETING
        if (this.isDeleting) {
    // REMOVE CHARACTER
            this.txt = fulltxt.substring(0, this.txt.length - 1);
    } else {

    // ADD A CHARACTER
            this.txt = fulltxt.substring(0, this.txt.length + 1);
    }


    // INSERT TXT INTO ELEMENT
     this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    //  INITIAL TYPE SPEED
     let typeSpeed = 300;


     if(this.isDeleting) {
         typeSpeed /= 2;
     }

    //  IF WORD IS COMPLETE
     if (!this.isDeleting &&  this.txt === fulltxt) {
    //  MAKES A PAUSE AT THE END
        typeSpeed = this.wait;
    // SET DELETE TO TRUE
        this.isDeleting = true;   
     } else if (this.isDeleting && this.txt === "") {
        this.isDeleting = false;
        // MOVE TO THE NEXT WORD
        this.wordIndex++;
    
    // PAUSE BEFORE START TYPING
        typeSpeed = 500;
     }

        setTimeout(() => this.type(), typeSpeed);        
     
    }
}


// INIT ON DOM LOAD
document.addEventListener("DOMContentLoaded", init)


// INIT APP 
function init() {
    const txtElement = document.querySelector(".txt-type");
    const words = JSON.parse(txtElement.getAttribute("data-words"));
    const wait = txtElement.getAttribute('data-wait');
// INIT TYPEWRITER
    new TypeWriter(txtElement, words, wait);
}