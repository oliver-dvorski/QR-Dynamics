// Import the icon system
import Vue from 'vue'
import icons from './icons'

let appUrlMeta = document.head.querySelector('meta[name="app-url"]').content;

Vue.mixin({
    data() {
        return {
            get icons() {
                return icons
            },
            get appUrl() {
              return appUrlMeta
            }
        }
    }
})

// Reusable components
Vue.component('Icon', require('./components/Icon'))
Vue.component('FancyInput', require('./components/FancyInput'))
Vue.component('FancyCheckbox', require('./components/FancyCheckbox'))
Vue.component('Segments', require('./components/Segments'))
Vue.component('QR', require('./components/QR'))
Vue.component('Modal', require('./components/Modal'))

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = require("axios");

window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

/**
 * Next we will register the CSRF Token as a common header with Axios so that
 * all outgoing HTTP requests automatically have it attached. This is just
 * a simple convenience so we don't have to attach every token manually.
 */

let token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
  window.axios.defaults.headers.common["X-CSRF-TOKEN"] = token.content;
} else {
  console.error(
    "CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token"
  );
}

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from 'laravel-echo'

// window.Pusher = require('pusher-js');

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: 'your-pusher-key'
// });
