import "./Style.css"

function Nav(){
    return(
        <div className="container">
            <div className="heading">
                <h1>SREC</h1>
            </div>
                <div className="menu">
                              <h1>
                                <BiMenuAltRight/>
                              </h1>
                              <ul ref={menu}>
                                <li>HOME</li>
                                <li>EVENTS</li>
                                <li>SCHEDULE</li>
                                <li>ABOUT</li>
                                <li className="register">REGISTER</li>
                              </ul>
            </div>
        </div>
    )
}

export default Nav;