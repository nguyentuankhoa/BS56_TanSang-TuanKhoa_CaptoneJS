export let layThongTin = () => {
  let ma = document.getElementById("productID").value;
  let ten = document.getElementById("tenSP").value;
  let gia = document.getElementById("giaSP").value;
  let hinhSP = document.getElementById("hinhSP").value;
  let moTa = document.getElementById("moTa").value;
  return {
    ma,
    ten,
    gia,
    hinhSP,
    moTa,
  };
};
