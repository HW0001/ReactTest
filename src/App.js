import React from 'react'; 
import './App.css';
import Test from "./Test"



function App() {
  let [psn,setPsn] =React.useState(100)   
  let [list] =React.useState([1,2,3,4])   
  const setnewn = ()=>setPsn(psn+1)
  
  return (
    <div className="App">
     我是Parent
     <div>
     psn:{psn}
       <button onClick={setnewn}>+1</button>
     </div>
     <ul>
  {list.map((e)=> <li key={e}>{e}</li> )}
     </ul>
     <hr></hr>
     <San  name="我是传给san的内容"/>
     <Test/>
     {/* <Ddiv /> */}
    </div>
  );
} 
let Ddiv= '<p>sss</p>'
 console.log(Ddiv);

class San extends React.Component{
  constructor(){
    super()
    this.state={
      n:10
    }
  }
   render(){ 
    return (<div>我是san中的N:{this.state.n}
    <p>{this.props.name}</p>
     <button onClick={()=>this.add()}> +1 </button> 
     <Granson name={this.props.name}/>
     {Ddiv}
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
  let  [n,setN] = React.useState("100")
return  <div onClick={()=>setN(n+1)}>我是granson{n}<p>{p.name}</p></div>
}
 
export default App;
