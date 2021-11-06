import "./NewUser.css"

function NewUser() {
    return (
        <div className="NewUser">
            <h1 className="newusertitle">New User</h1>
            <form className="newuserform">
                <div className="newuseritem">
                    <label>Username</label>
                    <input type="text" placeholder="israr" />
                </div>

                <div className="newuseritem">
                    <label>Full Name</label>
                    <input type="text" placeholder="israr dawar" />
                </div>

                <div className="newuseritem">
                    <label>Email</label>
                    <input type="email" placeholder="israr" />
                </div>

                <div className="newuseritem">
                    <label>Password</label>
                    <input type="password" placeholder="password" />
                </div>

                <div className="newuseritem">
                    <label>Phone Number</label>
                    <input type="text" placeholder="+92 3359696418" />
                </div>
                <div className="newuseritem">
                    <label>Address</label>
                    <input type="text" placeholder="Pakistan | Peshwarar | Hayatabad" />
                </div>

                <div className="newuseritem">
                    <label>Gender</label>
                    <div className="newuseritemGender">
                        <input type="radio" name="gender" id="male" value="value" />
                        <label for="male">Male</label>

                        <input type="radio" name="gender" id="female" value="value" />
                        <label for="female">Female</label>

                        <input type="radio" name="gender" id="other" value="value" />
                        <label for="other">Other</label>
                    </div>
                </div>
                <div className="newuseritem">
                    <label for="active">Active</label>
                    <select name="active" id="active" className="newuserselect">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
            </form>
                <button className="newusercreatebutton">Create</button>
        </div>
    )
}

export default NewUser
