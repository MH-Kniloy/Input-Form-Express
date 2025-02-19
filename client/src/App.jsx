import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/").then((data) => setData(data.data));
  }, [data]);

  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    axios.post("http://localhost:3000/info", {
      firstName: fName,
      lastName: lName,
      email: email,
      password: password,
    });

    setEmail("");
    setFName("");
    setLName("");
    setPassword("");
  };
  return (
    <>
      <div className="h-screen flex justify-center items-center bg-slate-200">
        <div className="w-[800px] h-[900px] bg-gray-900 rounded-lg py-6 px-4 flex flex-col gap-5">
          <input
            value={fName}
            onChange={(e) => setFName(e.target.value)}
            className="py-3 px-4 text-xl rounded-md"
            type="text"
            placeholder="First Name"
          />
          <input
            value={lName}
            onChange={(e) => setLName(e.target.value)}
            className="py-3 px-4 text-xl rounded-md"
            type="text"
            placeholder="Last Name"
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="py-3 px-4 text-xl rounded-md"
            type="email"
            placeholder="Enter Your Email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="py-3 px-4 text-xl rounded-md"
            type="password"
            placeholder="Password"
          />
          <button
            onClick={handleSubmit}
            className="text-white py-2 px-4 rounded-md bg-slate-600 active:scale-[0.98]"
          >
            Submit
          </button>

          <h1 className="text-white text-xl text-center mb-5 underline font-bold">
            All info:
          </h1>
          <div className="px-10 overflow-auto">
            {data
              .slice()
              .reverse()
              .map((item) => (
                <div className=" text-white text-xl mb-4 ">
                  <p>
                    First Name :{" "}
                    <span className="font-bold text-green-400">
                      {item.firstName}
                    </span>
                  </p>
                  <p>
                    Last Name :{" "}
                    <span className="font-bold text-green-400">
                      {item.lastName}
                    </span>
                  </p>
                  <p>
                    Email :{" "}
                    <span className="font-bold text-green-400">
                      {item.email}
                    </span>
                  </p>
                  <p>
                    Password :{" "}
                    <span className="font-bold text-green-400">
                      {item.password}
                    </span>
                  </p>
                  <hr />
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
