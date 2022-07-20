import Form from "./components/Form";
import { useEffect, useState } from "react";

function App() {
  const [hapList, setHapList] = useState([]);
  console.log(hapList); // {title: 'ㅇ', content: 'ㅇ'} 잘 가져와짐. 이제 hapList 객체를 기존 배열에 추가해야함

  //Form 에서 생성된 새로운 Hap 데이터를 읽어오고,(핸들러 함수. Form에서 직접 함. 그걸 받아오는 state 필요) //없어도 될듯
  // 기존 데이터에 추가하는 state
  // 나중에 다른 컴포넌트로 보내줘야 한다.

  return <Form setHapList={setHapList} />;
}

export default App;
