import { layThongTin } from "./controllers-1";
import SanPham from "../../models/models";

let themSP = () => {
  let data = layThongTin();
  let { ma, ten, gia, hinhSP, moTa } = data;
  let sanPham = new SanPham(ma, ten, gia, hinhSP, moTa);
};
window.themSP = themSP;
