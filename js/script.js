console.log('Vue OK', Vue);

// Estrapolo il metodo creatApp
const { createApp } = Vue;

// Inizializzo l'app Vue
const app = createApp({
    // dati iniziali
    data(){    
        return {
            
        }          
        
    },

    
});

// Monto nell'elemento (di partenza)
app.mount('#root');

