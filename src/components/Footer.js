import facebook from "../images/icon-facebook.svg"
import twitter from "../images/icon-twitter.svg"
import pinterest from "../images/icon-pinterest.svg"
import instagram from "../images/icon-instagram.svg"
<<<<<<< HEAD
import logo from "../images/footer-logo.svg"
=======
>>>>>>> 8f6a104fb66c0a9d977e198f02176e7808f062cd

export default function Footer() {
  return (
    <>
<<<<<<< HEAD
      <footer className="bg-slate-900 py-10 lg:py-20">
        <div className="max-width grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-5">
          <article>
            <img src={logo} alt="" />
          </article>

          <article>
            <h3 className="text-white text-lg font-bold tracking-wide">
              Features
            </h3>
            <ul>
              <li>
                <button className="text-slate-200 text-sm mt-1">
                  Link Shortening
                </button>
              </li>
              <li>
                <button className="text-slate-200 text-sm mt-1">
                  Branded Links
                </button>
              </li>
              <li>
                <button className="text-slate-200 text-sm mt-1">
                  Analytics
                </button>
=======
      <footer className="footer">
        <div className="max-width py-10 grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-5">
          <article className="mb-10 md:mb-0">
            <img src={logo} alt="Shortly" />
          </article>

          <article>
            <h3 className="text-white mb-3 lg:mb-5 tracking-wide">Features</h3>
            <ul>
              <li className="mb-2">
                <button className="text-slate-200 text-sm">
                  Link Shortening
                </button>
              </li>
              <li className="mb-2">
                <button className="text-slate-200 text-sm">
                  Branded Links
                </button>
              </li>
              <li className="mb-2">
                <button className="text-slate-200 text-sm">Analytics</button>
>>>>>>> 8f6a104fb66c0a9d977e198f02176e7808f062cd
              </li>
            </ul>
          </article>

          <article>
<<<<<<< HEAD
            <h3 className="text-white text-lg font-bold tracking-wide">
              Resources
            </h3>
            <ul>
              <li>
                <button className="text-slate-200 text-sm mt-1">Blog</button>
              </li>
              <li>
                <button className="text-slate-200 text-sm mt-1">
                  Developers
                </button>
              </li>
              <li>
                <button className="text-slate-200 text-sm mt-1">Support</button>
=======
            <h3 className="text-white mb-3 lg:mb-5 tracking-wide">Resources</h3>
            <ul>
              <li className="mb-2">
                <button className="text-slate-200 text-sm">Blog</button>
              </li>
              <li className="mb-2">
                <button className="text-slate-200 text-sm">Developers</button>
              </li>
              <li className="mb-2">
                <button className="text-slate-200 text-sm">Support</button>
>>>>>>> 8f6a104fb66c0a9d977e198f02176e7808f062cd
              </li>
            </ul>
          </article>

          <article>
<<<<<<< HEAD
            <h3 className="text-white text-lg font-bold tracking-wide">
              Company
            </h3>
            <ul>
              <li>
                <button className="text-slate-200 text-sm mt-1">About</button>
              </li>
              <li>
                <button className="text-slate-200 text-sm mt-1">
                  Our Team
                </button>
              </li>
              <li>
                <button className="text-slate-200 text-sm mt-1">Careers</button>
              </li>
              <li>
                <button className="text-slate-200 text-sm mt-1">Contact</button>
=======
            <h3 className="text-white mb-3 lg:mb-5 tracking-wide">Company</h3>
            <ul>
              <li className="mb-2">
                <button className="text-slate-200 text-sm">About</button>
              </li>
              <li className="mb-2">
                <button className="text-slate-200 text-sm">Our Team</button>
              </li>
              <li className="mb-2">
                <button className="text-slate-200 text-sm">Careers</button>
              </li>
              <li className="mb-2">
                <button className="text-slate-200 text-sm">Contact</button>
>>>>>>> 8f6a104fb66c0a9d977e198f02176e7808f062cd
              </li>
            </ul>
          </article>

<<<<<<< HEAD
          <article>
            <ul className="flex items-center">
              <li>
                <img src={facebook} alt="" />
              </li>
              <li className="ml-4">
                <img src={twitter} alt="" />
              </li>
              <li className="mx-5">
                <img src={pinterest} alt="" />
              </li>
              <li>
                <img src={instagram} alt="" />
=======
          <article className="mt-5 md:mt-0">
            <ul className="flex items-center">
              <li>
                <img src={facebook} alt="Facebook" />
              </li>
              <li className="ml-4">
                <img src={twitter} alt="Twitter" />
              </li>
              <li className="mx-4">
                <img src={pinterest} alt="Pinterest" />
              </li>
              <li>
                <img src={instagram} alt="Instagram" />
>>>>>>> 8f6a104fb66c0a9d977e198f02176e7808f062cd
              </li>
            </ul>
          </article>
        </div>
      </footer>
    </>
  )
}
