import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

const CategoryChart = ({data}) => (
  <div className="chart-card">
    <h2>Profit by Category</h2>
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="category" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="profit" fill="#16a34a" />
      </BarChart>
    </ResponsiveContainer>
  </div>
)

export default CategoryChart