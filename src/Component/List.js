import React, { Component } from 'react'
import './List.css';
import Star from "./Star"

class List extends Component {
    state = {
       person :{
        fullName:"Hela Abeda",
        bio:"Web Developer",
        img:"hela.jpg",
        profession:"Engineer",
        },
        timer: 0,
    }
    componentDidMount() {
        this.setState({
          intervall: setInterval(() => {
            this.setState ({ timer: this.state.timer + 1 });
          }, 1000)
        });
        console.log("componentDidMount()")
        ;}
    componentDidUpdate() {
        console.log("componentDidUpdate()");
    }
    componentWillUnmount(){
      clearInterval(this.state.intervall) 
      console.log(" componentWillUnmount()");}
    render() {
        return (
            <div className="List">
              <img src={this.state.person.img} alt="hela"/>
              <h1>{this.state.person.fullName}</h1>
              <h3>{this.state.person.bio}</h3>
              <h4>{this.state.person.profession}</h4>
              <p>{this.state.timer}</p>
              <Star/>
            
            </div>
        )
    }
}

export default List