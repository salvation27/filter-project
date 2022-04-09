import React from 'react'
import { Input,Spacer} from "@nextui-org/react";
const SerchInput = ({value,handelInputChange}) => {
  return (
   <div>
   <Spacer y={1.5} />
        <Input 
        width='500px'
        id='input_serch'
        value={value}
        onChange={handelInputChange}
          bordered 
          labelPlaceholder="Serch" 
          color="secondary" /> 
   </div>
  )
}

export default SerchInput