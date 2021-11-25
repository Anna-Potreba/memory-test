import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';



const Item3 = () => {
  return <p> Открываем компонент как дочерний компонент сообщения   </p>

}

const OneModalForAll = ({ text }) => {
  return <p> {text || "Открываем модалку (1 элемент на странице)"}    </p>
}


const Message = () => {
  const [open, setOpen] = useState(false);
  const [lot, setLot] = useState(false);
  const onClick = () => {
    setOpen(!open)
  }
  const onClickMany = () => {
    setLot(!lot)
  }

  return (
    <>
      <div> компонент
        <button onClick={() => onClick()} value="onClick">onClick</button>

        <button onClick={() => onClickMany()} value="onClick">Очень много дочерних компонентов </button>
      </div>
      {
        open && <div>
          <Item3 />
        </div>
      }

      {
        lot && <div>
          <Many text="дочерний" />
        </div>
      }



    </>
  )
}

const Many = ({ text }) => {
  let a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99]

  // for (let i = 0; i < count; i++) {
  //   a.push(i)
  // }
  // console.log(a)
  return (
    a.map(item =>
      <div key={item}>
        <OneModalForAll text={text} />
      </div>
    )
  )
}

function App() {

  // const [open2, setOpen2] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const [openALotOfModal, setOpenALotOfModal] = useState(false);
  const onClick2 = () => {
    setOpenModal(!openModal)
  }

  const count = () => {


    // console.log(a)
    setOpenALotOfModal(!openALotOfModal)
  }

  return (
    <div className="App">

      <Message />
      <Message />
      <Message />
      <Message />

      <p> второй пример с одним  компонентом на все сообщения </p>
      <button onClick={() => onClick2()}>кнопка </button>
      <button onClick={() => onClick2()}>кнопка </button>
      <button onClick={() => onClick2()}>кнопка </button>
      <button onClick={() => onClick2()}>кнопка </button>
      <button onClick={() => onClick2()}>кнопка </button>

      {openModal && <div><OneModalForAll /> </div>}

      <p>увеличим количество модалок до 100 ?</p>
      <button onClick={() => { count() }}>увеличим</button>
      {openALotOfModal && <Many />}



    </div>
  )
}

export default App;
