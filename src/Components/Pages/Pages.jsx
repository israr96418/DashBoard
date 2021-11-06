import React from 'react'
import Featured from '../../Featured/Featured'
import Chart from '../Chart/Chart'
import HomeLargeWides from '../HomeLargeWidges/HomeLargeWides'
import HomeSmallWidges from '../HomeSmallWidges/HomeSmallWidges'
// import { Userdata } from '../Dummydata'
import './Pages.css'

export default function Pages() {
    // console.log("userdata in home pages ",Userdata)
    return (

        <div className="pages">
            <Featured/>
            {/* <Chart data={Userdata}  title="User Analytics "  grid  dataKey="Active User"  />  */}
            <Chart /> 
            <div className="homewidges">
                <HomeSmallWidges/>
                <HomeLargeWides/>
            </div>
            
            
        </div>
    )
}
