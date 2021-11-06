import { ArrowDownward } from '@mui/icons-material'
import React from 'react'
import './Featured.css'

export default function Featured() {
    return (
        <div className="cards">
            <div className="cardsitems">
                <span className="cardsitemstitle">Revenue</span>
                <div className="cardsitemsrateExchange">
                    <span className="cardsitemsrateing">$7,854</span>
                    <span className="UpandDown">
                        -12.3 <ArrowDownward  className="cardsicons negative"/>
                    </span>
                </div>
                <span className="cardsitemssubtitle">Compared to last month</span>

            </div>



            <div className="cardsitems">
                <span className="cardsitemstitle">Sales</span>
                <div className="cardsitemsrateExchange">
                    <span className="cardsitemsrateing">$8,654</span>
                    <span className="UpandDown">
                        -12.3 <ArrowDownward  className="cardsicons negative"/>
                    </span>
                </div>
                <span className="cardsitemssubtitle">Compared to last month</span>

            </div>



            <div className="cardsitems">
                <span className="cardsitemstitle">Cost</span>
                <div className="cardsitemsrateExchange">
                    <span className="cardsitemsrateing">$3,231</span>
                    <span className="UpandDown">
                        +12.3 <ArrowDownward className="cardsicons"/>
                    </span>
                </div>
                <span className="cardsitemssubtitle">Compared to last month</span>

            </div>

        </div>
    )
}
