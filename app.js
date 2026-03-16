const app = Vue.createApp({
    data() {
        return {
            message: '',
            theme: 'light'  //default
        };
    },

    computed: {
        htmlOutput(){
            return marked.parse(this.message);
        },

        charCount() {
            //convert markdown to HTML
            const html = marked.parse(this.message);
            //strip html tags
            const text = html.replace(/<[^>]*>/g, '');
            //return this.message.replace(/<[^>]*>/g, '').length;
            // return (this.htmlOutput.replace(/<[^>]*>/g, '').trim()).length;
            return text.trim().length;
        },

        themeIcon() {
            return this.theme === 'light' ? 'light_mode' : 'dark_mode'; //I want the icon the match the theme it is on
        }
    },

    mounted() {
        //restore markshown
        const saved = localStorage.getItem('markdownText');
        if (saved) { //if there is saved text
            this.message = saved; //display the text
        }
        //restore theme
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            this.theme = savedTheme;
            document.documentElement.setAttribute('data-bs-theme', this.theme)
        }
    },

    watch: {
        message(newValue) {
            localStorage.setItem('markdownText', newValue); //automatically saves
        },

        theme(newValue){
            localStorage.setItem('theme', newValue); //saves theme whenever it changes
        }
    },

    methods: {
        toggleTheme() {
            this.theme = this.theme === 'light' ? 'dark' : 'light'; 
            document.documentElement.setAttribute('data-bs-theme', this.theme)
        }
    }
    
});

app.mount('#app'); //controls the div "app"



