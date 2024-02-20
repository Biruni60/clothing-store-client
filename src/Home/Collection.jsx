import { Link } from "react-router-dom";

const Collection = () => {
    return (
    <div className="md:px-24">
    <h2 className="text-3xl text-center text-yellow-600 my-16">---COLLECTIONS---</h2>
         <div className="grid md:grid-cols-2">
      <Link to="/summercollection">
      <div className="card ">
  <figure>
    <img src="https://i.ibb.co/7CH26vz/Blue-White-Illustrated-Winter-Collection-Facebook-Post-1.png" alt="Shoes" className="rounded-xl" />
  </figure>
</div>
      </Link>
      <Link to="/wintercollection">
      <div className="card">
  <figure>
    <img src="https://i.ibb.co/28rjv7V/Blue-White-Illustrated-Winter-Collection-Facebook-Post.png" alt="Shoes" className="rounded-xl" />
  </figure>
</div>
      </Link>
     </div>
    </div>
    );
};

export default Collection;