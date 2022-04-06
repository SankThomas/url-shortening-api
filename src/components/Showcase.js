import bgMobile from "../images/illustration-working.svg"

export default function Showcase() {
  return (
    <>
      <section className="max-width grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-10 md:place-items-center py-10 lg:pb-32 lg:gap-20">
        <article>
          <h1 className="mb-3 text-4xl lg:text-6xl lg:leading-tight">
            More than just shorter links
          </h1>
          <p className="mb-5">
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </p>
          <button className="btn-cta rounded-full">Get Started</button>
        </article>

        <article>
          <img src={bgMobile} alt="Shortly" />
        </article>
      </section>
    </>
  )
}
