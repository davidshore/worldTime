import { Outlet, Link } from "react-router-dom";

// let ary = Intl.supportedValuesOf("timeZone");
// console.log(ary);

function App() {
  return (
    <div>
      <nav className="bg-blue-400 flex justify-between p-8">
        <h1 className="text-4xl text-white font-extrabold">
          <Link to={"/"}>World Time</Link>
        </h1>

        <ul className="flex items-center space-x-3">
          <li>
            <Link to={"about"}>About</Link>
          </li>
          <li>
            <Link to={"contact"}>Contact</Link>
          </li>
        </ul>
      </nav>
      <main className="p-8">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
