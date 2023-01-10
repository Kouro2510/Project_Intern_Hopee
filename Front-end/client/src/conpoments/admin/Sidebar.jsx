import React, {useState} from "react";
import {HiMenu, HiMenuAlt3} from "react-icons/hi";
import {Link, Outlet} from "react-router-dom";
import {AiFillDashboard, AiFillTags} from "react-icons/ai";
import {BsFillBagFill} from "react-icons/bs";
import {FaUsers} from "react-icons/fa";
import {FiUser} from "react-icons/fi";
import {MdLogout} from "react-icons/md";
import Images from "../../assets/images";
const SideBar = () => {
    const [open, setOpen] = useState(true);
    const [isPasswordShow, setIsPasswordShow] = useState(false);
    const list = [
        {name: "Dashboard", link: "/admin/", icon: <AiFillDashboard size="20"/>, group: "DashBoard"},
        {name: "Employee", link: "/admin/employee", icon: <FaUsers size="20"/>, group: "User"},
        {name: "Customer", link: "/admin/customer", icon:<FiUser size="20"/>, group: "User"},
        {name: "Brand", link: "/admin/brand", icon:<AiFillTags size="20"/>, group: "Product"},
        {name: "Product", link: "/admin/product", icon: <BsFillBagFill size="20"/>, group: "Product"},
        {name: "Logout", link: "/admin/logout", icon: <MdLogout size="20"/>, group: "Setting"},

    ]
    const ListItem = list.reduce((grb, item) => {
        (grb[item.group] = grb[item.group] || []).push(item);
        return grb
    }, {});
    const toggleIsPasswordShowValue = () => {
        setIsPasswordShow(!isPasswordShow);
    };
    const click =() =>{
        toggleIsPasswordShowValue();
        setOpen(!open)
    }

    return (
        <div className={`sidebar bg-[#d71414] min-h-screen ${open ? "w-72" : "w-16"} duration-500 text-gray-100 px-4 position-relative flex-2`}>
            <div className="py-3 flex justify-end">
                <button  onClick={click}>
                    {
                        isPasswordShow?  <HiMenu size={26} className="cursor-pointer"/> : <HiMenuAlt3 size={26} className="cursor-pointer" />
                    }
                </button>
            </div>
            <div className="flex flex-row mb-3 pb-1">
                <div className={`flex items-center space-x-4 ${!open && "mt-5 mb-5"}`}>
                    <img src={Images.noImage} className={`w-10 h-10 rounded-full ${!open && "left-4.5 w-8 h-8 absolute"}`} alt="/ "/>
                </div>

                <h2 style={{transitionDelay: `200ms`,}}
                    className={`ml-12 mt-2 whitespace-pre uppercase duration-500 ${!open && "opacity-0 translate-x-28 overflow-hidden uppercase"}`}>Admin</h2>
                <h2 className={`${open && "hidden"} uppercase absolute left-48 bg-white font-semibold whitespace-pre
                    text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1
                    group-hover:left-14 group-hover:duration-300 group-hover:w-fit `}>
                    Admin</h2>
            </div>
            <hr className="w-full"/>
            <ul className="mt-3">
                <div>
                    {Object.keys(ListItem).map(function (side, key) {
                        return (
                            <div key={key}>
                                <h1 className={`whitespace-pre duration-1000 ${!open && "opacity-0 translate-x-28 hidden"}`}>{side}</h1>
                                {
                                    ListItem[side].map(function (item, i) {
                                        return (
                                            <div>
                                                <Link to={item.link} key={i}
                                                      className={`group flex items-center text-sm  gap-3.5 font-medium py-1 rounded-md`}>
                                                    <li className=" group flex items-center text-sm  gap-3.5 font-medium p-2 rounded-md">
                                                        {item.icon}
                                                        <h2 style={{transitionDelay: `${i + 3}00ms`,}}
                                                            className={`whitespace-pre duration-500 ${!open && "opacity-0 translate-x-28 overflow-hidden"}`}>{item.name}</h2>
                                                        <h2 className={`${open && "hidden"} absolute left-48 bg-white font-semibold whitespace-pre
                    text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1
                    group-hover:left-14 group-hover:duration-300 group-hover:w-fit `}>
                                                            {item.name}</h2>
                                                    </li>
                                                </Link>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        );
                    })}
                </div>
            </ul>
            <Outlet/>
        </div>
    )
};

export default SideBar;