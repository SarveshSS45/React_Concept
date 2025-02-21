import { useForm } from "react-hook-form"

import './App.css'

function App() {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  async function onSubmit (data) {
    //API Calling similate
    await new Promise((resolve) => setTimeout(resolve, 5000));
    console.log("Submiting the from", data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>First Name: </label>
        <input {...register("firstName", 
          { 
            required: true, 
            maxLength: {value:6, message:'Max Len atleast 6'}, 
            minLength:{value:3, message:'Min Len atleast 3'},
            
          })}/>
          {errors.firstName && <p>{errors.firstName.message}</p>}
      </div>
      <br />

      <div>
        <label>Middle Name: </label>
        <input {...register("middlename")}/>
      </div>
      <br />

      <div>
        <label>Last Name: </label>
        <input {...register("lastname",
          { 
            pattern: /^[A-Za-z]+$/i,
            message:'Last name is not as per rule'
            })}/>
      </div>
      {errors.lastname && <p>{errors.lastname.message}</p>}
      <br />
      <input type="submit" disabled={isSubmitting} 
      value={isSubmitting ? "Submiting" : "Submit"}/>
    </form>
  )
}

export default App
