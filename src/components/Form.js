
import './form.css'
export default function Form(props){
    return(
        <div>
           <form onSubmit={props.handleSubmit}>
               <div className="input-area">
               <label htmlFor="">Employee Id:</label>
               <input type="text" name="id" value={props.data.id} onChange={props.handleChange} />
               </div>
                <div className="input-area">
                <label htmlFor="">Employee Name :</label>
               <input type="text" name="ename" value={props.data.ename} onChange={props.handleChange}/>
                </div>
                <div className="input-area">
                <label htmlFor="">Employee Salary :</label>
               <input type="text" name="salary" value={props.data.salary} onChange={props.handleChange} />
                </div>
                <div className="input-area">
                <input type="submit" value="Submit" className='btn submit' disabled={props.disable} />
                
                </div>
              

           </form>
           <button className='btn reset' onClick={props.handleReset}>Reset</button>
        </div>
    )
}