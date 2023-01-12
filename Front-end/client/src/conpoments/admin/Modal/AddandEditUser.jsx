import React, { useState} from "react";
import Modal from "react-modal";
import images from "~/assets/images";
import "~/style/AddandEditUser.css"
import {AiOutlineFolderAdd} from "react-icons/ai";
import CommonUtils from "~/untils/CommonUtils";
import countrydata from '~/Countrydata.json';
import {useParams} from "react-router-dom";


const initialState = {
    firstName: "",
    Avatar:"",
    lastName: "",
    userName: "",
    Email: "",
    Password: "",
    City: []
};
const AddandEditUser = ({isOpen, FuncToggleModal}) => {
    const [state, setState] = useState(initialState);
    const {id} = useParams();
    // const navigate = useNavigate();
    const {firstName, lastName, userName, Email, Password, City} = state;

    const getUserDetail = async (e) => {
        e.preventDefault()
    }
    const handleChange = (e) => {
        setState({...state, [e.target.name]: e.target.value});
    };
    const onCityChange = (e) => {
        setState({ ...state, City: e.target.value });
    };
    const handleOnchangeImg = async (e) => {
        let data = e.target.files;
        let files = data[0];

        if (files) {
            let base64 = await CommonUtils.getBase64(files);
            setState({
                ...state,
                Avatar: base64,
            });
        }
    };
    const handleSave= async ()=>{
        if(!id){
            await console.log(state)
        }
        else {
            console.log("state change",state)
        }
    }
    const customStyles = {
        content: {
            height: '600px',
            width: '1500px',
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };

    return (
        <Modal style={customStyles} onRequestClose={FuncToggleModal} isOpen={isOpen} contentLabel="Example Modal"
               ariaHideApp={false}>
            <div className="grid grid-cols-12 gap-4">
                <div className="col-start-1 col-end-4">
                    <div className="ml-9">
                        <img src={state.Avatar ? state.Avatar : images.noImage} width="80%" className=" img-avt"
                             alt="NoImage"/>
                        <label>
                            <AiOutlineFolderAdd size={35}/>
                            <input
                                type="file"
                                className="form-control"
                                onChange={handleOnchangeImg}
                                style={{display:"none"}}
                            />
                        </label>

                    </div>
                    <hr className="hr-user"/>
                    <div className="flex flex-col  mt-32 ml-20">
                        <button className="save-user w-48 p-2 mb-2" onClick={handleSave}>Save</button>
                        <button className="cancel-user w-48 p-2" onClick={FuncToggleModal}>Cancel</button>
                    </div>
                </div>
                <div className="col-start-4 col-end-12 col-span-2 ">
                    <form method="post">
                        <div className="form-input">
                            <label>First Name</label>
                            <input
                                value={firstName}
                                name="firstName"
                                onChange={handleChange}
                                type="text"
                                placeholder="Enter your First Name"
                            />
                        </div>
                        <div className="form-input">
                            <label>Last Name</label>
                            <input
                                value={lastName}
                                name="lastName"
                                onChange={handleChange}
                                type="text"
                                placeholder="Enter your First Name"
                            />
                        </div>
                        <div className="form-input">
                            <label>User Name</label>
                            <input
                                value={userName}
                                name="userName"
                                onChange={handleChange}
                                type="text"
                                placeholder="Enter your First Name"
                            />
                        </div>
                        <div className="form-input">
                            <label>Email</label>
                            <input
                                value={Email}
                                name="Email"
                                onChange={handleChange}
                                type="text"
                                placeholder="Enter your First Name"
                            />
                        </div>
                        <div className="form-input">
                            <label>Password</label>
                            <input
                                value={Password}
                                name="Password"
                                onChange={handleChange}
                                type="text"
                                placeholder="Enter your First Name"
                            />
                        </div>
                        <div className="form-input">
                            <label> City</label>
                            <select name='country' className='form-control' onChange={onCityChange} value={City}>
                                <option value="">--Select Country--</option>
                                {
                                    countrydata.map((getcountry, index) => (
                                        <option value={getcountry.country_name}
                                                key={index}>{getcountry.country_name}</option>
                                    ))

                                }
                            </select>
                        </div>
                    </form>
                </div>
            </div>
        </Modal>
    )
}
export default AddandEditUser