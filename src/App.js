import { useEffect } from "react";

function App() {

  useEffect(()=>{
    setTimeout(() => {
      window.location.href = 'https://nhancode2022.onrender.com/'
    }, 100);
  },[])
  return (
    <div className="App">
      <h3 style={{textAlign: "center", marginTop: 50}}>
      Đang đến trang nhận code ....
      </h3>
    </div>
  );
}

export default App;
