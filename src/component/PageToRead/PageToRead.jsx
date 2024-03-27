import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { getStoredBooks } from '../../Utility/localStorage';
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';


const PageToRead = () => {
    const allbook = useLoaderData();
    const [readbook, setreadbook] = useState([])
    useEffect(() => {
        const storedbookId = getStoredBooks();
        // console.log(storedbookId);
        if (allbook) {
            const readbooks = [];
            for (const id of storedbookId) {
                const read = allbook.find(book => book.bookId == id);
                if (read) {
                    readbooks.push(read)
                }
            }
            setreadbook(readbooks)
        }
    }, [allbook])
    // console.log(readbook)

    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };
    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };


    return (
        <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    width={1200}
                    height={500}
                    data={readbook}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="bookName" />
                    <YAxis />
                    <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                        {readbook.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>

        </div>
    );
};

export default PageToRead;