import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider";


const Navbar = () => {
    const {user,logOut}=useContext(AuthContext)
    const handleSignOut=()=>{
logOut()
    }
    const links= <>
       <NavLink to="/"><li><a>HOME</a></li></NavLink>
       <NavLink to="/addproduct"><li><a>ADD PRODUCT</a></li></NavLink>
       <NavLink to="/mycart"><li><a>MY CART</a></li></NavLink>
    </>
    return (
        <div className="navbar bg-base-300 text-yellow-600">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
             {
                links
             }
            </ul>
          </div>
          <Link to="/">
          <div className="flex gap-2 justify-center items-center">
            <img className="w-16 flex-1" src="https://i.ibb.co/FzBC5zj/Yellow-and-Black-Online-Shop-Business-Logo-removebg-preview.png" alt="" />
            <p className="text-xl">ARAB CLOTHING</p>
          </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
     {
        links
     }
          </ul>
        </div>
        <div className="navbar-end">
         {
            user?
            <div >
        {/* You can open the modal using document.getElementById('ID').showModal() method */}
        <button  onClick={()=>document.getElementById('my_modal_4').showModal()}><div className="avatar">
  <div className="w-12 rounded-full ring ring-yellow-600 ring-offset-yellow-600 ring-offset-2">
    <img src={user?.photoUrl} />
  </div>
</div></button>
<dialog id="my_modal_4" className="modal">
  <div className="modal-box w-11/12 max-w-5xl">
    <h3 className="font-bold text-lg">{user?.displayName}</h3>
    <button onClick={handleSignOut} className="btn btn-outline text-yellow-600 my-4">Log Out</button>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
</div>
            :
            <Link to="/signin"><a className="btn bg-transparent text-yellow-600 text-lg">LOG IN</a></Link>
         }
        </div>

      </div>
    );
};

export default Navbar;