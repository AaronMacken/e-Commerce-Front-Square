import React, { useState, useEffect } from "react";
import './Products.css';
import Title from '../../components/Title/Title';
import axios from 'axios';
import Items from './Items';
import Pagination from './Pagination';
import CategoryList from "./CategoryList";


const Products = () => {
  // create state values using useState
  const [items, setItems] = useState([]);
  const [searchBarValue, setSearchBarValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(9);
  const [categoryFilter, setCategoryFilter] = useState("All");

  // call useEffect to get json from api - aka componentDidMount
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('/api/products');
      setItems(res.data);
      setLoading(false);
    }
    fetchPosts();
  }, [])

  let filteredProducts = items.filter(product => {
    if(categoryFilter.toLowerCase() == "all") {
      return product.title.toLowerCase().indexOf(searchBarValue.toLowerCase()) !== -1;
    } else {
      if(categoryFilter.toLowerCase() == product.category.toLowerCase()) {
        return product.title.toLowerCase().indexOf(searchBarValue.toLowerCase()) !== -1;
      }
    }
  });

  function searchItems(e) {
    setSearchBarValue(e.target.value);
    setCurrentPage(1)
  }

  function update(e) {
    setCategoryFilter(e)
  }

  // get current posts
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

  // change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  }
  return (
    <div className="products-page">
      <Title text={'Products'} />
      <CategoryList update={update} activeCategory={categoryFilter} categories={["All", "Flowers", "Tinctures", "Cartridges", "Topicals", "Edibles", "Pet Edibles", "Misc"]}  />
      <input type="text" value={searchBarValue}
        onChange={e => searchItems(e)}
        placeholder="Search products"
        className="filterInput"
      ></input>
      <Items items={currentItems} loading={loading} />
      <Pagination itemsPerPage={itemsPerPage} totalItems={filteredProducts.length}
        paginate={paginate} currentPage={currentPage}
      />
    </div>
  );

}


export default Products;