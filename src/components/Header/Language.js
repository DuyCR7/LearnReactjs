import NavDropdown from "react-bootstrap/NavDropdown";

const Language = (props) => {
    return (
        <>
            <NavDropdown title="Vietnamese" id="basic-nav-dropdown-2" className="languages">
              <NavDropdown.Item>English</NavDropdown.Item>
              <NavDropdown.Item>Vietnamese</NavDropdown.Item>
            </NavDropdown>
        </>
    )
}

export default Language;