import React,{useState,useEffect} from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import AddBoxTwoToneIcon from "@mui/icons-material/AddBoxTwoTone";


function TableInput() {
  const [name, setname] = useState("");
  const [fatherName, setfatherName] = useState("");
  const [rollNumber, setrollNumber] = useState();
  const [input, setinput] = useState(get())

 

  function submit(e) {
     e.preventDefault()
      setname("");
      setfatherName("");
      setrollNumber("");
     
     if(name===""){alert("please fill the require fields")}else {
     setinput([...input,{name:name,fatherName:fatherName,rollNumber:rollNumber}])}
    
    
  }
  

  function DelData(id) {
    const remain=input.filter((e,ind)=>{
      return id!==ind;
    })
    setinput(remain)
  }

  useEffect(() => {
       localStorage.setItem("data", JSON.stringify(input))
  }, [input])

  function get() {
    const save=localStorage.getItem("data")
    if(save){return JSON.parse(save)}else{ return []}
  }
  return (
    <div style={{height:"200vh"}}>
 
   
      <form onSubmit={submit} className="mx-auto w-25">
        <div className="mb-3">
          <label className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
           required
            onChange={(e) => {
              setname(e.target.value);
            }}
          />
        </div>

        <div className="mb-3">
          <label  className="form-label">
            Father Name
          </label>
          <input
            type="text"
            className="form-control"
            required
            onChange={(e) => {
              setfatherName(e.target.value);
            }}
          />
        </div>

        <div className="mb-3">
          <label  className="form-label">
            Roll Number
          </label>
          <input
            type="text"
            required
            className="form-control"
            onChange={(e) => {
              setrollNumber(e.target.value);
            }}
          />
        </div>
        <button type="submit" onClick={submit} className="btn btn-primary bg-transparent">
          <AddBoxTwoToneIcon color="success" fontSize="large"/>
        </button>
      </form>
      <table className="table my-5 mx-auto w-75 border-1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Father Name</th><th>Roll no.</th>
          </tr>
        </thead>
        <tbody>
          {input.map((e, id) => {
            return (
              <tr key={id}>
                <td>{e.name}</td>
                <td>{e.fatherName}</td>
                <td>{e.rollNumber}</td>
             
                <td>
                  <button className="border-0 bg-transparent"
                    onClick={() => {
                      DelData(id);
                    }}
                  >
                    <CancelIcon color={"error"} />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default TableInput;
