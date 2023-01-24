
import { Button} from 'antd';

import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from 'react-router-dom';
const ThreeSection = () => {
    const [data, setData]=useState([])
    const {id}=useParams()
    const getData=async()=>{
const data=await axios.get("http://localhost:8080/notaryrow")
setData(await data.data)
    }
    useEffect(() => {
    getData()
      },[]);

// const handleDelete=(id)=>{
//     axios.delete(`http://localhost:8080/notaryrow/${id}`)

// }
const handleChange = async (e) => {
    
    const searchDatas = await axios.get("http://localhost:8080/notaryrow") 
  console.log(data)
    setData([...searchDatas.data.filter((el) =>
      el.name?.toLowerCase().includes(e.target.value.toLowerCase())
    )]);

};
const handleSort=()=>{
    const dataSort=data?.sort((a,b)=>a.name>b.name ? 1 : -1)
    setData([...dataSort])
}

    return (
        <div className='threesection' style={{textAlign:"center"}}>
            
  <input type="text" onChange={(e)=>{
  handleChange(e)
}} />
<button onClick={()=>handleSort()}>Sort</button>
           <h1>Happy Customers</h1>
        <div style={{display:"flex", margin:"2%",textAlign:"center", }}>
{
data.map((el)=>{
    return(
       <div style={{ boxShadow:" rgba(0, 0, 0, 0.1) 0 4px 12px", padding:"3%", margin:"2%",}}>
        <div style={{display:"flex", alignItems:"center",}}>
       
        <div><img src={el?.imgurl} alt="Avatar" className="avatar"></img></div>
       <div>
       <p>{el.name}</p>
        <p>{el.job}</p>
       </div>
        </div>
        <div>
            <p>
                {el.about}
            </p>
        </div>
        <Button >Delete</Button>
       </div>
    )
})
}
        </div>
        </div>
    )
}

export default ThreeSection
