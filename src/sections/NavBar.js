import React from 'react';
import { Navbar, Nav, Form, NavDropdown, FormControl, Button, Container } from 'react-bootstrap';


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

  handleButtonClick = () => {
    this.props.customSearch(this.state.searchText);
  }

  submitHandler = event => {
    event.preventDefault();
    this.handleButtonClick();
  }

  handleSelectCategory = event => {
    // console.log(event.target.getAttribute("value"));
    this.props.category(event.target.getAttribute("value"));
    window.scrollTo(0, 0);
  }
  handleNavEverything = event => {
    // console.log(event.target.getAttribute("value"));
    this.props.everything(event.target.getAttribute("value"));
    window.scrollTo(0, 0);
  }


  render() {
    return (
      <Container>
        <Navbar collapseOnSelect fixed="top" bg="light" expand="lg">
          <Navbar.Brand href="#home">Newsie</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link onClick={this.handleNavEverything} href="#everything" value="everything">Top Headlines</Nav.Link>
              <NavDropdown title="Category" id="basic-nav-dropdown">
                <NavDropdown.Item onClick={this.handleSelectCategory} href="#business" value="business">Business</NavDropdown.Item>
                <NavDropdown.Item onClick={this.handleSelectCategory} href="#entertainment" value="entertainment">Entertainment</NavDropdown.Item>
                <NavDropdown.Item onClick={this.handleSelectCategory} href="#general" value="general">General</NavDropdown.Item>
                <NavDropdown.Item onClick={this.handleSelectCategory} href="#health" value="health">Health</NavDropdown.Item>
                <NavDropdown.Item onClick={this.handleSelectCategory} href="#science" value="science">Science</NavDropdown.Item>
                <NavDropdown.Item onClick={this.handleSelectCategory} href="#sports" value="sports">Sports</NavDropdown.Item>
                <NavDropdown.Item onClick={this.handleSelectCategory} href="#technology" value="technology">Technology</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline onSubmit={this.submitHandler}>
              <FormControl
                onChange={this.handleSearchInput}
                value={this.state.searchText}
                type="search"
                placeholder="Search"
                className="mr-sm-2"
                id="search-input" />
              <Button id="search-button" onClick={this.handleButtonClick} variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>

        </Navbar>
      </Container>
    )
  }
}

export default NavBar