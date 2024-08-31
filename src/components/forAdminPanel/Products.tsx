import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Context } from "../../App";
import { Tproducts } from "../../types/AddCategories";

export default function Products() {
  const { categories, setCategories } = useContext(Context);
  const [products, setProducts] = useState<Tproducts[]>([
    {
      id: 0,
      name: "",
      price: 0,
      description: "",
      inStock: 0,
      image: "",
      category: { name: "", id: 1, bg_picture: "" },
    },
  ]);
  const [addProduct, setAddProduct] = useState({
    id: 0,
    name: "",
    price: 0,
    category_id: "",
    description: "",
    inStock: 0,
    image: "",
  });

  useEffect(() => {
    async function fetchCategory() {
      const response = await fetch("http://134.122.71.97:8000/api/category");
      const data = await response.json();
      setCategories(data);
    }
    fetchCategory();
  }, []);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("http://134.122.71.97:8000/api/product");
      const data = await response.json();
      setProducts(data);
    }
    fetchProducts();
  }, []);

  const addProducts = (event: any) => {
    event.preventDefault();
    const { name, value } = event.target;
    setAddProduct({
      ...addProduct,
      [name]: value,
    });
  };

  console.log(addProduct);
  const handleFileChange = (e: any) => {
    const file = e.target.files[0];
    setAddProduct({
      ...addProduct,
      image: file,
    });
  };

  console.log(addProduct);

  async function addNewProduct(event: any) {
    event.preventDefault();
    const { name, value } = event.target;
    setAddProduct({
      ...addProduct,
      [name]: value,
    });
    console.log(addProduct);
    const formData = new FormData();
    formData.append("name", addProduct.name);
    formData.append("price", addProduct.price.toString());
    formData.append("category_id", addProduct.category_id);
    formData.append("image", addProduct.image);
    formData.append("inStock", addProduct.inStock.toString());
    formData.append("description", addProduct.description);

    let token = localStorage.getItem("token");
    if (token) {
      token = JSON.parse(token);
    }

    const responce = await fetch("http://134.122.71.97:8000/api/product", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token.access}`,
      },
      body: formData,
    });
    const newProduct = await responce.json();
    console.log(newProduct);
    setProducts([...products, newProduct]);
    setAddProduct({
      id: 0,
      name: "",
      price: 0,
      category_id: "",
      description: "",
      inStock: 0,
      image: "",
    });
  }
  // console.log(categoryName)
  console.log(addProduct);
  console.log(products);

  return (
    <>
      <MainCategories>
        <h2>List of Products</h2>
        <div className="titleContainer">
          <div className="descr">
            <p style={{ width: "45px" }} className="productName">
              {" "}
              Picture
            </p>
            <p style={{ width: "50px" }} className="productName">
              Name
            </p>
            <p style={{ width: "50px" }} className="productName">
              Category
            </p>
            <p style={{ width: "260px" }} className="productName">
              Description
            </p>
            <p style={{ width: "20px" }} className="productName">
              Price
            </p>
            <p className="productName">InStock</p>
          </div>
        </div>
        <div className="listproduct">
          {products?.map((item, index) => (
            <div className="container" key={index}>
              <div className="descr">
                <img className="productImg" src={item.image} alt="" />
                <p style={{ width: "50px" }} className="productName">
                  {item.name}
                </p>
                <p style={{ width: "50px" }} className="productName">
                  {item.category.name}
                </p>
                <p style={{ width: "280px" }} className="productName">
                  {item.description}
                </p>
                <p style={{ width: "10px" }} className="productName">
                  {item.price}
                </p>
                <p className="productName">{item.inStock}</p>
              </div>
              <div className="editDelete">
                <button onClick={() => {}}>Delete</button>
              </div>
            </div>
          ))}
        </div>
        <form className="addContainer">
          <h2>Add Product</h2>
          <div className="field">
            <input
              placeholder="Add Product's Name"
              className="inputProduct"
              type="text"
              name="name"
              value={addProduct.name}
              onChange={addProducts}
            />
            <select
              name="category_id"
              className="inputProduct"
              onChange={addProducts}
            >
              {categories?.map((item, index) => (
                <option key={index} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
            <input
              placeholder="Add Product's Description"
              className="inputProduct"
              type="text"
              name="description"
              value={addProduct.description}
              onChange={addProducts}
            />
            <input
              placeholder="Add Product's Price"
              className="inputProduct"
              type="text"
              name="price"
              value={addProduct.price}
              onChange={addProducts}
            />
            <input
              placeholder="Add Productr's QTY InStock"
              className="inputProduct"
              type="text"
              name="inStock"
              value={addProduct.inStock}
              onChange={addProducts}
            />
            <input
              className="chooseFile"
              type="file"
              onChange={handleFileChange}
            />
          </div>
          <button type="submit" onClick={addNewProduct} className="addBt">
            Add
          </button>
        </form>
      </MainCategories>
    </>
  );
}

const MainCategories = styled.div`
  background-color: #eaf07740;
  padding: 20px 0 20px 24px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  font-size: 20px;

  .listProduct {
    display: flex;
    flex-direction: column;
    gap: 10px;
    height: 28vh;
    overflow-y: scroll;
  }

  .container,
  .editDelete {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    border-radius: 8px;
    margin-right: 10px;
  }
  .titleContainer {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    border-bottom: 1px solid #121212;
    font-size: 20px;
    font-weight: 600;
    p {
      font-size: 20px;
    }
  }

  .container {
    border-bottom: 1px solid #121212;
  }
  .descr {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 50px;
  }

  .productName {
    color: #121212;
    font-size: 12px;
    text-align: left;
  }
  .productImg {
    width: 50px;
    height: 50px;
  }

  .addContainer {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .field {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 300px;
  }

  button {
    width: 100px;
    padding: 5px 10px;
    border-radius: 8px;
    border: 1px solid #121212;
    cursor: pointer;
  }

  .chooseFile {
    padding: 4px;
    border-radius: 8px;
    cursor: pointer;
  }

  .inputProduct {
    padding: 5px 15px;
  }
`;
