const Login = () => {
	return (
		 <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full max-w-md p-8 rounded-xl shadow-2xl border border-white/20 bg-white/10 backdrop-blur-lg">
        <h1 className="text-4xl font-bold text-center text-white mb-6">
					Login
					<span className='text-yellow-500'> Convo</span>
				</h1>

				<form>
					<div>
						<label className='label p-2'>
							<span className='text-base label-text'>Username</span>
						</label>
						<input type='text' placeholder='Enter username' className='w-full input input-bordered h-10' />
					</div>

					<div>
						<label className='label'>
							<span className='text-base label-text'>Password</span>
						</label>
						<input
							type='password'
							placeholder='Enter Password'
							className='w-full input input-bordered h-10'
						/>
					</div>
					<a href='#' className='text-sm  hover:underline hover:text-blue-600 mt-2 inline-block'>
						{"Don't"} have an account?
					</a>

					<div>
						<button className='btn btn-block btn-sm mt-2'>Login</button>
					</div>
				</form>
			</div>
		</div>
	);
};
export default Login;