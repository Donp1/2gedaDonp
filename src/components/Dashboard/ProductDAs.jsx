import { FaStar } from "react-icons/fa";
import ProductImage from "../../assets/images/sample-product.png";
import "./second.css";

const ProductDash = () => {
	return (
		<div className="small-ticket-card">
			<div className="im-tic-con">
				<img src={ProductImage} alt="" />
			</div>
			<div className="pro-title">Hair dryer</div>
			<div className="rate-con">
				<FaStar className="star" />
				<span>4.5</span>
				<div className="cir"></div> <p>180+ Reviews</p>
			</div>

			<div className="pro-btn-con">#2,350.00</div>
		</div>
	);
};

export default ProductDash;
