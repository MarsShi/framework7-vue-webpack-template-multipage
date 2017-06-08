
import { 
    Vue,
    Framework7,
    Framework7Theme,
    Framework7ThemeColors,
    Framework7Fonts
} from '@js/lib.js'

// Import App Component
import App from './app'

// Import Css File
import '@css/index.css'

// Init App
new Vue({
    el          : '#app',
    template    : '<app/>',
    // Init Framework7 by passing parameters here
    framework7  : {
        root    : '#app',
        /* Uncomment to enable Material theme: */
        // material: true,
        routes  : [],
    },
    // Register App Component
    components  : {
        App     : App
    },
    apiready    : function(){
        alert('hello,apicloud');
    }
});
