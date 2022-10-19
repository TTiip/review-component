import ChooseTheme from '~/components/choose-theme'
export default defineComponent({
  name: 'index',
  setup () {
    return () => (
      <>
        <div>index</div>
        <ChooseTheme />
      </>
    )
  }
})
