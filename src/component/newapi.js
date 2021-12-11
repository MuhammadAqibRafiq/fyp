
import { useState, useEffect } from "react"

function App() {

    const [courses, setCourses] = useState([])


    const Get = async () => {
        try{ 
            const response = await fetch("https://fyp-srs-api.herokuapp.com/api/courses")
        // console.log(response)
        const result = await response.json();

        setCourses(result)
        // console.log(result)
      }
         catch(err){console.log(err)}
    }

    // console.log("State",courses)

    useEffect(() => {
        Get()
    }, [])


    return (
        <div className="App">
            {courses && courses.map((course, ind) => {

                // console.log("map",course.students)
                return (
                    <div keu={ind}>
                        <h1>{course.title}</h1>

                        {course.students.map((student,ind ) => {

                            console.log(course.students.length)

                            const len =  course.students.length
                            
                            console.log(len)

                           return(
                           len >= 0 ? (<li>{student.studentName}</li>) : "no student enrolled" 
                           )
                           
                        })}

                    </div>
                )
            })}
        </div>
    );
}

export default App;