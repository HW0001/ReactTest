import React from 'react'; 
import './App.css';

function App() {
  return (
    <div className="App">
     我是Parent
     <San />
    </div>
  );
}

class San extends React.Component{
  constructor(){
    super()
    this.state={
      n:10
    }
  }
   render(){
    return (<div>我是san中的N:{this.state.n}
     <button onClick={()=>this.add()}> +1 </button> 
     <Granson />
     </div>)
 }
 add(){ 
   this.setState({n:this.state.n+1})
 }
}

// function Granson() {
//   return  (<div>我是granson</div>)
// }
let Granson =()=> {
  const  [n] = React.useState("100")
return  <div>我是granson{n}</div>
}


export default App;
