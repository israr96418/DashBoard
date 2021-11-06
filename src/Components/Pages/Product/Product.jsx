import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from "recharts"

import "./Product.css"




//just for porfomance i used user components :
// i also create a product.jsx and product.css componenets but there is some problems so that way i used it
function Product() {
    const productData = [
        {
            name: "Jan",
            "Sales": 4000,
        },
        {
            name: "Feb",
            "Sales": 3000,
        },
        {
            name: "Mar",
            "Sales": 5000,
        },
    ];


    return (
        <div className="product">
            <div className="productitlecontainer">
                <h1 className="product">Product</h1>
                <button className="productlistcontainerbtn">Create</button>

            </div>
            <div className="productTop">
                <div className="producttopleft">
                    <ResponsiveContainer width="100%" aspect={4/1}>
                        <LineChart data={productData}>
                            <XAxis dataKey="name" stroke="#555odb" />
                            <Line type="monotone" dataKey="ActiveUser" stroke="#555odb" />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                <div className="producttopright">
                    right
                </div>
            </div>
        </div>
    )
}

export default Product
