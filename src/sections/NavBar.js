import React from 'react';
import { Navbar, Nav, Form, NavDropdown, FormControl, Button } from 'react-bootstrap';


class NavBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
    }
  }

  handleSearchInput = event => {
    this.setState({
      searchText: event.target.value
    });
  }

  handleButtonClick() {
    this.props.customSearch(this.state.searchText);

  }
  submitHandler = event => {
    event.preventDefault();
    this.handleButtonClick();
  }

  handleSelectCategory = event => {
    // console.log(event.target.getAttribute("value"));
    this.props.category(event.target.getAttribute("value"));
  }

  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Newsie</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Category" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={this.handleSelectCategory} value="business">Business</NavDropdown.Item>
              <NavDropdown.Item onClick={this.handleSelectCategory} value="entertainment">Entertainment</NavDropdown.Item>
              <NavDropdown.Item onClick={this.handleSelectCategory} value="general">General</NavDropdown.Item>
              <NavDropdown.Item onClick={this.handleSelectCategory} value="health">Health</NavDropdown.Item>
              <NavDropdown.Item onClick={this.handleSelectCategory} value="science">Science</NavDropdown.Item>
              <NavDropdown.Item onClick={this.handleSelectCategory} value="sports">Sports</NavDropdown.Item>
              <NavDropdown.Item onClick={this.handleSelectCategory} value="technology">Technology</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline onSubmit={this.submitHandler}>
            <FormControl
              onChange={this.handleSearchInput}
              value={this.state.searchText}
              type="search"
              placeholder="Search"
              className="mr-sm-2" />
            <Button onClick={this.handleButtonClick} variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>

      </Navbar>
    )
  }
}

export default NavBar