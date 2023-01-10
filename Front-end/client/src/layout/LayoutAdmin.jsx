import Sidebar from "~/conpoments/admin/Sidebar";

const LayoutAdmin = ({children}) => {
  return(
     <div className="flex ">
        <Sidebar/>
       <div style={{width:"-webkit-fill-available"}}>
           {children}
       </div>
     </div>
  )
}
export default LayoutAdmin