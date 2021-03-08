import React from "react"
import "./postStatusFilter.css"
export default class PostStatusFilter extends React.Component  {
  constructor(props){
    super(props);
    this.buttons = [
      {name: 'all', label: 'Все'},
      {name: "like", label: "понравилось"}
    ]
  }
    render() {
      const buttons = this.buttons.map(({name, label}) =>{
        const active = this.props.filter === name;
        const cleess = active ? 'btn-info' : 'btn-outline-secondary' 
        return (
          <button key = {name} type="button" className={`btn ${cleess}`} onClick={()=> this.props.onFilterSelect(name)}>{label}</button>
        )
      })
      
      return (
        <div className="btn-group">
          {buttons}
        </div>
    )
    }
}

