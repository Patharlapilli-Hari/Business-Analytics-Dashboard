const DataTable = ({data}) => (
  <div className="table-card">
    <h2>Sales Data</h2>
    <table>
      <thead>
        <tr>
          <th>Month</th>
          <th>Category</th>
          <th>Product</th>
          <th>Revenue</th>
          <th>Profit</th>
          <th>Orders</th>
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <tr key={item.id}>
            <td>{item.month}</td>
            <td>{item.category}</td>
            <td>{item.product}</td>
            <td>₹{item.revenue}</td>
            <td>₹{item.profit}</td>
            <td>{item.orders}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)

export default DataTable