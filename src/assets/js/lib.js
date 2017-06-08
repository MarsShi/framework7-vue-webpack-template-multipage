
import Vue from 'vue'
import Framework7 from 'framework7'
import Framework7Vue from 'framework7-vue'
import ApicloudVue from '@js/apicloud-vue.js';
import Framework7Theme from 'framework7/dist/css/framework7.ios.min.css'
import Framework7ThemeColors from 'framework7/dist/css/framework7.ios.colors.min.css'
import Framework7Fonts from 'framework7-icons/css/framework7-icons.css'
// OR for Material Theme:
// import Framework7Theme from 'framework7/dist/css/framework7.material.min.css'
// import Framework7ThemeColors from 'framework7/dist/css/framework7.material.colors.min.css'


Vue.use(Framework7Vue)
Vue.use(ApicloudVue)

import '@js/common.js'
import '@css/common.css'

export {
	Vue,
	Framework7,
	Framework7Theme,
	Framework7ThemeColors,
	Framework7Fonts
}