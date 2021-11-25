import logo from './logo.svg';
import './App.css';


const Item = () => {
  return <p>Item</p>
}
const Item2 = () => {
  return <p>Itemкеек2</p>
  
}
const Item3 = () => {
  return <p> Item3 укеке</p>

}





function App() {
  let red = false
  return (
    <div className="App">
      <Item />
      <Item2 />
    {/* если red = true  */}
      {red && <div>
        <Item2 />
        <Item2 />
        <Item2 />
        <Item2 />
        <Item2 />
        <Item3 />
      </div>}
     
    </div>
  )
}

export default App;
