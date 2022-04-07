import bgMobile from "../images/bg-boost-mobile.svg"
import bgDesktop from "../images/bg-boost-desktop.svg"

export default function Boost() {
  return (
    <>
      <section className="boost relative">
        <picture>
          <source media="(min-width: 768px)" srcSet={bgDesktop} />
          <img src={bgMobile} alt="" />
        </picture>

        <div className="flex items-center justify-center flex-col boost-inner">
          <h2 className="mb-5 text-3xl md:text-4xl text-white font-bold text-center">
            Boost your links today
          </h2>
          <button className="btn-cta rounded-full">Get Started</button>
        </div>
      </section>
    </>
  )
}
