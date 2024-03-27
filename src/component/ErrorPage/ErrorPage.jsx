import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
   
            <div className="mt-10 md:mt-28 gap-4 flex flex-col items-center justify-center ">
                <img className="w-1/6" src="https://i.ibb.co/jbW3HNB/error.jpg" alt="" />
                <h1 className=" text-5xl font-bold font-play ">Ooops!</h1>
                <p className=" text-3xl">Sorry , Page not Found for this Url</p>

                <Link to="/"><button className="btn ">Go Back Home</button></Link>
            </div>

    
    );
};

export default ErrorPage;