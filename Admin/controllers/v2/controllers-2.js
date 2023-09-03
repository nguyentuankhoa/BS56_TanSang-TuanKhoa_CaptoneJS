export let renderList = (list) => {
  let contentHTML = "";
  list.forEach(({ ma, ten, gia, hinhSP, moTa }) => {
    let trString = `<tr>
<td>${ma}</td>
<td>${ten}</td>
<td>${gia}</td>
<td>${hinhSP}</td>
<td>${moTa}</td>
<td>
<button class='btn-danger btn' onclick="deleteProduct(${ma})">Xóa</button>
    <button class='btn-primary btn' onclick="editProduct(${ma})">Sửa</button>
    </td>
</tr>`;
    contentHTML += trString;
  });
  document.getElementById("tbodySP").innerHTML = contentHTML;
};

export let showDataForm = (data) => {
  let { id, name, price, image, desc } = data;
  document.getElementById("foodID").value = ma;
  document.getElementById("tenMon").value = ten;

  document.getElementById("giaMon").value = gia;

  document.getElementById("hinhMon").value = hinhAnh;
  document.getElementById("moTa").value = moTa;
};
export let onSuccess = (message) => {
  Swal.fire(message, "", "success");
};
