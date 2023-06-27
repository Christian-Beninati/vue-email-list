console.log('Vue OK', Vue);

// Definisco l'URL dell'API
const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail'

// Estrapolo il metodo creatApp
const { createApp } = Vue;

// Inizializzo l'app Vue
const app = createApp({
    
    // ?........................ DATA ........................

    // Definisco i dati iniziali
    data(){    
        return {
            // Array per memorizzare gli indirizzi email generati
            emails: [],
            // Messaggio di errore in caso di problemi con l'API
            errorMessage: ''
        }          
    },

    // ?........................ METHODS ........................

    methods: {
        generateEmails() {
            // Genero 10 indirizzi email
            for (let i = 0; i < 10; i++) {
                // Effettuo una chiamata GET all'API per ottenere un indirizzo email
                axios.get(endpoint).then(response => {
                    // Se la chiamata ha successo
                    if (response.data.success) {
                        // Aggiungo l'indirizzo email all'array 'emails'
                        this.emails.push(response.data.response);
                    }
                })
                .catch(error => {
                    // In caso di errore nella chiamata all'API
                    this.errorMessage = ' Si è verificato un errore'
                });
            }
        }
    },

    // ?........................ CREATED ........................

    created() {
        // Chiamo il metodo per generare gli indirizzi email
        this.generateEmails();
    }
    
});

// Monto nell'elemento (di partenza)
app.mount('#root');

