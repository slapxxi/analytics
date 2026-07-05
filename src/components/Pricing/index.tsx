import config from './config'

export const Pricing = () => {
  return (
    <>
      <div className="col-[wide] row-[5/7] -translate-y-2 bg-xpink-600/90 clip-angle-rev" />
      <div className="hero col-[wide] row-[5/7] bg-xblue-900 clip-angle-rev" />

      <div className="z-10 col-[wide] row-5 grid grid-cols-subgrid py-10 pt-30 text-xslate-400">
        <div className="col-[wide] grid gap-20 md:col-[main]">
          <div className="mx-auto grid max-w-prose gap-7 text-center">
            <h2 className="title text-fluid-4xl text-white">Pricing Plans</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
              nisi aliquet volutpat pellentesque volutpat est.{' '}
            </p>
          </div>

          <ul
            className="grid snap-x snap-mandatory 
            grid-cols-[repeat(3,minmax(min(220px,70%),340px))] justify-between  gap-4
            overflow-auto px-4 py-10 md:min-h-140"
          >
            {config.plans.map((item, i) =>
              i === 1 ? (
                <li
                  key={item.name}
                  className="row-span-4 grid snap-center grid-cols-[minmax(auto,220px)] grid-rows-subgrid 
                  justify-center gap-10 rounded-3xl 
                  bg-white p-4 text-center drop-shadow-lg drop-shadow-black/20 filter"
                >
                  <div className="self-end">
                    <h3 className="title text-3xl text-black">{item.name}</h3>
                    <p className="text-fluid-base text-xslate-400">
                      {item.description}
                    </p>
                  </div>
                  <hr className="border-xslate-400/30" />
                  <div className="text-center">{item.price}</div>
                  <button className="btn self-start">Order</button>
                </li>
              ) : (
                <li
                  key={item.name}
                  className="row-span-4 grid snap-center grid-cols-[minmax(auto,220px)] 
                  grid-rows-subgrid justify-center gap-10 rounded-3xl bg-xblue-950 p-4 text-center"
                >
                  <div className="self-end">
                    <h3 className="title justify-self-center text-3xl text-white">
                      {item.name}
                    </h3>
                    <p className="justify-self-center text-fluid-base text-xslate-400">
                      {item.description}
                    </p>
                  </div>
                  <hr className="border-xslate-400/30" />
                  <div className="text-center">{item.price}</div>
                  <button className="btn self-start">Order</button>
                </li>
              ),
            )}
          </ul>
        </div>
      </div>
    </>
  )
}
