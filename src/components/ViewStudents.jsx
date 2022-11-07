import React, { Component } from 'react'

import StudentService from '../Service/StudentService'



export class ViewStudents extends Component {
    constructor(props) {
        super(props)

        this.state = {
           
            sid: this.props.match.params.id,
             Students: {}
        }
    }

    componentDidMount(){
        StudentService.getStudentById(this.state.sid).then( res => {
            this.setState({Students: res.data});
        })
    }
    cancel(){
        this.props.history.push('/student');
    }

    render() {
        return (
            <div>
            <br></br>
               <div className = "container" >
                    <div className = "row" >
                        <div className = "card col-md-6 offset-md-3 offset-md-3" id="add">
                            
                            <div className = "card-body" >
                                <form>
                                    <div className = "form-group" >
                                        <label>  Id: </label>
                                        <div> { this.state.Students.s_id}</div>
                                    </div>
                                    <div className = "form-group" >
                                        <label>  Name: </label>
                                        <div> { this.state.Students.name}</div>
                                    </div>
                                    <div className = "form-group">
                                        <label> Language: </label>
                                        <div> { this.state.Students.language}</div>
                                    </div>
                                    <div className = "form-group">
                                        <label> Framework: </label>
                                        <div> { this.state.Students.framework}</div>
                                    </div>
                                    
                                 
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                   
                                    
                                </form>
                            </div>
                        </div>
                    </div>

               </div>
        </div>
        )
    }
}
export default ViewStudents
