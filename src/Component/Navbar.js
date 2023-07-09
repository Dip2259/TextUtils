import React from "react";

function Navbar(prop){
    return(
        <>
            <nav className={`navbar navbar-expand-lg bg-${prop.mode}`} data-bs-theme={`${prop.mode}`}>
                <div className="container-fluid user-color">
                <a href = "/" className="navbar-brand" >{prop.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                {/* <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form> */}
                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onClick={prop.changeTheme}/>
                    <label className={`form-check-label text-${prop.mode==='light'?'dark':'light'}`} htmlFor="flexSwitchCheckChecked">Enable Dark Mode</label>
                </div>
                </div>
                </div>
            </nav>
        </>
    )
}
Navbar.defaultProps = {
    title: "Add Some Title"
}
export default Navbar;