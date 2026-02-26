import React from 'react'

const Scores = ({ courseName, students }) => {
    
  return (
   <div className="scores">
          <h1>{courseName}</h1>

          <table>
            <thead>
              <tr>
                <th>First name</th>
                <th>Last name</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
            {students.map((student, index) => {
                return (
                    <tr key={index}>
                        <td>{student.firstName}</td>
                        <td>{student.lastName}</td>
                        {student.score >= 50 ? <td>{student.score}</td> : <td className='warning'>{student.score}</td>}
                    </tr>
                )
            })}
            </tbody>
          </table>
        </div>
  )
}

export default Scores;