import Collection from "./Collection";
import Banner from "./Home Components/Banner";
import Category from "./Home Components/Category";


const Home = () => {
    return (
        <div>
        <Banner></Banner>   
    
        <Collection></Collection> 
      
       <Category></Category>
        </div>
    );
};

export default Home;