import Tools from '../../data/tools.json'
import './tools.scss'

export default function ToolsGrid() {
  return (
    <div className="tools_grid">
      {Tools &&
        Tools.map((tool) => (
          <div key={tool.id} className="tools_grid_display">
            <img src={tool.image} alt={tool.alt} className="tools_grid_img" />
            <p>{tool.title}</p>
          </div>
        ))}
    </div>
  )
}
