import uuid from "uuid/v1";
import moment from "moment";

export default [
  {
    id: uuid(),
    name: "Dropbox",
    imageUrl: "/images/products/product_1.png",
    updatedAt: moment().subtract(2, "hours"),
  },
];
