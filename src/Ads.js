import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


class Ads extends Component {

 ads = [
  { id: 1, title: "Dark Orchid", description: "DarkOrchid", author: "Igbin", date: "2323" },
  { id: 2, title: "Lime Green", description: "LimeGreen", author: "login", date: "2323" },
];


 date = () => {
 	return new Date().getFullYear()+'-'+new Date().getMonth()+'-'+new Date().getDate() + ' '+new Date().getHours() + ':'+new Date().getMinutes() 
 }

newAdsadd = () => {
	let title = document.getElementById('title').value
	let description = document.getElementById('description').value
	let author = document.getElementById('author').value

	let obj = {
		id: (this.ads.length)+1,
		title: title,
		description:description,
		author: author,
		date: this.date()

	}

return this.ads.push(obj)
}

  render() {
    return (

     <div className="Ads">
    <h1> {this.date}</h1>
     <label htmlFor="title">Title</label>
     <input type="text" name="title" id="title" />
     <label htmlFor="description">Desctription</label>
     <input type="textarea" name="description" id="description"/>
     <label htmlFor="author">Author</label>
     <input type="textarea" name="author" id="author"/>
     <div id="date"></div>

     <button onClick={this.date}>Date</button>
     <button onClick={this.newAdsadd}>press</button>
     <Link to="/" >Home</Link>

      </div>
  
    );
  }
}

export default Ads;