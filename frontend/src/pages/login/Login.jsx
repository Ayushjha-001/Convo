import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
	const[password,setPassword]=useState("")
	const[userName,setUserName]=useState("")
	const{loading,login}=useLogin()
	const handleLogin=async(e)=>{
		e.preventDefault()
        await login(userName,password)
	}
	return (
		 <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full max-w-md p-8 rounded-xl shadow-2xl border border-white/20 bg-white/10 backdrop-blur-lg">
        <h1 className="text-4xl font-bold text-center text-white mb-6">
					Login
					<span className='text-yellow-500'> Convo</span>
				</h1>

				<form onSubmit={handleLogin}>
					<div>
						<label className='label p-2'>
							<span className='text-base text-gray-300 label-text'>Username</span>
						</label>
						<input type='text' placeholder='Enter username' className='w-full input input-bordered h-10' value={userName} onChange={(e)=>setUserName(e.target.value)} />
					</div>

					<div>
						<label className='label'>
							<span className='text-base text-gray-300 label-text'>Password</span>
						</label>
						<input
							type='password'
							placeholder='Enter Password'
							className='w-full input input-bordered h-10'
							value={password}
							onChange={(e)=>setPassword(e.target.value)}
						/>
					</div>
					<Link to={"/signup"} className='text-sm text-gray-300  hover:underline hover:text-blue-600 mt-2 inline-block'>
						{"Don't"} have an account?
					</Link>

					<div>
						<button className='btn btn-block btn-sm mt-2' disabled={loading}>
					    {loading?<span className="loading loading-spinner"></span>:"Log In"}
							</button>
					</div>
				</form>
			</div>
		</div>
	);
};
export default Login;