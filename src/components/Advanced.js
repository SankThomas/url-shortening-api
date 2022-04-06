import brand from "../images/icon-brand-recognition.svg"
import records from "../images/icon-detailed-records.svg"
import customizable from "../images/icon-fully-customizable.svg"

export default function Advanced() {
  return (
    <>
      <section className="bg-slate-100 pt-40 pb-10 lg:pb-40">
        <div className="max-width">
          <h2 className="text-3xl lg:text-4xl text-center">
            Advanced Statistics
          </h2>
          <p className="text-center text-base mb-10 mt-4">
            Track how your links are performing across the web with our <br />{" "}
            advanced statistics dashboard.
          </p>

          <div className="cards grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 py-10 lg:pb-20 lg:pt-14 relative">
            <div className="line"></div>
            <article className="bg-white p-5 lg:px-7 rounded transition-all duration-150">
              <img src={brand} alt="Brand Recognition" />
              <h3 className="mb-2 mt-6 text-xl">Brand Recognition</h3>
              <p>
                Boost your brand recognition with each click. Generic links
                don't mean a thing. Branded links help instil confidence in your
                content.
              </p>
            </article>

            <article className="bg-white p-5 lg:px-7 rounded transition-all duration-150">
              <img src={records} alt="Detailed Records" />
              <h3 className="mb-2 mt-6 text-xl">Detailed Records</h3>
              <p>
                Gain insights into who is clicking your links. Knowing when and
                where people engage with your content helps inform better
                decisions.
              </p>
            </article>

            <article className="bg-white p-5 lg:px-7 rounded transition-all duration-150">
              <img src={customizable} alt="Fully Customizable" />
              <h3 className="mb-2 mt-6 text-xl">Fully Customizable</h3>
              <p>
                Improve brand awareness and content discoverability through
                customizable links, supercharging audience engagement.
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  )
}
