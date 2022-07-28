import DefaultTheme from "vitepress/theme";
import Test from '../../../src/components/Test'
import HelloWorld from '../../../src/components/HelloWorld.vue'

export default {
  ...DefaultTheme,
  enhanceApp({app}) {
    app.component('HelloWorld', HelloWorld)
    app.component('Test', Test)
  }
}