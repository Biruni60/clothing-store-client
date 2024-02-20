import Collection from "./Collection";
import Banner from "./Home Components/Banner";
import Category from "./Home Components/Category";
import ContactUs from "./Home Components/ContactUs";


const Home = () => {
    return (
        <div>
        <Banner></Banner>   
    
        <Collection></Collection> 
      
       <Category></Category>
       <ContactUs></ContactUs>
        </div>
    );
};

export default Home;