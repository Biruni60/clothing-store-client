
const Review = () => {
    return (
        <div>
        <h2 className="text-3xl text-center my-20 text-yellow-600">---REVIEWS FROM CUSTOMERS---</h2>
          <div className="carousel carousel-center  px-10 text-yellow-600 md:mx-24 py-32 space-x-4 bg-neutral rounded-box">
  <div className="carousel-item">
    <p className=" text-xl">This product exceeded my expectations! Highly recommended.</p> 
  </div> 
  <div className="carousel-item">
    <p className=" text-xl">Absolutely love this product! It is a game-changer.</p> 
  </div> 
  <div className="carousel-item">
    <p className="t text-xl">Incredible quality and value for the price. I am impressed!</p> 
  </div> 
  <div className="carousel-item">
    <p className=" text-xl">Best purchase I have made in a long time. 10/10!</p> 
  </div> 
  <div className="carousel-item">
    <p className=" text-xl">Could not be happier with my purchase. Thank you!</p> 
  </div> 
</div>

        </div>
    );
};

export default Review;