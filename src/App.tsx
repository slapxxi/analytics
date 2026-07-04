import { Features, Footer, Header, Hero } from '~/components'

const App = () => {
  return (
    <div className="wrapper z-10 bg-slate-50">
      <Header />
      <Hero />
      <Features />
      <Footer />
    </div>
  )
}

export default App
