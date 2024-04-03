import { useNavigate } from "react-router-dom/dist";
import "./Product.scss";


/*const Product = ({id,data}) => {
    const navigate = useNavigate();


    return (
    <div className="product-card" onClick={() => navigate("/product/" +id)}>
        <div className="thumbnail">
          <img src={process.env.REACT_APP_DEV_URL + data.img.data[0].attributes.url} alt="" /> 
            <img src={process.env.REACT_APPC_DEV_URL + data.img.data[0].attributes.url} alt="" />
        
        </div>
        <div className="prod-details">
            <span className="name">{data.title}</span>
            <span className="price">&#8377;{data.price}</span>
        </div>
    </div>
    )
};*/

const Product = ({ id, data }) => {
  const navigate = useNavigate();

  //const cloudinaryBaseUrl = "https://res.cloudinary.com/dkb3a5r0m/image/upload/";

  return (
    <div className="product-card" onClick={() => navigate("/product/" + id)}>
      <div className="thumbnail">
        {data.img.data.map((image, index) => (
          <img
            key={index}
            src={ image.attributes.url}
            alt={`Product ${index + 1}`}
          />
        ))}
      </div>
      <div className="prod-details">
        <span className="name">{data.title}</span>
        <span className="price">&#8377;{data.price}</span>
      </div>
    </div>
  );
};


export default Product;
