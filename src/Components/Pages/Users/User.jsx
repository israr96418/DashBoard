import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid } from "@mui/icons-material"
import "./User.css"
import PublishIcon from '@mui/icons-material/Publish';
import { Link } from "react-router-dom";

function User() {
    const handlechange = (e)=>{
        e.preventDefault();
    }
    return (
        <div className="user">
            <div className="usertitlecontainer">
                <h1 className="usertiteheading">Edit User</h1>
                <Link to="/newUser">
                <button className="usertitlebutton">Create</button>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="usershowtop">
                        <img src="https://images.unsplash.com/photo-1633113216385-dcb68bfcd3b0?ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8Y29tcHV0ZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" className="userhsowimage" />
                        <div className="usershowdetails">
                            <span className="usershowname">Israr dawar</span>
                            <span className="usershowtitlt">Software Engineer</span>
                        </div>
                    </div>
                    <div className="usershowbottom">
                        <span className="usershowbottomtittle">Account Details</span>
                        <div className="usershowbottomdetails">
                            <PermIdentity className="usershowbottomicons" />
                            <span className="usershowinfo">isrardawar485</span>
                        </div>

                        <div className="usershowbottomdetails">
                            <CalendarToday className="usershowbottomicons" />
                            <span className="usershowinfo">10.12.1999</span>
                        </div>
                        <span className="usershowbottomtittle">Contacts Details</span>

                        <div className="usershowbottomdetails">
                            <PhoneAndroid className="usershowbottomicons" />
                            <span className="usershowinfo">+1 123 456 67</span>
                        </div>

                        <div className="usershowbottomdetails">
                            <MailOutline className="usershowbottomicons" />
                            <span className="usershowinfo">annabeck99@gmail.com</span>
                        </div>

                        <div className="usershowbottomdetails">
                            <LocationSearching className="usershowbottomicons" />
                            <span className="usershowinfo">New York | USA</span>
                        </div>



                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userupdatetitle">Edit</span>

                    <form className="userupdateform">
                        <div className="userupdateformleft">
                            <div className="userupdateitems">
                               <label>UserName</label>
                                <input type="text" placeholder="isrardawar485" className="userupdateinputfield" />
                            </div>

                            <div className="userupdateitems">
                               <label>Full Name</label>
                                <input type="text" placeholder="10.12.1999" className="userupdateinputfield" />
                            </div>


                            <div className="userupdateitems">
                               <label>Email</label>
                                <input type="text" placeholder="+1 123 456 67" className="userupdateinputfield" />
                            </div>


                            <div className="userupdateitems">
                               <label>Phone</label>
                                <input type="text" placeholder="annabeck99@gmail.com" className="userupdateinputfield" />
                            </div>


                            <div className="userupdateitems">
                               <label>Address</label>
                                <input type="text" placeholder="New York | USA" className="userupdateinputfield" />
                            </div>
                        </div>
                        <div className="userupdateformright">
                            <div className="userupdateupload">
                                <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y29tcHV0ZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" className="userupdateimage" />
                            <label htmlFor="file"><PublishIcon className="userupdateicons" /></label>
                            <input type="file" id="file" className="userupdaterightinput"  style={{display:'none'}}/>
                            </div>
                            <button onClick={()=>{handlechange()}} className="userupdatebtn">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default User
