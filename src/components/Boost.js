import bgMobile from "../images/bg-boost-mobile.svg"
import bgDesktop from "../images/bg-boost-desktop.svg"

export default function Boost() {
  return (
    <>
      <section className="boost relative">
        <div className="max-width flex items-center justify-center flex-col">
          <picture className="absolute w-full top-0">
            <source media="(min-width: 768px)" srcSet={bgDesktop} />
            <img src={bgMobile} alt="" className="w-full" />
          </picture>
          <h2 className="text-white text-4xl text-center relative">
            Boost your links today
          </h2>
          <button className="mt-5 btn-cta rounded-full relative">
            Get Started
          </button>
        </div>
      </section>
    </>
  )
}
