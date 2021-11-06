import "./HomeLargeWides.css"

function HomeLargeWides() {
    const Button = ({type})=>{
        return(

            <button className={"homelargeBtn " + type}>{type}</button>
            )
    }
    return (
        <div className="HomeLargeWidges">
            <h3 className="homelargewidgesTitle">Lastes Transction</h3>
            <table className="homelargewidgestabale">
             <tr className="homelargewidgesTR">
                 <th className="homelargewidgesTH">Customer</th>
                 <th className="homelargewidgesTH">Date</th>
                 <th className="homelargewidgesTH">Amount</th>
                 <th className="homelargewidgesTH">Status</th>
             </tr>
             <tr className="homelargewidgesTR">
                 <td className="homelargewidgesUser">
                     <img className="homelgimg" src="https://images.unsplash.com/photo-1566004100631-35d015d6a491?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YmFieXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"  title="table row entry images"  />
                 <span className="homelargewidgesName">Israr </span>
                 </td>

                 <td className="widgeslgdate">1 jan 2021</td>
                 <td className="widgeslgAmount">$2,331</td>
                 <td className="widgeslgStatus"><Button type="Approved"/></td>
             </tr>



             <tr className="homelargewidgesTR">
                 <td className="homelargewidgesUser">
                     <img className="homelgimg" src="https://images.unsplash.com/photo-1519689680058-324335c77eba?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJhYnl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"  title="table row entry images"  />
                 <span className="homelargewidgesName">Rahim </span>
                 </td>

                 <td className="widgeslgdate">30 sep 2021</td>
                 <td className="widgeslgAmount">$9,431</td>
                 <td className="widgeslgStatus"><Button type="Pending"/></td>
             </tr>




             <tr className="homelargewidgesTR">
                 <td className="homelargewidgesUser">
                     <img className="homelgimg" src="https://images.unsplash.com/photo-1522771930-78848d9293e8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGJhYnl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"  title="table row entry images"  />
                 <span className="homelargewidgesName">Khan </span>
                 </td>

                 <td className="widgeslgdate">4 jan 2021</td>
                 <td className="widgeslgAmount">$4,431</td>
                 <td className="widgeslgStatus"><Button type="Approved"/></td>
             </tr>


             <tr className="homelargewidgesTR">
                 <td className="homelargewidgesUser">
                     <img className="homelgimg" src="https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJhYnl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"  title="table row entry images"  />
                 <span className="homelargewidgesName">Awais </span>
                 </td>

                 <td className="widgeslgdate">3 March 2021</td>
                 <td className="widgeslgAmount">$2,431</td>
                 <td className="widgeslgStatus"><Button type="Rejected"/></td>
             </tr>
             
            </table>
          
        </div>
    )
}

export default HomeLargeWides
