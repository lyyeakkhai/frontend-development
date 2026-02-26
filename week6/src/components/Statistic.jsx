
const Statistic = ({ student }) => {

    const studentScores = student.map(s => s.score);

    const average = studentScores.reduce((a, b) => a + b, 0) / studentScores.length;
    const max = Math.max(...studentScores);
    const min = Math.min(...studentScores);
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