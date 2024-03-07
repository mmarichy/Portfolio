import { useState } from 'react'
import Filter from '../../components/filtre/filtre'
import ProjectsCard from '../../components/project/projectsCard'
import './experience.scss'

const Experience = () => {
  const [filter, setFilter] = useState()

  const handleFilterChange = (value) => {
    setFilter(value)
  }

  return (
    <section className="experience" id="projets">
      <h2 className="experience_title">Mes projets</h2>
      <div>
        <Filter onFilterChange={handleFilterChange} />
        <ProjectsCard filter={filter} />
      </div>
    </section>
  )
}

export default Experience
