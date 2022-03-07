import React,{useState} from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import {NavLink} from 'react-router-dom'

function Renderlinks(isAuth,handleClose){

let links = [<NavLink to="/Quiz-creator" onClick={handleClose} style={{textDecoration: "none"}} ><Card className='m-3 '>
<Card.Body  >
Тесты
</Card.Body>
</Card></NavLink>]
		if (isAuth){
			links.push(
<NavLink to="/create-quiz"style={{textDecoration: "none"}} onClick={handleClose}>
<Card className='m-3 '><Card.Body  >Создать тест
</Card.Body>
</Card></NavLink>)
			links.push(<NavLink to="/logout"style={{textDecoration: "none"}} onClick={handleClose}><Card className='m-3 '>
<Card.Body  >
Выйти
</Card.Body>
</Card></NavLink>)
		}else{
			links.push(<NavLink to="/auth" style={{textDecoration: "none"}} onClick={handleClose} ><Card className='m-3 '>
<Card.Body  >
Авторизация
</Card.Body>
</Card></NavLink>)
		}
		return links
}


export default function  Sidebar({isAuth}) {
  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
    <>
      <Button variant='outline-info' onClick={handleShow}>
   	<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg>
      </Button>

      <Offcanvas show={show} style={{background: "linear-gradient(to left, #5c0364, #204695)"}} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className=''>Quizes</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul>
			{Renderlinks(isAuth,handleClose)}
			</ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
