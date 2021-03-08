import React from 'react'
import "./searchPanel.css"
export default class SearchPanel extends React.Component {
    constructor (props){
        super(props)
        this.state = {
            term: ''
        }
        this.onUpdate = this.onUpdate.bind(this)
    }
    onUpdate(e){
        const term = e.target.value;
        this.setState({term}); //аналогично {term: term}
        this.props.onUpdateSearch(term) //Это не рекурсия, эту функцию мы берём из компонента app
    }

   render(){
    return (
        <input
            className = "form-control search-input"
            type="text"
            placeholder="Поиск записей "
            onChange = {this.onUpdate}
        />
        )
   }
}
