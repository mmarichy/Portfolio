import './project.scss'
import Projects from '../../data/projets.json'
import { Link } from 'react-router-dom'

function ProjectsCard({ filter }) {
  return filter === undefined || filter === null || filter === 'Tout' ? (
    <div className="projects-flex">
      {Projects &&
        Projects.map((project) => (
          <Link
            key={project.id}
            to={`/projects/${project.title}`}
            onClick={null}
          >
            <div className="card">
              <img src={project.cover} alt={project.alt} className="img" />
              <div className="textBox">
                <p className="text head">{project.title}</p>
                <div>
                  <img
                    className="text price"
                    src={project.langage[0]}
                    alt={project.altlang}
                  ></img>
                  <img
                    className="text price"
                    src={project.langage[1]}
                    alt={project.altlang}
                  ></img>
                </div>
              </div>
              <button className="card-button">En savoir plus ...</button>
            </div>
          </Link>
        ))}
    </div>
  ) : (
    <div className="projects-flex">
      {Projects &&
        Projects.filter((project) => project.category === filter).map(
          (project) => (
            <Link
              key={project.id}
              to={`/projects/${project.title}`}
              onClick={null}
            >
              <div className="card">
                <img src={project.cover} alt={project.alt} className="img" />
                <div className="textBox">
                  <p className="text head">{project.title}</p>
                  <div>
                    <img
                      className="text price"
                      src={project.langage[0]}
                      alt={project.altlang}
                    ></img>
                    <img
                      className="text price"
                      src={project.langage[1]}
                      alt={project.altlang}
                    ></img>
                  </div>
                </div>
              </div>
            </Link>
          )
        )}
    </div>
  )
}
export default ProjectsCard
