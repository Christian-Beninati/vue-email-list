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
            errorMessage: '',
            // Stato del caricamento (flag impostato su false)
            isLoading: false
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

                    // Controllo se sono stati generati tutti e 10 gli indirizzi email
                    if (this.emails.length === 10) {
                        // Imposto su true (fase di caricamento)
                        this.isLoading = true;  
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

