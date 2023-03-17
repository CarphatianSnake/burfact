// Styles
import './Carousele.scss';

// Component
function Carousele(props) {
  return (
    <div className="carousele_wrapper">
      <div className="carousele">
        {props.children}
      </div>
    </div>
  )
}

export default Carousele;