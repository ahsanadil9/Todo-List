import logo from './logo.svg';
import './App.css';
import Header from "./MyComponents/Header"
import {Todos} from "./MyComponents/Todos"
import {Footer} from "./MyComponents/Footer"
import { Modal, ModalBody, ModalHeader } from 'reactstrap';

function App() {
  return (
    <>
        <Header title="Todos List"/> 
        <Todos /> 
        <Footer/>
        <Modal isOpen={false}>
          <ModalHeader>
            <h1>hello new modal</h1>
          </ModalHeader>
          <ModalBody>
            this is body
          </ModalBody>
        </Modal>
    </>
  );
}

export default App;
