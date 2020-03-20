import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ButtonContainer } from "./Button";


// export default class Navbar extends Component {
//   render() {
//     return (
//       <Nav className="navbar navbar-expand-sm  navbar-dark px-sm-5">
//         <ul className="navbar-nav align-items-center">
//           <li className="nav-item ml-5">
//             <Link to="/" className="nav-link">
//             Shop
//             </Link>
//           </li>
//         </ul>
//         <Link to="/cart" className="ml-auto">
//           <ButtonContainer>
//             <span className="mr-2">
//               <i className="fas fa-cart-plus " />
//             </span>
//             my cart
//           </ButtonContainer>
//         </Link>
//       </Nav>
//     );
//   }
// }

function Navbar(){
  return (

  <Nav className="navbar navbar-expand-sm  navbar-dark px-sm-5">
    <ul className="navbar-nav align-items-center">
      <li className="nav-item ml-5">
        <Link to="/" className="nav-link">
          My Jewelshop
            </Link>
      </li>
      <li className="nav-item ml-5">
        <Link to="/ring" className="nav-link">
          Ring
            </Link>
      </li>
      <li className="nav-item ml-5">
        <Link to="/necklace" className="nav-link">
          Necklace
            </Link>
      </li>
      <li className="nav-item ml-5">
        <Link to="/earring" className="nav-link">
          Earring
            </Link>
      </li>
    </ul>
    <Link to="/cart" className="ml-auto">
      <ButtonContainer>
        <span className="mr-2">
          <span className="fas fa-cart-plus " />
        </span>
        my cart
          </ButtonContainer>
    </Link>
  </Nav>
  )
}

export default Navbar;

const Nav = styled.nav`
  background: var(--mainWhite);
  .nav-link {
    color: var(--mainDark) !important;
    font-size:1.3rem;
    text-transform:capitalize;
  }
  @media (max-width: 500px) {
    .navbar-nav {
      flex-direction: row !important;
`;


