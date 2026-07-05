import {
  Features,
  Footer,
  Header,
  Hero,
  Pricing,
  SellingPoints,
} from '~/components'

const App = () => {
  return (
    <div className="wrapper z-10 bg-slate-50">
      <Header />
      <Hero />
      <Features />
      <SellingPoints />
      <Pricing />
      <Footer />
    </div>
  )
}

export default App
