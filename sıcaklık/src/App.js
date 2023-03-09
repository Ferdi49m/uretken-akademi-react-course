
import { Container,Row,Col} from "reactstrap";
import { useState } from "react";


function App() {

  const [first, setfirst] = useState(0)


  const sicaklikEkle=()=>{
    setfirst(first+1)
  }
  const sicaklikCıkar=()=>{
    setfirst(first-1)
  }


  return (
    <div >
      <Container>
        <Row>
          <Col xs="4">
            <button onClick={sicaklikEkle}>Sıcaklık Ekle</button>
            <button onClick={sicaklikCıkar}>Sıcaklık Çıkar</button>
          </Col>
        </Row>
        <Row>
          <Col xs="4">
            <div>Celsius : °C{first}</div>
          </Col>
          <Col xs="4">
            <div> Fahrenheit : °F{first*1.8+32}</div>
          </Col>
          <Col xs="4">
            <div>Kelvin : °K{first+273}</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
