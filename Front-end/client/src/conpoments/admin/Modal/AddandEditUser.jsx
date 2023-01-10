import React, {useState} from "react";
import Modal from "react-modal";
import images from "~/assets/images";
import "../../../style/AddandEditUser.css"
import {AiOutlineFolderAdd} from "react-icons/ai";
import CommonUtils from "~/untils/CommonUtils";
import {InputUserCheckBox, InputUserText} from "~/fromTable/FormInput";
const AddandEditUser = ({ isOpen, FuncToggleModal }) => {
    let [state,setState]=useState({
            id:'',
            avtar:'',
            firstName:'',
            lastName:'',
            userName:'',
            Email:'',
            Password:'',
            Status:'',
        });
    const handleOnchangeImg = async (e) => {
        let data = e.target.files;
        let files = data[0];

        if (files) {
            let base64 = await CommonUtils.getBase64(files);
            setState({
                ...state,
                avatar: base64,
            });
        }
    };
    const handleOnchangeInput = (e, id) => {
        e.preventDefault();
        let copyState = { ...state };

        copyState[id] = e.target.value;

        setState(copyState);
    };
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
      <Modal  style={customStyles} onRequestClose={FuncToggleModal} isOpen={isOpen}>
          <div className="grid grid-cols-12 gap-4">
              <div className="col-start-1 col-end-4">
               <div className="ml-9">
                   <img src={state.avatar ? state.avatar : images.noImage} width="80%" className=" img-avt" alt="NoImage"/>
                   <label>
                       <AiOutlineFolderAdd size={35}/>
                       <input type="file" onChange={(e)=>handleOnchangeImg(e)} style={{display:"none"}}/>
                   </label>
               </div>
                  <hr className="hr-user"/>
                  <div className="flex flex-col  mt-32 ml-20">
                      <button className="save-user w-48 p-2 mb-2">Save</button>
                      <button className="cancel-user w-48 p-2">Cancel</button>
                  </div>
              </div>
              <div className="col-start-4 col-end-12 col-span-2 ">
                  <form method="post">
                          {InputUserText.map((item,key)=>(
                              <div className="form-input" key={key}>
                                  <label>{item.Lable}</label>
                                  <input
                                      value={item.value}
                                      onChange={(e) => handleOnchangeInput(e, `${item.value}`)}
                                      type={item.Type}
                                      placeholder={item.Placeholder}
                                  />
                              </div>
                              ))}
                            {InputUserCheckBox.map((item,key)=>(
                                <div className="form-input" key={key}>
                                    <label>{item.Lable}</label>
                                   <div className="flex">
                                       <div className="flex items-center gap-5">
                                           <input
                                               value={item.value1}
                                               onChange={(e) => handleOnchangeInput(e, 'Status')}
                                               type={item.Type}
                                           />
                                           {item.value1}
                                       </div>
                                       <div className="flex items-center gap-5">
                                           <input
                                               value={item.value2}
                                               onChange={(e) => handleOnchangeInput(e, 'Status')}
                                               type={item.Type}
                                           />
                                           {item.value2}
                                       </div>
                                   </div>
                                </div>
                            ))}
                  </form>
              </div>
          </div>
      </Modal>
  )
}
export default AddandEditUser