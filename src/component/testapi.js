
import { useState, useEffect } from "react"

function App() {

    const [getLink, setGetLink] = useState([])

    const Get = async () => {

        const response = await fetch("https://fyp-srs-api.herokuapp.com/courses")
        // console.log(response)
        const result = await response.json();

        setGetLink(result._embedded.courses)
        // console.log(result)
        // console.log(result._embedded.courses)

        // console.log(result._embedded.courses[0]._links.students)
        // console.log(result._embedded.students[0].studentName)

    }

    console.log(getLink)

    useEffect(() => {
        Get()
    }, [])

    // console.log(getLink)

    return (
        <div className="App">
            {getLink && getLink.map((elem, ind) => {

                console.log(elem._links.students.href)
                return (
                    <div>
                        <h1>{elem.title}</h1>

                        <a href={elem._links.students.href} >{elem.title}</a>

                    </div>
                )
            })}
        </div>
    );
}

export default App;