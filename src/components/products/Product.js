import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Product = ({product}) => {
    const navigate = useNavigate();
    const {title,price,image,id}=product;
  
  return (
    <div className="col-4 mt-4">
      <Card className="text-center h-100 p-2">
        <Card.Img variant="top" src={image} height="250px" />
        <Card.Body>
          <Card.Title className=" m-0 p-0">{title.substring(0, 19)}</Card.Title>
          <Card.Text className="fs-2 fw-bolder lead p-0 m-0">${price}</Card.Text>
          <button  onClick={() => navigate(`/products/${id}`)} type="button" className="btn btn-outline-dark px-3">Buy Now</button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
