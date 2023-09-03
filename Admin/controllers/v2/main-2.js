import showProduct from "../../service/service";
import { layThongTin } from "../v1/controllers-1";
import { onSuccess, renderList, showDataForm } from "./controllers-2";

let fetchList = () => {
  showProduct
    .getList()
    .then((res) => {
      console.log(res);
      renderList(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
fetchList();

let deleteProduct = (id) => {
  showProduct
    .deleteProduct(id)
    .then((res) => {
      console.log(res);
      onSuccess("Xoá thành công!");
      fetchList();
    })
    .catch((err) => {
      console.log(err);
    });
};
window.deleteProduct = deleteProduct;

window.addProduct = () => {
  let data = layThongTin();
  showProduct
    .addProduct(data)
    .then((res) => {
      $("#exampleModalLabel").modal("hide");
      onSuccess("Thêm thành công!");
      fetchList();
    })
    .catch((err) => {
      console.log(err);
    });
};

window.editProduct = () => {
  $("#exampleModalLabel").modal("show");
  showProduct
    .getDetail(id)
    .then((res) => {
      console.log(res);
      showDataForm(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
