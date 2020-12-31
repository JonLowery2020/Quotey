import React, {Component} from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

import './App.css'

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      loading: true,
      saying:'',
      author:''
    }
  }

  async componentDidMount(){
    const url = "https://favqs.com/api/qotd";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({saying:data.quote.body,author:data.quote.author, loading:false})

  }



  render(){
    return (
    <div className='container'>
     <Card style={{width:'24rem'}}  className="card">
      <Card.Header as="h4" className='header'> Quotey.</Card.Header>
       <Card.Body>
         {this.state.loading? <Card.Text className="text">Loading...</Card.Text>:<Card.Text className="text">{`"${this.state.saying}"`} - {this.state.author}</Card.Text>}
         <div className ="button-group">
         <Button href= {`https://twitter.com/intent/tweet?text=${this.state.saying}-${this.state.author}`}
            target = "_blank" rel="noopener noreferrer">
              <span className="fa fa-twitter fa-lg"></span> Tweet
         </Button>
         <Button onClick={this.componentDidMount.bind(this)}>New Qoute!</Button>
         </div>
       </Card.Body>
     </Card>
   </div>
    )
  }
}

export default App
