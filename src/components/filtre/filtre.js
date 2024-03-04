import './filter.scss'

const Filter = ({ onFilterChange }) => {
  const handleFilterSelect = (e) => {
    onFilterChange(e.target.value)
  }

  return (
    <div className="filter_container">
      <select className="filter_container-select" onChange={handleFilterSelect}>
        <option value="Tout">Tout</option>
        <option value="HTML">HTML</option>
        <option value="JavaScript">JavaScript</option>
        <option value="React">React</option>
      </select>
    </div>
  )
}

export default Filter
