import React from "react"; 

let store = {
  user: "222",
  moves: "",
  interest: "",
};
function reducer(state, action) {
  switch (action.type) {
    case "add":
      return {...state,user:{name: action.newName} };
    case "del":
      return {...state,user:{name: "暂无姓名"} };
    default:
      return state;
  }
}

function Reducer() {
  const [{user},y] = React.useReducer(reducer,store)  
  return (
    <div>
      user:{user.name}
      <button onClick={()=>y({type:"add",newName:"jack"})}>添加user</button>
      <button onClick={()=>y({type:"del"})}>重置</button>
      <User />
      <hr />
      <Moves />
      <hr />
      <Interest />
    </div>
  );
}

function User() {
  return (
    <div>
      <h1>个人信息</h1>
    </div>
  );
}

function Moves() {
  return (
    <div>
      <h1>电影</h1>
    </div>
  );
}
function Interest() {
  return (
    <div>
      <h1>兴趣</h1>
    </div>
  );
}
export default Reducer;