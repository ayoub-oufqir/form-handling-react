
import {useState} from 'react'
import InputField from './InputField'
function App() {

  const [data, setData] = useState(
  {
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  }

  )
  const inputs =[
    {
      id:1,
      label:"username",
      name:"username",
      placeholder:"username",
      type:"text",
      required:true,
    },
    {
      id:2,
      label:"email",
      name:"email",
      placeholder:"email",
      type:"email",
      required:true,
    },
    {
      id:3,
      label:"birthday",
      name:"birthday",
      placeholder:"birthday",
      type:"date",
      required:true,
    },
    {
      id:4,
      label:"password",
      name:"password",
      placeholder:"password",
      type:"password",
      required:true,
    },
    {
      id:5,
      label:"confirm password",
      name:"confirmPassword",
      placeholder:"confirm password",
      type:"password",
      required:true,
    },
  ]

  const handlSubmit = (e)=>{
    e.preventDefault();
    console.log("form submited");
    console.log(data)
  }
  const handlChange = (e) =>{
    setData({...data, [e.target.name]:e.target.value});
    console.log(data)
  }
  return (
    <div className="flex items-center justify-center flex-col p-3 h-screen">
    <h1 className='font-bold text-2xl mb-6'>Form Handling</h1>
    <form onSubmit={handlSubmit} className="max-w-lg">
      {
        inputs.map(item => {
          return <div  className="flex items-center justify-between flex-row mb-4 gap-x-4"><InputField {...item} onChange={handlChange} data={data}/></div> 
        })
      }
      <input type="submit" onClick={handlSubmit} className="bg-green-300 rounded-md px-4 py-1 cursor-pointer mx-auto"/>
    </form>
    </div>
  );
}

export default App;
