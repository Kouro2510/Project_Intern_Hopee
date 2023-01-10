import "~/style/Allproduct.css"
import {TableUser} from "~/fromTable/Table";
import {UserData} from "~/fromTable/TableData";
import {Link} from "react-router-dom";
import {useState} from "react";
import AddandEditUser from "~/conpoments/admin/Modal/AddandEditUser";
const AllProduct = () => {
    const [isOpen,setIsOpen]=useState(false)

    const openModal = ()=>{
        setIsOpen(true)
    }
    const toggleModal = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className="mt-2 mx-16 ">
            <button className="p-2 mr-8 mb-2 add-product" onClick={openModal}> Add new user</button>
            <table className="border-collapse w-full ">
                <thead>
                <tr>
                    {TableUser.map((option, index) => (
                        <th key={index}
                            className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                            {option}
                        </th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {UserData.map((item,key)=>(
                    <tr key={key} className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
                        <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                            {item.id}
                        </td>
                        <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static" style={{display:"flex",justifyContent:"center"}}>
                           <img src={item.avatar} alt="/"/>
                        </td>
                        <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                            {item.firstName}
                        </td>
                        <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                            {item.lastName}
                        </td>
                        <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                            {item.userName}
                        </td>
                        <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                            {item.Email}
                        </td>

                        <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                            {item.Status}
                        </td>
                        <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                            <button className="text-blue-400 hover:text-blue-600 edit-product ">Edit</button>
                            <button className="text-blue-400 hover:text-blue-600 remove-product ">Remove</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <div className="flex justify-end mt-10 mr-28">
                <nav aria-label="Page navigation example">
                    <ul className="flex list-style-none">
                        <li className="page-item disabled">
                            <Link
                                className="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-500 pointer-events-none focus:shadow-none"
                               to="/"
                                tabIndex={-1}
                                aria-disabled="true"
                            >
                                Previous
                            </Link>
                        </li>
                        <li className="page-item">
                            <Link
                                className="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                                to="/"
                            >
                                1
                            </Link>
                        </li>
                        <li className="page-item active">
                            <Link
                                className="page-link relative block py-1.5 px-3 rounded border-0 bg-blue-600 outline-none transition-all duration-300 rounded text-white hover:text-white hover:bg-blue-600 shadow-md focus:shadow-md"
                                to="/"
                            >
                                2 <span className="visually-hidden" />
                            </Link>
                        </li>
                        <li className="page-item">
                            <Link
                                className="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                               to="/"
                            >
                                3
                            </Link>
                        </li>
                        <li className="page-item">
                            <Link
                                className="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                               to="/"
                            >
                                Next
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <AddandEditUser isOpen={isOpen} FuncToggleModal={() => toggleModal()} />
        </div>

    )
}
export default AllProduct