import React, { useState, useEffect } from "react"
import bgMobile from "../images/bg-shorten-mobile.svg"
import bgDesktop from "../images/bg-shorten-desktop.svg"

const getLocalStorage = () => {
  let links = localStorage.getItem("links")

  if (links) {
    return JSON.parse(localStorage.getItem("links"))
  } else {
    return null
  }
}

export default function Shortener() {
  const [text, setText] = useState("")
  const [links, setLinks] = useState(getLocalStorage())
  const [buttonText, setButtonText] = useState("Copy")

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!text) {
      alert("Input is empty")
    } else {
      const shortenLink = async () => {
        const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${text}`)
        const data = await res.json()
        setLinks(data)
        setText("")
        setButtonText("Copy")
        console.log(data)
      }

      shortenLink()
    }
  }

  useEffect(() => {
    localStorage.setItem("links", JSON.stringify(links))
  }, [links])

  const handleCopy = () => {
    navigator.clipboard.writeText(links.result.full_short_link)
    setButtonText("Copied!")
  }

  return (
    <>
      <section className="max-width shortener rounded-lg relative">
        <picture className="absolute top-0 left-0 w-full">
          <source media="(min-width: 768px)" srcSet={bgDesktop} />
          <img
            src={bgMobile}
            alt="Shortly"
            className="w-full rounded-bl-lg rounded-br-lg"
          />
        </picture>

        <form
          onSubmit={handleSubmit}
          className="h-44 relative z-50 flex flex-col justify-center md:items-center md:flex-row px-5 md:max-w-xl md:mx-auto lg:max-w-3xl"
        >
          <input
            type="url"
            name="shortener"
            id="shortener"
            placeholder="Shorten a link here"
            className="placeholder-slate-600 w-full md:mr-5 text-sm py-2 px-4 rounded-lg shadow mb-2 md:mb-0"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button
            type="submit"
            onClick={handleSubmit}
            className="btn-cta rounded-lg block md:w-52"
          >
            Shorten It!
          </button>
        </form>

        <div className="grid grid-cols-1 gap-10 mt-2">
          {/* {!links.ok ? (
            <p className="text-red-500 text-sm">Enter a valid url</p>
          ) : ( */}
          <>
            <div className="py-3 bg-white p-5 rounded md:flex items-center justify-between">
              <p className="text-slate-800 border-b md:border-none">
                {links.result.original_link}
              </p>
              <article className="md:flex md:items-center">
                <p className="text-cyan-400 pt-2 md:mr-5">
                  {links.result.full_short_link}
                </p>
                <button
                  className="btn-cta rounded focus:bg-slate-800"
                  onClick={handleCopy}
                >
                  {buttonText}
                </button>
              </article>

              {Object.values(links.result).map((value) => console.log(value))}
            </div>
          </>
          {/* )} */}
        </div>
      </section>
    </>
  )
}
