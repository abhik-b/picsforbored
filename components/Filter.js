import randomIndex from '../shared/randomIndex'
import {source1,source2,source3,source4} from '../shared/sources'




export default function Filter({setSource,setCall}) {
    
    function changeSource(list){
        setCall(true)
       setSource(list[randomIndex(list.length)])
       
    }
    return (
     <div>
       <div onClick={()=>changeSource(source1)}>source1</div>
       <div onClick={()=>changeSource(source2)}>source2</div>
       <div onClick={()=>changeSource(source3)}>source3</div>
       <div onClick={()=>changeSource(source4)}>source4</div>
     </div>
    )
  }