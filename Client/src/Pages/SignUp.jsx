import {Link} from 'react-router-dom';
const SignUp = () => {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
      <form className='flex flex-col gap-4'>
        <input type="text" placeholder='username' className='border p-3 rounded-lg' id='username' />
        <input type="email" placeholder='email' className='border p-3 rounded-lg' id='email' />
        <input type="password" placeholder='password' className='border p-3 rounded-lg' id='password' />
        <button className='bg-slate-700 text-white p-3 rounded-lg hover:opacity-90 disabled:opacity-70'>SIGN UP</button>
      </form>
      <div className='flex gap-3'> 
        <p>Have an account?</p>
        <Link to={"/login"}>
          <span className='text-blue-800 text-pointer'>Login</span>
        </Link>
      </div>
    </div>
  )
}

export default SignUp
