import React, { Component } from 'react'
import Input from '../components/input';

export default class About extends Component {
    constructor(props){
        super(props);
        
    }
  
  render() {
    return (
      <div>
        {this.state.count}
        <Input name={this.state.nama} setState={this.setState.nama}/>
        <Input name={this.state.alamat}setState={this.setState.alamat}/>
        <Input name={this.state.telepon} setState={this.setState.telepon}/> 
        
      </div>
    )
  }
}
