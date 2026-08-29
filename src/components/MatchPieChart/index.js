// eslint-disable-next-line
import {PieChart, Pie, Cell, Legend} from 'recharts'

import './index.css'

const COLORS = ['#00C49F', '#FF8042', '#FFBB28']

const MatchPieChart = props => {
  const {data} = props

  return (
    <PieChart width={400} height={350}>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        labelLine={false}
        outerRadius={100}
        fill="#8884d8"
        dataKey="value"
        nameKey="name"
        isAnimationActive={false}
      >
        {data.map((entry, index) => (
          <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>

      <Legend />
    </PieChart>
  )
}

export default MatchPieChart
