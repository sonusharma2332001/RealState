import {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom';

const SignIn = () => {
  const [formdata, setformdata] = useState({});
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(null);
  const navigate = useNavigate();

  const handlechange = (e) => {
    setformdata({
      ...formdata,
      [e.target.id]: e.target.value,
    });
  };
  const handlesubmitte = async (e) => {
    e.preventDefault();
    setloading(true)
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formdata),
      });
      const response = await res.json();
      if(response.success===false){
        setloading(false)
        seterror(response.message)
        return
      }
      seterror(null);
      setloading(false)
      navigate('/');
    } catch (error) {
      seterror(error)
      setloading(false)
    }
  };
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign In</h1>
      <form onSubmit={handlesubmitte} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="email"
          className="border p-3 rounded-lg"
          id="email"
          onChange={handlechange}
        />
        <input
          type="password"
          placeholder="password"
          className="border p-3 rounded-lg"
          id="password"
          onChange={handlechange}
        />
        <button className="bg-slate-700 text-white p-3 rounded-lg hover:opacity-90 disabled:opacity-70">
          {loading?'wait...':'Sign In'}
        </button>
      </form>
      <div className="flex gap-3">
        <p>Dont have account?</p>
        <Link to={"/signup"}>
          <span className="text-blue-800 text-pointer"> register</span>
        </Link>
      </div>
      {error && <p className="text-red-600 mt-5">{error}</p>}
    </div>
  );
};

export default SignIn
