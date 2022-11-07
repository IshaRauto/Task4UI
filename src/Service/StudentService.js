

import axios from 'axios';

const API_BASE_URL = "http://localhost:8099/student/";

class StudentService {
    
    getStudent(){
        return axios.get(API_BASE_URL);
    }
   

    getStudentById(StudentId){
        return axios.get(API_BASE_URL  + StudentId);
    }

    createSTUDENT(student){
        return axios.post(API_BASE_URL,student);
    }

    updateStudent(Student, StudentId){
        return axios.put(API_BASE_URL + StudentId, Student);
    }
    deleteStudent(StudentId){
        return axios.delete(API_BASE_URL  + StudentId);
    }

    

}

export default new StudentService()