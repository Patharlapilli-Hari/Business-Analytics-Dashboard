const Insights = ({data}) => {
  const highestRevenue = data.reduce((prev, current) =>
    current.revenue > prev.revenue ? current : prev
  )

  const highestProfit = data.reduce((prev, current) =>
    current.profit > prev.profit ? current : prev
  )

  return (
    <div className="insights-card">
      <h2>Business Insights</h2>
      <ul>
        <li>{highestRevenue.product} generated the highest revenue.</li>
        <li>{highestProfit.category} had the highest profit contribution.</li>
        <li>Total business performance is positive based on revenue and profit.</li>
      </ul>
    </div>
  )
}

export default Insights