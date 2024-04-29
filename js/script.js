

const {createApp} = Vue;

createApp ({
    data() {
        return {
            mail:"",
            mailArray:[],
            // loadingComplete: false,
            loadingProgress: 0, // Aggiungo una variabile per tenere traccia del progresso di caricamento
            emailTarget: 10,
        }
    },

    created() {
        //ciclo for che mi ripete la function generateMail
        for (let i = 0; i < 10; i++) {
            this.generateMail();
        }
    },
    methods: {
        // function che mi pesca una mail dal server e la pusha in un arrai chiamato mailArray
        generateMail: function () {
            axios
            // qui chiamo il server
              .get("https://flynn.boolean.careers/exercises/api/random/mail")
              .then((resp) => {                                         //qui ordino le istruzioni da seguire una volta chiamato il server
                console.log(resp);
                // qui assegno il valore restituito a me interessato, il quale è la mail, ad una variabile inizialmenrte vuota
                this.mail = resp.data.response;
                // qui pusho il valore ottenuto all'interno di un array mailArray
                this.mailArray.push(this.mail);
                // Controllo se tutte le email sono state generate
                if (this.mailArray.length === 10) {
                    this.loadingComplete = true; // Imposto lo stato di caricamento a true
                }
                // Calcolo il progresso di caricamento
                this.loadingProgress = Math.floor((this.mailArray.length / this.emailTarget) * 100);
                
              });
          },
    },

}).mount("#app")