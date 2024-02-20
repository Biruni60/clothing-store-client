import Collection from "./Collection";
import Banner from "./Home Components/Banner";
import Category from "./Home Components/Category";
import ContactUs from "./Home Components/ContactUs";
import OfflineShops from "./Home Components/OfflineShops";


const Home = () => {
    return (
        <div>
        <Banner></Banner>   
    
        <Collection></Collection> 
      
       <Category></Category>
       <ContactUs></ContactUs>
       <OfflineShops></OfflineShops>
        </div>
    );
};

export default Home;