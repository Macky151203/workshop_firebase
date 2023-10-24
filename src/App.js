
import './App.css';
import { app, database } from './firebaseconfig';
import { useState } from 'react';
import { collection, query, where, addDoc, getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore";

function App() {

  const [update,setupdate]=useState(false)
  const [name, setname] = useState("")
  const [id, setid] = useState("")
  const [age, setage] = useState(0)
  const databaseref = collection(database, "workshop")
  const[data,setdata]=useState([])


  //create
  const adddata = async () => {
    await addDoc(databaseref, {
      name: name,
      age: age,
    }).then(() => {
      alert("data added success")
      setage(0)
      setname('')
    }).catch((err) => {
      console.log(err)
    })
  }


  //read
  const getdata=async()=>{
    await getDocs(databaseref).then((response)=>{
      setdata(response.docs.map((elem)=>{
        return{...elem.data(),id:elem.id}
      }))
    })
  }


  //update
  const upd=async()=>{
    let edit=doc(database,"workshop",id)
    updateDoc(edit,{
      name:name,
      age:age,
    }).then(()=>{
      alert("data updated successfully")
      setname("")
      setage(0)
      setupdate(false)
    }).catch((err)=>{
      console.log(err)
    })
  }


  //setting values for update
  const set=async(name,age,id)=>{
    setname(name)
    setage(age)
    setid(id)
    setupdate(true)
  }

  //delete
  const del=async(id)=>{
    let delet=doc(database,"workshop",id)
    deleteDoc(delet).then(()=>{
      alert("deleted successfully")
    }).catch((err)=>{
      console.log(err)
    })
  }

  return (
    <>
      <div className='head'>
        Welcome to React firebase

      </div>
      <div className="in">
        <input className="inp" placeholder="Name" type="text" onChange={(e) => setname(e.target.value)} value={name} />
        <input className="inp" placeholder="age " type="number" onChange={(e) => setage(e.target.value)} value={age} />
        {
          update ? <button className='btn' onClick={upd}>update</button>:<button className='btn' onClick={adddata}>Add</button>
        }
      </div>
      <hr></hr>
      <div className='disp'>
        <button className='btn' onClick={getdata}>Display</button>
        {

          data&& data.map((d)=>{
            return (
              <>
              <div className="data">
              {d.name}-{d.age} <button className='btn' onClick={()=>set(d.name,d.age,d.id)}>update</button><button className='btn' onClick={()=>del(d.id)}>Delete</button>
              </div>
              <div></div>
              </>
            )
          })
        }
      </div>
    </>
  );
}

export default App;
