import { AttachMoney, BarChart, ChatBubbleOutline, DynamicFeed, LineStyleOutlined, MailOutline, PermIdentity, Report, Storefront, Timeline, TrendingUp, WorkOutline } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'
import './SideBar.css'

function SideBar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">


                    <h3 className="sidbarTitle">DashBoard</h3>
                    <div className="sidebarlistitems active">
                        <LineStyleOutlined className="icons" />
                        <Link to="/" className="link">
                            Home
                        </Link>
                    </div>
                    <div className="sidebarlistitems">
                        <Timeline className="icons" />
                        Analytics
                    </div>
                    <div className="sidebarlistitems">
                        <TrendingUp className="icons" />
                        Sale
                    </div>



                    <h3 className="sidbarTitle">Quick Menu</h3>
                    <div className="sidebarlistitems">
                        <Link to="/userlist" className="linkToDifferentPages">
                            <PermIdentity className="icons" />
                            Users
                        </Link>
                    </div>

                    <div className="sidebarlistitems">
                        <Link to="/productlist" className="linkToDifferentPages">
                            <Storefront className="icons" />
                            Products
                        </Link>
                    </div>
                    <div className="sidebarlistitems">
                        <AttachMoney className="icons" />
                        Transction
                    </div>
                    <div className="sidebarlistitems">
                        <BarChart className="icons" />
                        Reports
                    </div>




                    <h3 className="sidbarTitle">Notification</h3>
                    <div className="sidebarlistitems">
                        <MailOutline className="icons" />
                        Mail
                    </div>
                    <div className="sidebarlistitems">
                        <DynamicFeed className="icons" />
                        FeedBack
                    </div>
                    <div className="sidebarlistitems">
                        <ChatBubbleOutline className="icons" />
                        Messages
                    </div>


                    <h3 className="sidbarTitle">Staff</h3>
                    <div className="sidebarlistitems">
                        <WorkOutline className="icons" />
                        Manage
                    </div>
                    <div className="sidebarlistitems">
                        <Timeline className="icons" />
                        Analytics
                    </div>
                    <div className="sidebarlistitems">
                        <Report className="icons" />
                        Reports
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SideBar
