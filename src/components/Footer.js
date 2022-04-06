import logo from "../images/footer-logo.svg"
import facebook from "../images/icon-facebook.svg"
import twitter from "../images/icon-twitter.svg"
import pinterest from "../images/icon-pinterest.svg"
import instagram from "../images/icon-instagram.svg"

export default function Footer() {
  return (
    <>
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
              </li>
            </ul>
          </article>

          <article>
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
              </li>
            </ul>
          </article>

          <article>
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
              </li>
            </ul>
          </article>

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
              </li>
            </ul>
          </article>
        </div>
      </footer>
    </>
  )
}
