import React, { Component } from 'react'
import StudentService from '../Service/StudentService'




class AddSTUDENT extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
            id: this.props.match.params.id,
            s_id:'',
            name: '',
            language: '',
            framework: '',
          
        }
        this.changes_id=this.changes_id.bind(this);
        this.changename = this.changename.bind(this);
        this.changelanguage = this.changelanguage.bind(this);
        this.changeframework = this.changeframework.bind(this);
       
    }

    
    componentDidMount(){

        
        if(this.state.id === '_add'){
            return
        }else{
            StudentService.getStudentById(this.state.id).then( (res) =>{
                let student = res.data;
                this.setState({  s_id:student.s_id,
                    name: student.name,
                    language: student.language,
                    framework: student.framework
                });
            });
        }        
    }
    saveOrUpdateStudent = (e) => {
        e.preventDefault();
        let student = {s_id:this.state.s_id, name: this.state.name, language: this.state.language, framework: this.state.framework};
        console.log('student => ' + JSON.stringify(student));

      
        if(this.state.id === '_add'){
            StudentService.createSTUDENT(student).then(res =>{
                this.props.history.push('/student');
            });
        }else{
            StudentService.updateStudent(student, this.state.id).then( res => {
                this.props.history.push('/student');
            });
        }
    }
    
    changes_id= (event) => {
        this.setState({s_id: event.target.value});
    }

    changename= (event) => {
        this.setState({name: event.target.value});
    }

    changelanguage= (event) => {
        this.setState({language: event.target.value});
    }

    changeframework= (event) => {
        this.setState({framework: event.target.value});
    }

   

    cancel(){
        this.props.history.push('/student');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Student</h3>
        }else{
            return <h3 className="text-center">Update Student</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3" id="add">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                    <div className = "form-group">
                                            <label>  ID: </label>
                                            <input placeholder=" ID" name="ID" className="form-control" 
                                                value={this.state.s_id} onChange={this.changes_id}/>
                                        </div>
                                        <div className = "form-group">
                                            <label>  Name: </label>
                                            <input placeholder=" Name" name="Name" className="form-control" 
                                                value={this.state.name} onChange={this.changename}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Language : </label>
                                            <input placeholder="Languager" name="Language" className="form-control" 
                                                value={this.state.language} onChange={this.changelanguage}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Framework: </label>
                                            <input placeholder="Framework" name="Framework" className="form-control" 
                                                value={this.state.framework} onChange={this.changeframework}/>
                                        </div>
                                        

                                        <button className="btn btn-success" onClick={this.saveOrUpdateStudent}>Save</button>
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

export default AddSTUDENT