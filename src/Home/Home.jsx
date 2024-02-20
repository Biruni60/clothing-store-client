import Collection from "./Collection";
import AllProducts from "./Home Components/AllProducts";
import Banner from "./Home Components/Banner";
import Category from "./Home Components/Category";
import ContactUs from "./Home Components/ContactUs";
import FeaturedProduct from "./Home Components/FeaturedProduct";
import OfflineShops from "./Home Components/OfflineShops";
import Review from "./Home Components/Review";


const Home = () => {
    return (
        <div>
        <Banner></Banner>   
    
        <Collection></Collection> 
      
       <Category></Category>
       <FeaturedProduct></FeaturedProduct>
       <AllProducts></AllProducts>
       <ContactUs></ContactUs>
       <Review></Review>
       <OfflineShops></OfflineShops>
        </div>
    );
};

export default Home;