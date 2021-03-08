import React from 'react';
import './app.css';

import AppHeader from "../appHeader/appHeader"
import SearchPanel from "../searchPanel/searchPanel"
import PostStatusFilter from "../postStatusFilter/postStatusFilter"
import PostList from "../postList/postList"
import PostAddForm from "../postAddForm/postAddForm"

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: [{
        label: 'проснуться', important: true, like: false, id: 1 
      }, {
        label: 'позавтракать', important: false, like: true, id: 2
      },
      {
        label: "принять душ", important: true, like: false, id: 3 
      }],
      term: '',
      filter: 'all'
    }
    
    this.maxId = 4;
    this.deleteItem = this.deleteItem.bind(this)
    this.addItem = this.addItem.bind(this)
    this.onToggleImportant = this.onToggleImportant.bind(this)
    this.onToggleLiked = this.onToggleLiked.bind(this)
    this.onUpdateSearch = this.onUpdateSearch.bind(this)
    this.onFilterSelect = this.onFilterSelect.bind(this)
  }

  deleteItem(id){
    this.setState(({data})=>{
      const index = data.findIndex(el => el.id === id)
      const before = data.slice(0, index);
      const after = data.slice (index+1);
      const newArr = [...before, ...after];
      return {
        data: newArr
      }
    });
  }

  addItem(body){
    const newItem = {
      label: body, important: false, like: false, id: this.maxId++ 
    }
    this.setState(({data}) => {
      const newArr = [...data, newItem]
      return {
        data: newArr
      }
    })
  };


onTargetFunc(id, target){
    this.setState(({data}) => {
      const index = data.findIndex(el => el.id === id);
      const beforeEl = data[index];
      const newEl = {...beforeEl, target: !beforeEl.target};
      const newArr =  [...data.slice(0, index), newEl, ...data.slice(index +1)];
      return {
        data: newArr
      }
    });
  }

onToggleImportant(id){
  this.setState(({data}) => {
    const index = data.findIndex(el => el.id === id);
    const beforeEl = data[index];
    const newEl = {...beforeEl, important: !beforeEl.important};
    const newArr =  [...data.slice(0, index), newEl, ...data.slice(index +1)];
    return {
      data: newArr
    }
  });
}

onToggleLiked(id){
  this.setState(({data}) => {
    const index = data.findIndex(el => el.id === id);
    const beforeEl = data[index];
    const newEl = {...beforeEl, like: !beforeEl.like};
    const newArr =  [...data.slice(0, index), newEl, ...data.slice(index +1)];
    return {
      data: newArr
    }
  });
}

searchPost(i, term){
  if(term.length === 0){
    return i;
  }

  return i.filter((item) => {
    return item.label.indexOf(term) > -1
  });

}

filterPost(i, filter){
  if(filter === 'like'){
    return i.filter(item => item.like);
  }
  else {
    return i;
  }
}

onUpdateSearch(term){
  this.setState({term});
}

onFilterSelect(filter){
  this.setState({filter});
}
  render(){
 
  const liked = this.state.data.filter(item => item.like).length;
  const allPosts = this.state.data.length;
  const visPosts = this.filterPost(this.searchPost(this.state.data, this.state.term), this.state.filter);

  return (
    <div className="app">
      <AppHeader liked={liked} allPosts={allPosts}/>
      <div className = "search-panel d-flex">
      <SearchPanel
      onUpdateSearch = {this.onUpdateSearch}/>
      <PostStatusFilter filter = {this.state.filter}
      onFilterSelect = {this.onFilterSelect}/>
      </div>
      <PostList posts = {visPosts} 
      onDelete = {this.deleteItem}
      onToggleImportant = {this.onToggleImportant}
      onToggleLiked = {this.onToggleLiked}/>
      <PostAddForm onAdd = {this.addItem}/>
    </div>
  );
  }
}

