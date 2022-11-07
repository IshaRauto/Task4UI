import React, { Component } from 'react'
import StudentService from '../Service/StudentService'
import style2 from '../css/style2.css'

export class StudentProfile extends Component {

    constructor(props) {
        super(props);

        this.state = {
                students: []
        }
        this.addSTUDENT = this.addSTUDENT.bind(this);
        this.editSTUDENT = this.editSTUDENT.bind(this);
         this.viewSTUDENT = this.viewSTUDENT.bind(this);
        this.deleteSTUDENT = this.deleteSTUDENT.bind(this);
       
        
    }


    componentDidMount(){
        StudentService.getStudent().then((res) => {
            this.setState({students: res.data});
        });
    }
   


    addSTUDENT(){
        this.props.history.push("/add-STUDENT/_add"); 
    }
    editSTUDENT(id){
        this.props.history.push(`/add-STUDENT/${id}`);
    }
    viewSTUDENT(id){
        this.props.history.push(`/view-STUDENT/${id}`);
    }
    deleteSTUDENT(id){
        StudentService.deleteStudent(id).then( res => {
        this.setState({students: this.state.students.filter(students => students.id !== id)});
        
    });}
   
    
    render() {
        return (
            <div>
            <h3 className="text-center" id="top" >Students List</h3>
            
            
            <div className = "row">
               <button className="btn btn-primary" onClick={this.addSTUDENT}> Add Job</button>
            </div>
            <br></br>
            <div className = "table">
                   <table className = "table table-striped table-bordered  table-dark  table-hover" >

                       <thead>
                           <tr>
                               
                                <th>Id</th>
                                <th>Name</th>
                                <th>Language</th>
                                <th>Framework</th>
                                <th>Actions</th>
                           </tr>
                       </thead>
                       <tbody>
                       {
                                    this.state.students.map(
                                        student => 
                                        <tr key = {student.id}>
                                            
                                            <td> {student.s_id} </td>   
                                             <td> {student.name} </td>   
                                             <td> {student.language}</td>
                                             <td> {student.framework}</td>
                                             

                                             <td>
                                                 <button  className="btn btn-info" onClick={ () => this.editSTUDENT(student.id)}>Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteSTUDENT(student.id)}className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}}  onClick={ () => this.viewSTUDENT(student.id)} className="btn btn-info">View </button>
                                             </td> 
                                        </tr>
                                    )
                                }
                       </tbody>
                   </table>

            </div>
            
            </div>
        )
    }
}

export default StudentProfile
