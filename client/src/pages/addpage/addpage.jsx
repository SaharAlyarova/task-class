// import React from 'react';
// import {SignupSchema} from "../addpage/schema/schema"
// import { Formik, Form, Field, useFormik } from 'formik'
// import axios from 'axios';
// const AddPage = () => {
// const {handleSubmit, handleChange, resetForm,touched, errors,values}=useFormik({
//     initialValues:{
//         imgurl: '',
//         name: '',
//         job: '',
//         about:'',
//       },


//       validationSchema:SignupSchema,
//       onSubmit:(values)=>{



//     axios.post("http://localhost:8080/notaryrow",values)

// resetForm()




//       }
// })

//  return (
//       <div style={{padding:"10%"}}>
        
//         <form onSubmit={handleSubmit}>

//             <label htmlFor="imgurl">Img Url</label>
//             <input type="text" id='imgurl' name='imgurl' value={values.imgurl} onChange={handleChange}/>
//             <br></br>
//             {
//                 errors.imgurl && touched.imgurl &&(
//                     <span style={{color:"red"}}>{errors.imgurl}</span>
//                 )
//             }
//             <br></br>
//             <label htmlFor="name">Name</label>
//             <input type="text" id='name' name='name' value={values.name} onChange={handleChange}/>
//             <br></br>
//             {
//                 errors.name && touched.name &&(
//                     <span style={{color:"red"}}>{errors.name}</span>
//                 )
//             }<br></br>
//              <label htmlFor="job">Job</label>
//             <input type="text" id='job' name='job'  value={values.job} onChange={handleChange}/>
//             <br></br>
//             {
//                 errors.job && touched.job &&(
//                     <span style={{color:"red"}}>{errors.job}</span>
//                 )
//             }<br></br>
//              <label htmlFor="about">About</label>
//             <input type="text" id='about' name='about' value={values.about} onChange={handleChange}/>
//             <br></br>
//             {
//                 errors.about && touched.about &&(
//                     <span style={{color:"red"}}>{errors.about}</span>
//                 )
//             }<br></br>
//             <button type='Submit' className='button-3'>Post</button>
//             </form>
//       </div>
   
//     )
//  }
// export default AddPage


// import React from 'react'
import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from "axios"
const SignupSchema = Yup.object().shape({
  imgurl: Yup.string()
    .min(2, 'Too Short!')
    .max(250, 'Too Long!')
    .required('Required'),
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
//   email: Yup.string().email('Invalid email').required('Required'),
});
const AddPage = () => {
  return (
    <div>
         <Formik
       initialValues={{
         imgurl: '',
         name: '',
         
       }}
       validationSchema={SignupSchema}
       onSubmit={values => {
        axios.post("http://localhost:8080/notaryrow",values)
         console.log(values);
       }}
     >
       {({ errors, touched }) => (
         <Form>
           <Field name="imgurl" />
           {errors.imgurl && touched.imgurl ? (
             <div style={{color:"red"}}>{errors.imgurl}</div>
           ) : null}
           <Field name="name" />
           {errors.name && touched.name ? (
             <div style={{color:"red"}}>{errors.name}</div>
           ) : null}
         
           <button type="submit">Submit</button>
         </Form>
       )}
     </Formik>
    </div>
  )
}

export default AddPage