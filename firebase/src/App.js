
import {getFirestore,collection,addDoc,deleteDoc,doc, updateDoc} from "firebase/firestore"
import { initializeApp } from "firebase/app";
import { useState,useCallback } from "react";
import {useCollectionData} from "react-firebase-hooks/firestore"



const firebaseConfig = {
  apiKey: "AIzaSyAgCeHT3PwVd79ju7M-CVvgnZuAF3dRbiA",
  authDomain: "crud-8d334.firebaseapp.com",
  projectId: "crud-8d334",
  storageBucket: "crud-8d334.appspot.com",
  messagingSenderId: "1002500454196",
  appId: "1:1002500454196:web:dbd11c9719b1445c8a5761",
  measurementId: "G-CESN105TMF"
};


const app = initializeApp(firebaseConfig);
const db=getFirestore(app);

const producyCOverter={
  toFirestore:(product)=>{
    return{
      name:product.name,
      description:product.description,
    };
  },
  fromFirestore:(snapshot, option)=>{
    const data =snapshot.data(option)
    return {
      id:snapshot.id,
      ...data,
    };
  },
};

const App=()=>{

  const [id, setId]=useState("")
  const [name,setName]=useState("");
  const [description,setdescription]=useState("");



  const handleNameChange=useCallback((e)=>{
    setName(e.target.value)
  },[]);
  const handleDesciptionChange=useCallback((e)=>{
    setdescription(e.target.value)
  },[]);


  const handleSubmit=useCallback(
    async (e)=>{
    e.preventDefault();
    if(!name||!description){
      alert("plase fill inputs");
      return;
    }
    
    if(id){
      const ref = doc(db,"products",id);
      await updateDoc(ref,{
        name:name,
        description:description,
      });
    }else{
    const ref =collection(db,"products");
    await addDoc(ref,{
      name:name,
      description:description
    });
  }
    setId("")  
    setName("")
    setdescription("")
  },[id,name,description]);

  const [products , loading]=useCollectionData(collection(db,"products").withConverter(producyCOverter) );

  const handleDelete=useCallback((id)=>{
    deleteDoc(doc(db,"products",id))
  },[]);


  const handleUpdateClick=useCallback((product)=>{
    setId(product.id)
    setName(product.name);
    setdescription(product.description);
  },[])

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="name" id="name" value={name} onChange={handleNameChange}/>
        <input type="text" placeholder="description" id="description" value={description} onChange={handleDesciptionChange}/>
        <input type="submit"/>
      </form>
      {loading && <span>loading...</span>}
      {products?.map((product)=>(
        <li key={product.id}>
          <span onClick={()=>handleUpdateClick(product)}>
          {product.name}-{product.description}-{""}
          </span>
          <button type="button" onClick={()=>handleDelete(product.id)}>X</button>
        </li>
      ))}
    </div>
  )
};

export default App;