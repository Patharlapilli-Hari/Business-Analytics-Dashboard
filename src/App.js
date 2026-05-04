import {useState} from 'react'
import Header from './components/Header'
import SummaryCards from './components/SummaryCards'
import SalesChart from './components/SalesChart'
import CategoryChart from './components/CategoryChart'
import DataTable from './components/DataTable'
import Insights from './components/Insights'
import Filters from './components/Filters'
import salesData from './data/salesData'
import './App.css'

const App = () => {
  const [category, setCategory] = useState('All')
  const [month, setMonth] = useState('All')
  const [search, setSearch] = useState('')

  const filteredData = salesData.filter(item => {
    const categoryMatch = category === 'All' || item.category === category
    const monthMatch = month === 'All' || item.month === month
    const searchMatch = item.product
      .toLowerCase()
      .includes(search.toLowerCase())

    return categoryMatch && monthMatch && searchMatch
  })

  const resetFilters = () => {
    setCategory('All')
    setMonth('All')
    setSearch('')
  }

  return (
    <div className="app-container">
      <Header />
      <Filters
        category={category}
        month={month}
        search={search}
        onCategoryChange={event => setCategory(event.target.value)}
        onMonthChange={event => setMonth(event.target.value)}
        onSearchChange={event => setSearch(event.target.value)}
        onReset={resetFilters}
      />
      <SummaryCards data={filteredData} />
      <div className="charts-container">
        <SalesChart data={filteredData} />
        <CategoryChart data={filteredData} />
      </div>
      <Insights data={filteredData} />
      <DataTable data={filteredData} />
    </div>
  )
}

export default App
