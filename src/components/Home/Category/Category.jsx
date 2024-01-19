import "./Category.scss";
import { useNavigate } from "react-router-dom/dist";


/*const Category = ({categories}) => {
    const navigate = useNavigate();
    return (
        <div className="shop-by-category">
        <div className="categories">
            {categories?.data?.map((item)=>(
            <div key={item.id}className="category" onClick={()=> navigate(`/category/${item.id}`)}>
                <img src = {process.env.REACT_APP_DEV_URL + item.attributes.img.data.attributes.url} alt=""/>
               <img src = {process.env.REACT_APPC_DEV_URL + item.attributes.img.data.attributes.url} alt=""/> 
            </div>
            ))}
        </div>
    </div>
    )
};*/

const Category = ({ categories }) => {
  const navigate = useNavigate();
  const cloudinaryBaseUrl = "https://res.cloudinary.com/dkb3a5r0m/image/upload/";

  return (
    <div className="shop-by-category">
      <div className="categories">
        {categories?.data?.map((item) => (
          <div key={item.id} className="category" onClick={() => navigate(`/category/${item.id}`)}>
            <img src={item.attributes.img.data.attributes.url} alt={`Category ${item.id}`} />
          </div>
        ))}
      </div>
    </div>
  );
};


export default Category;
