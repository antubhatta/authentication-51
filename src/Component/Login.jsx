import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const Login = () => {
  const {signInUser,signInWithGoogle}=useContext(AuthContext)
  const navigate = useNavigate()
    const handleLoginSubmit=e=>{
        e.preventDefault()
        const email= e.target.email.value;
        const password=e.target.password.value
        console.log(email,password)

        signInUser(email,password)
        .then((result)=>{
          console.log(result.user)
          e.target.reset()
          navigate('/')
         
        })
        .catch((error)=>{
          console.error(error)
        })
        
    }
    const handleGoogle=()=>{
      signInWithGoogle()
      .then((result)=>{
        console.log(result.user)
      })
      .catch((error)=>{
        console.log(error)
      })
    }
    return (
       <div>
         <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col">
    <div className="text-center">
      <h1 className="text-5xl font-bold">Login now!</h1>
    
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLoginSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" required name="email" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" required name="password" placeholder="password" className="input input-bordered"/>
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <p className="">New user please can be? <Link to="/register"><button className="btn btn-link">Register</button></Link></p>
        <p><button onClick={handleGoogle} className="btn btn-ghost">GOOGLE</button></p>
      </form>
      
    </div>
  </div>
</div>

       </div>
    );
};

export default Login;