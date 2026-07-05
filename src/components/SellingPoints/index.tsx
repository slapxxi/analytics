import config from './config'

export const SellingPoints = () => {
  return (
    <div className="col-[main] grid md:gap-20 gap-7 my-20">
      {config.items.map((item, index) => (
        <div
          className="group grid items-center justify-between gap-10
        md:grid-cols-[minmax(0,480px)_minmax(0,600px)] even:md:grid-cols-[minmax(auto,600px)_minmax(0,480px)]"
        >
          <div key={index} className="row-1 grid gap-5 md:group-even:col-2">
            <h2 className="title text-fluid-4xl text-xblue-900">
              {item.title}
            </h2>
            <p className="text-fluid-lg text-xslate-400">{item.description}</p>
          </div>

          <div className="md:group-even:col-1">
            <img src={item.img} alt="" className="scale-110" />
          </div>
        </div>
      ))}
    </div>
  )
}
