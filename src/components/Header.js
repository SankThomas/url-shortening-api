import logo from "../images/logo.svg"

export default function Header() {
  return (
    <>
      <header className="max-width flex items-center justify-between p-5 lg:py-10">
        <div className="flex items-center">
          <img src={logo} alt="Shortly" />

          <nav className="ml-5">
            <ul className="flex items-center text-sm text-slate-600">
              <li>
                <button>Features</button>
              </li>
              <li className="mx-5">
                <button>Pricing</button>
              </li>
              <li>
                <button>Resources</button>
              </li>
            </ul>
          </nav>
        </div>

        <div>
          <ul className="flex items-center text-sm text-slate-600">
            <li>
              <button>Login</button>
            </li>
            <li className="ml-5">
              <button className="btn-cta rounded-full">Sign Up</button>
            </li>
          </ul>
        </div>
      </header>
    </>
  )
}
