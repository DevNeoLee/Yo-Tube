import React, { Component } from 'react';
import searchIcon from './searchIcon.png';
import './search.css'

export default class Search extends Component {
    //local state
    state ={
        searchTerm: '',
        }
    
    //function to set "searchTerm"
    handleChange = (event) => { 
        this.setState({ searchTerm: event.target.value });
        console.log(this.state.searchTerm);
    }

    //
    handleSubmit = (event) => {
        
        // console.log(this.state.searchTerm);
        this.props.onChildClick(this.state.searchTerm);
        // console.log(this.state.searchTerm);

        event.preventDefault();
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit} className="searchContainer" id="searchForm">
                <input type="text" onChange={this.handleChange} placeholder="Search" className="searchInput" />
                <button type="submit" form="searchForm" value="Submit"><img src={searchIcon} /></button>
            </form>
          
        )
    }
   
}

