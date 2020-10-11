import React from 'react'; 
import './App.css';

function App() {
  return (
    <div className="App">
     我是Parent
     <San  name="我是传给san的内容"/>
    </div>
  );
}

class San extends React.Component{
  constructor(props){
    super(props)
    this.state={
      n:10
    }
  }
   render(){
    return (<div>我是san中的N:{this.state.n}
    <p>{this.props.name}</p>
     <button onClick={()=>this.add()}> +1 </button> 
     <Granson name={this.props.name}/>
     </div>)
 }
 add(){ 
   this.setState({n:this.state.n+1})
 }
}

// function Granson() {
//   return  (<div>我是granson</div>)
// }
let Granson =(p)=> {
  const  [n] = React.useState("100")
return  <div>我是granson{n}<p>{p.name}</p></div>
}
 
export default App;
