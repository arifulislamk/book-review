import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
   
            <div className="mt-10 md:mt-28 gap-4 flex flex-col items-center justify-center ">
                <h1 className=" text-5xl font-bold font-play ">Ooops!</h1>
                <p className=" text-3xl">Sorry , Page not Found for this Url</p>

                <Link to="/"><button className="btn ">Go Back Home</button></Link>
            </div>

    
    );
};

export default ErrorPage;