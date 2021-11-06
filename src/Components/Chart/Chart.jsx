import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import "./Chart.css"


export default function Chart() {

    const Userdata = [
        {
            name: 'jan',
            "Active user": 4000,

        },
        {
            name: 'Feb',
            "Active user": 3000,

        },
        {
            name: 'March',
            "Active user": 2000,

        },
        {
            name: 'April',
            "Active user": 2780,

        },
        {
            name: 'May',
            "Active user": 1890,

        },
        {
            name: 'June',
            "Active user": 2390,

        },
        {
            name: 'july',
            "Active user": 3490,

        },
    ];


    return (
        <div className="chart">
            <h3 className="charTitle">User Analytics</h3>
            {/* aspect{4/1} means if width is 400 then height is 100 */}
            {/* this contianer make our chart responsive and it will adopt every screen size(means width and height) */}
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart data={Userdata}>
                    <XAxis dataKey="name" stroke="#5550bd" />
                    <Line type="monotone" dataKey="Active user" stroke="#5550bd" />
                    {/* here i will used dynamic logic  or child props*/}
                    <Tooltip />
                    <CartesianGrid stroke="#e0dfdf" strokeDasharray={5, 5} />
                    {/* <Legend/> */}
                </LineChart>

            </ResponsiveContainer>

        </div>
    )
}







// export default function Chart({ data, datakey, grid, title }) {

//     console.log("user data in chart components: ", data)
//     return (
//         <div className="chart">
//             <h3 className="charTitle">{title}</h3>
//             {/* aspect{4/1} means if width is 400 then height is 100 */}
//             {/* this contianer make our chart responsive and it will adopt every screen size(means width and height) */}
//             <ResponsiveContainer width="100%" aspect={4 / 1}>
//                 <LineChart data={data}>
//                     <XAxis dataKey="name" stroke="#5550bd" />
//                     <Line type="monotone" dataKey={data} stroke="#5550bd" />
//                     {/* here i will used dynamic logic  or child props*/}
//                     <Tooltip />
//                     {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray={5, 5} />}
//                 </LineChart>

//             </ResponsiveContainer>

//         </div>
//     )
// }








