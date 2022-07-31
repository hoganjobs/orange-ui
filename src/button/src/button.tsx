import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SButton',
  setup(props, { slots }) {
    return () => {
      const defaultSlot = slots.default ? slots.default() : 'button'
      return <button>{defaultSlot}</button>
    }
  }
})
