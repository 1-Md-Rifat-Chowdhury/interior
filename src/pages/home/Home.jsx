import { Link } from "react-router-dom";
import logoPic from "../../assets/logo.png";
import sofa from "../../assets/sofa.svg";

const Home = () => {
    return (
        <div className="">
            

            <div className="flex justify-center items-center gap-20 ">
                <div className="flex  items-center">
                    <img className="w-20 h-20 " src={logoPic}></img>
                    <h1 className="font-semibold">Md. Rifat Chowdhury</h1>

                </div>
                
                <div className="">

                    <Link className="ps-4" to="/" >Home</Link>
                    <Link className="ps-4" to="/" >Design Idea</Link>
                    <Link className="ps-4" to="/" >Cities</Link>
                    
                    <Link className="" to="/"> More
                    <select className="">
                        <option>About</option>
                        <option>Contact us</option>
                        <option>Privacy policy</option>
                        
                    </select> 
                    </Link>
                                     
                    
                </div>


            </div>

            <div className="">
                <img className=" w-full h-96 blur-sm" src="../../../public/interior.avif"/>
            </div>

            <div>
                <img className="h-20 w-20" src={sofa}/>
            </div>

        </div>
    );
};

export default Home;