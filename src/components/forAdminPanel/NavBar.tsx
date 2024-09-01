import { useContext } from "react";
import styled from "styled-components";
import { Context } from "../../App";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const { adminCategories, setAdminCategories } = useContext(Context);
  const { adminProducts, setAdminProducts } = useContext(Context);
  const { adminUsers, setAdminUsers } = useContext(Context);
  const { adminSubscriptions, setAdminSubscriptions } = useContext(Context);
  const { adminFaq, setAdminFaq, setUsers } = useContext(Context);
  const { adminReview, setAdminReview } = useContext(Context);

  const navigate = useNavigate();

  return (
    <>
      <NavBar>
        <ol>
          <ul
            onClick={() => {
              setAdminCategories(adminCategories == false ? true : false);
              setAdminProducts(false);
              setAdminUsers(false);
              setAdminSubscriptions(false);
              setAdminFaq(false);
              setAdminReview(false);
            }}
          >
            Categories
          </ul>
          <ul
            onClick={() => {
              setAdminProducts(adminProducts == false ? true : false);
              setAdminCategories(false);
              setAdminUsers(false);
              setAdminSubscriptions(false);
              setAdminFaq(false);
              setAdminReview(false);
            }}
          >
            Products
          </ul>
          <ul
            onClick={() => {
              setAdminUsers(adminUsers == false ? true : false);
              setAdminCategories(false);
              setAdminProducts(false);
              setAdminSubscriptions(false);
              setAdminFaq(false);
              setAdminReview(false);
            }}
          >
            Users
          </ul>
          <ul
            onClick={() => {
              setAdminSubscriptions(adminSubscriptions == false ? true : false);
              setAdminCategories(false);
              setAdminProducts(false);
              setAdminUsers(false);
              setAdminFaq(false);
              setAdminReview(false);
            }}
          >
            Subscriptions
          </ul>
          <ul
            onClick={() => {
              setAdminFaq(adminFaq == false ? true : false);
              setAdminCategories(false);
              setAdminProducts(false);
              setAdminUsers(false);
              setAdminSubscriptions(false);
              setAdminReview(false);
            }}
          >
            FAQ
          </ul>
          <ul
            onClick={() => {
              setAdminReview(adminReview == false ? true : false);
              setAdminProducts(false);
              setAdminUsers(false);
              setAdminSubscriptions(false);
              setAdminFaq(false);
              setAdminCategories(false);
            }}
          >
            Reviews
          </ul>
          <ul
            onClick={() => {
              localStorage.clear();
              setUsers({
                id: 0,
                review: "",
                username: "",
                email: "",
                last_name: "",
                first_name: "",
                password: "",
                profilePicture: "",
                phoneNumber: "",
                is_superuser: false,
              });
              navigate("/");
            }}
          >
            Log Out
          </ul>
        </ol>
      </NavBar>
    </>
  );
}

const NavBar = styled.div`
  padding: 160px 16px 0;
  font-size: 20px;
  color: #121212;
  border-right: 1px solid #121212;
  border-left: 1px solid #121212;
  text-align: center;
  ul {
    padding: 20px 0;
    cursor: pointer;
  }
`;
