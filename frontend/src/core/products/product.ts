import Expecifications from "./expecifications";
import Prices from "./prices";

export default interface Product extends Prices {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  tags: string[];
  expecifications: Expecifications;
  rating: {
    rate: number;
    count: number;
  };
}
