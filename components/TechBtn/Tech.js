import React from 'react'
import { Checkbox } from "@nextui-org/react";
import { Spacer} from "@nextui-org/react"
const Tech = ({checBox,handelChangeChecked}) => {
  return (
    <div className='test'>
    
    {
        checBox.map((item,i)=> {
            return (
                <div key={i}>
                <Spacer y={1} />
                    <Checkbox value={item.checked} onChange={()=>handelChangeChecked(item.id)}>
                    {item.label}
                    </Checkbox>
                    <Spacer y={1} />
                </div>
            )
        })
    }
  
    </div>
  )
}

export default Tech