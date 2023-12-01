import { Row, Col } from "antd";
import "./App.css";
import { Upload, Button, message } from "antd";
import { CarouselComponent } from "./component/CarouselComponent";
import salaar1 from "../assets/salaar1.png";



function App() {
  const props = {
    name: 'file',
    action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  return (
    <>
      <CarouselComponent />
      <div className="mainWrapper">
        <Row className="rowContainer">
          <Col span={5} className="colomStyle text_1">
            TEXT
          </Col>
          <Col span={5} className="colomStyle text_2">
            TEXT
          </Col>
          <Col span={5} className="colomStyle text_3">
            TEXT
          </Col>
          <Col span={5} className="colomStyle text_4">
            TEXT
          </Col>
          <Col span={4} className="colomStyle text_5">
            TEXT
          </Col>
        </Row>
        <Row className="rowContainer hoverColorSecondRow">         
         
         <Col span={5} className="textDetail">
         <div>
      <img src={salaar1} alt="salaar1.png" className="imageStyleone" />
    </div>
          </Col>
          <Col className="primaryColor" span={5}>
            TEXT
          </Col>
          <Col className="primaryColor" span={5}>
            TEXT
          </Col>
          <Col span={5}  className="textDetail">
            <Upload {...props}>
              <Button type="text" className="logoButton">LOGO</Button>
            </Upload>
          </Col>
          <Col className="primaryColor" span={4}>
            TEXT
          </Col>
        </Row>
        <Row className="rowContainer hoverColorThirdRow">
        
          <Col span={5} className="textDetail">
            IMAGE
          </Col>
          <Col className="primaryColor" span={5}>
            TEXT
          </Col>
          <Col className="primaryColor" span={5}>
            TEXT
          </Col>
          <Col span={5}  className="textDetail">
            <Upload {...props}>
              <Button className="logoButton" type="text">LOGO</Button>
            </Upload>
          </Col>
          <Col className="primaryColor" span={4}>
            TEXT
          </Col>
        </Row>
      </div>
    </>
  );
}

export default App;
