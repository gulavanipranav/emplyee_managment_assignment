import './table.css'

export default function Table(props) {
    const rows =[]
    if(props.store.length === 0){
        rows.push(<h3>No data available</h3>)
    }
    else{
        for(let item in props.store){
            rows.push(<tr key={item}>
                    <td>{props.store[item].id}</td>
                    <td>{props.store[item].ename}</td>
                    <td>{props.store[item].salary}</td>
                    <td><button className='delete' onClick={()=>props.handleDelete(props.store[item].id)}>Delete</button> 
                    <button className='edit' onClick={()=>props.handleEdit(props.store[item].id)} >Edit</button></td>
                    
                </tr>)
        }
    }
   
     
    return (
        <div className='container'>

            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Salary</th>
                        <th>Action</th>
                    </tr>

                </thead>
                <tbody>
                   {rows}
                </tbody>
            </table>
        </div>
    )
}