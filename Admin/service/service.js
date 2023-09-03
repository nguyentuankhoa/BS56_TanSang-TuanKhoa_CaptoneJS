const BASE_URL = "https://64c8aca9a1fe0128fbd60a9a.mockapi.io/myproject";

let getList = () => {
  return axios({
    url: BASE_URL,
    method: "GET",
  });
};

let deleteProduct = (id) => {
  return axios({
    url: `${BASE_URL}/${id}`,
    method: "DELETE",
  });
};
let addProduct = (product) => {
  return axios({
    url: BASE_URL,
    method: "POST",
    data: product,
  });
};

let getDetail = (id) => {
  return axios({
    url: `${BASE_URL}/${id}`,
    method: "GET",
  });
};

let showProduct = {
  getList,
  deleteProduct,
  addProduct,
  getDetail,
};
export default showProduct;
