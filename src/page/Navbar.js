import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Person, Search } from 'react-bootstrap-icons'
import OffMenu from '../component/OffMenu'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const menuList = ["유아", "아동", "남성", "여성", "H&M Home", "스포츠", "sale", "지속가능성"];

    const navigate = useNavigate();
    
    const goToLogin = () => {
        navigate("/login");
    }

    const home = () => {
        navigate("/");
    }

    const search = (e) => {
        e.preventDefault()
        console.log("keyDown")
        if(e.key === "Enter") {
            console.log("enter를 클릭했어요", e.key)
            let keyword = e.target.value
            console.log("keyword? : ", keyword)
            navigate(`/?q=${keyword}`)
        }
    }
  return (
    <>
        <Container>
            <div className='d-flex justify-content-end align-items-center mt-2'>
                <Person/> 
                <div className='ms-2 pointer' onClick={goToLogin}>로그인</div>
            </div>

            <div className='text-center mt-4 d-none d-md-block'>
                <img src='../images/dog1.jpg' alt='로고' width='100px' onClick={home} />
            </div>

            <div className='d-none d-md-block'>
            <Row>
                <Col lg={2}></Col>
                <Col lg={8} className='text-center'>
                    <ul className='list-unstyled d-flex justify-content-center'>
                        {menuList.map(menu => (
                            <li className='ms-3 fw-bold'>{menu}</li>
                            ))}
                    </ul>
                </Col>
                <Col lg={2}>
                    <form className='d-flex justify-content-end align-items-center' role='search'>
                        <Search />
                        <input 
                            className='form-control me-2 border-0 border-bottom'
                            type='search'
                            placeholder='Search' 
                            aria-label='Search'
                            onKeyDown={(event) => search(event)}
                        />
                    </form>
                    
                    {/* <Form className='d-flex justify-content-end align-items-center'>
                            <Form.Control
                            type="text"
                            placeholder="Search"
                            className="mr-sm-2 me-2 border-0 border-bottom"
                            //onKeyDown={(event) => search(event)}
                            />
                    </Form> */}
                    
                </Col>
            </Row>
            </div>

            <div className='d-md-none'>
                <OffMenu />
                <img src='../images/dog1.jpg' alt='로고' width='50px'/>
            </div>
        </Container>
    </>
  )
}

// https://my-json-server.typicode.com/jun14311/project7_1

export default Navbar