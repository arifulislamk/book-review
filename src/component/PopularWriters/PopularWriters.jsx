import { useLoaderData } from "react-router-dom";
import Writer from "../Writer/Writer";

const PopularWriters = () => {
    const writers = useLoaderData() ;
 
    return (
        <div>
             <div className=" mt-2 md:mt-6 py-4 md:py-8 bg-[#13131326] text-center rounded-lg font-work">
                <h2 className=" font-bold text-xl md:text-3xl ">Most Popular Writters</h2>
            </div>
            <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4 font-work">
                {
                    writers.map( writer => <Writer key={writer.id} writer={writer}> </Writer> )
                }
            </div>
            
        </div>
    );
};

export default PopularWriters;