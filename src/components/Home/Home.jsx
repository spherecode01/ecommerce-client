
/*import { useEffect } from "react";
import Products from "../Products/Products";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import "./Home.scss";
//import Category from './../Category/Category';
import { fetchDatafromApi } from "../../utils/api";
import { Context } from "../../utils/context";
import { useContext } from "react";

const Home = () => {
    const {categories, setCategories, products, setProducts} = useContext(Context)
    useEffect(()=>{
        getProducts();
        getCategories();
    },[])

    const getProducts = () => {
        fetchDatafromApi("/api/products?populate=*").then(res => {
            console.log(res)
            setProducts(res)
        });
    }
    const getCategories = () => {
        fetchDatafromApi("/api/categories?populate=*").then(res => {
            console.log(res)
            setCategories(res)
        });
    }


    return <div>
        <Banner />
        <div className="main-content">
            <div className="layout">
            <Category categories={categories} />
            <Products products={products} headingText="Popular Products" />
            </div>
        </div>
    </div>;
};

export default Home;*/

import { useEffect } from "react";
import Products from "../Products/Products";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import "./Home.scss";
//import Category from './../Category/Category';
import { fetchDatafromApi } from "../../utils/api";
import { Context } from "../../utils/context";
import { useContext } from "react";

const Home = () => {
    const {categories, setCategories, products, setProducts} = useContext(Context)

    useEffect(()=>{
        const getProducts = () => {
            fetchDatafromApi("/api/products?populate=*").then(res => {
                console.log(res)
                setProducts(res)
            });
        }

        const getCategories = () => {
            fetchDatafromApi("/api/categories?populate=*").then(res => {
                console.log(res)
                setCategories(res)
            });
        }

        getProducts();
        getCategories();
    },[setCategories, setProducts])

    return <div>
        <Banner />
        <div className="main-content">
            <div className="layout">
            <Category categories={categories} />
            <Products products={products} headingText="Popular Products" />
            </div>
        </div>
    </div>;
};

export default Home;


