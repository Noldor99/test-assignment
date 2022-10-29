import React, { Suspense } from 'react'
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, FormProvider } from "react-hook-form";
import validationSchema from './schema'

const GetRequest  = React.lazy(()=> import('./Components/GetRequest/GetRequest')) 
const Intro = React.lazy(()=>import('./Components/Intro/Intro')) 
const Navebar = React.lazy(()=>import('./Components/Navebar/Navebar')) 
const Form = React.lazy(()=>import('./Components/Form/Form')) 
 

const App = () => {
  
  const methods = useForm(
    {resolver: yupResolver(validationSchema)},
    );
    
    useForm({mode: 'onChange'})
    
  return (
    <div> 
      <Suspense fallback={<div>Загрузка...</div>}>
        <Navebar/>
        <Intro/>
        <GetRequest/>
        <FormProvider {...methods}>
            <Form methods={methods} />
        </FormProvider>
      </Suspense>
    </div>
  )
}

export default App