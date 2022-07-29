import DefaultTheme from "vitepress/theme";
import Test from '../../../src/components/Test'
import HelloWorld from '../../../src/components/HelloWorld.vue'
import Demo from "vitepress-theme-demoblock/components/Demo.vue";
import DemoBlock from "vitepress-theme-demoblock/components/DemoBlock.vue";
import type {App} from 'vue'

export default {
  ...DefaultTheme,
  enhanceApp({app}: {app:App<never>}) {
    app.component('HelloWorld', HelloWorld)
    app.component('Test', Test)
    app.component('Demo', Demo)
    app.component('DemoBlock', DemoBlock)
  }
}