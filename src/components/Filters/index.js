const Filters = ({category, month, search, onCategoryChange, onMonthChange, onSearchChange, onReset}) => (
  <div className="filters-card">
    <select value={category} onChange={onCategoryChange}>
      <option value="All">All Categories</option>
      <option value="Electronics">Electronics</option>
      <option value="Fashion">Fashion</option>
      <option value="Grocery">Grocery</option>
      <option value="Furniture">Furniture</option>
    </select>

    <select value={month} onChange={onMonthChange}>
      <option value="All">All Months</option>
      <option value="Jan">Jan</option>
      <option value="Feb">Feb</option>
      <option value="Mar">Mar</option>
      <option value="Apr">Apr</option>
      <option value="May">May</option>
      <option value="Jun">Jun</option>
    </select>

    <input
      type="search"
      placeholder="Search product"
      value={search}
      onChange={onSearchChange}
    />

    <button type="button" onClick={onReset}>Reset</button>
  </div>
)

export default Filters