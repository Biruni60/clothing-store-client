import { Link } from "react-router-dom";


const Category = () => {
    return (
       <div className="md:px-24">
       <h1 className="text-3xl text-center text-yellow-600 my-20">---CATEGORY---</h1>
         <div className="carousel h-60 rounded-box">
 <Link>
 <div className="carousel-item">
    <img src="https://i.ibb.co/8j853Jx/PANJABI-COLLECTION.png" alt="Burger" />
  </div> 
 </Link>
  <Link>
  <div className="carousel-item">
    <img src="https://i.ibb.co/4dXZNy7/PANJABI-COLLECTION-1.png" alt="Burger" />
  </div> 
  </Link>
  <Link>
  <div className="carousel-item">
    <img src="https://i.ibb.co/wK9qStS/PANJABI-COLLECTION-2.png" alt="Burger" />
  </div> 
  </Link>
  <Link>
  <div className="carousel-item">
    <img src="https://i.ibb.co/P4MV28W/PANJABI-COLLECTION-3.png" alt="Burger" />
  </div> 
  </Link>
 <Link>
 <div className="carousel-item">
    <img src="https://i.ibb.co/19PzWxr/PANJABI-COLLECTION-5.png" alt="Burger" />
  </div> 
 </Link>
 <Link>
 <div className="carousel-item">
    <img src="https://i.ibb.co/sKT08M5/PANJABI-COLLECTION-4.png" alt="Burger" />
  </div> 
 </Link>
 
</div>
       </div>
    );
};

export default Category;