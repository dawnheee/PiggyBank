import Form from "./components/Form";
import { useState } from "react";

function App() {
  const [hapList, setHapList] = useState([]);
  console.log(hapList); // 기존 배열에 새 데이터 추가 성공 !

  const addHappHandler = (hap) => {
    setHapList((prevHap) => {
      return [hap, ...prevHap];
    });
  };

  //데이터 추가하는 함수를 만들어 form으로 내려준다.
  //하위 컴포넌트에서는 해당 데이터가 만들어지면 일어나는 작업을 하고, 데이터 정제해서 함수의 인수로 보낸다.
  //이 컴포넌트의 add 핸들러 함수에서는 그걸 받아서 기존 배열에 추가해준다.

  return <Form onAddHap={addHappHandler} />;
}

export default App;
