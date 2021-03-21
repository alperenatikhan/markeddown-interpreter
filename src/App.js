import React from "react";
import "./style.css";
import marked from "marked"



class App extends React.Component{
  constructor(props){
    super();
    this.state= {
      input:'',
      markdown:''
    };
    this.handleChange = this.handleChange.bind(this);
  
  }
handleChange(event){
  this.setState({input: event.target.value})
  const marked = require("marked");
  const html = marked(this.state.input);
  this.setState({markdown: html });
} 

  render(){
  return (
    <div>
      <div className="col" id="markdown-container">
        <textarea 
        name="input-area" 
        id="editor" 
        onChange={this.handleChange.bind(this)}
        />
      </div>
      <div className="col">
        <div id="preview" className="output-area">
           {this.state.markdown}
        </div>
      </div>
    </div>
  );
}
};

export default App;