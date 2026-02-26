import React from 'react'

const Statistic = ({ student }) => {
    const average = student.reduce((acc, curr) => acc + curr.score, 0) / student.length;
    const max = Math.max(...student.map(s => s.score));
    const min = Math.min(...student.map(s => s.score));
  return (
    <div className="statistics">
      <h2>Statistics</h2>
      <div className="scoreCtn">
      <p>Average Score: {average.toFixed(2)}</p>
      <p>Highest Score: {max}</p>
      <p>Lowest Score: {min}</p>
    </div>
    </div>
  )
}

export default Statistic