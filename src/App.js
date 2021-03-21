import React from "react";
import "./style.css";
import marked from "marked"



class App extends React.Component{
  constructor(props){
    super(props);
    this.state= {
      input:'',
      markdown:`<h1 id="marked-in-nodejsnnrendered-by-marked">Marked in Node.js\n\nRendered by <strong>marked</strong>.</h1>`
    };
    this.handleChange = this.handleChange.bind(this);
  
  }
handleChange(event){
   const marked = require("marked");
  if(event.target.value){
    
  this.setState({input: event.target.value});
  this.setState({markdown: marked(this.state.input)});

  }else{
    this.setState({markdown: '<h1 id="marked-in-nodejsnnrendered-by-marked">Marked in Node.js\n\nRendered by <strong>marked</strong>.</h1>'})
  }

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