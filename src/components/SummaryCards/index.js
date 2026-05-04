
const SummaryCards = ({data}) => {
  const totalRevenue = data.reduce((sum, item) => sum + item.revenue, 0)
  const totalProfit = data.reduce((sum, item) => sum + item.profit, 0)
  const totalOrders = data.reduce((sum, item) => sum + item.orders, 0)
  const totalProducts = data.length

  const profitMargin =
    totalRevenue === 0 ? 0 : ((totalProfit / totalRevenue) * 100).toFixed(1)

  const topProduct =
    data.length === 0
      ? 'No Data'
      : data.reduce((prev, current) =>
          current.revenue > prev.revenue ? current : prev,
        ).product

  return (
    <div className="summary-container">
      <div className="summary-card">
        <h3>Total Revenue</h3>
        <p>₹{totalRevenue}</p>
      </div>
      <div className="summary-card">
        <h3>Total Profit</h3>
        <p>₹{totalProfit}</p>
      </div>
      <div className="summary-card">
        <h3>Total Orders</h3>
        <p>{totalOrders}</p>
      </div>
      <div className="summary-card">
        <h3>Total Products</h3>
        <p>{totalProducts}</p>
      </div>
      <div className="summary-card">
        <h3>Profit Margin</h3>
        <p>{profitMargin}%</p>
      </div>
      <div className="summary-card">
        <h3>Top Product</h3>
        <p>{topProduct}</p>
      </div>
    </div>
  )
}

export default SummaryCards
