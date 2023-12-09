// 變數宣告
const controlPanel = document.querySelector(".control-panel");
const controlImg = controlPanel.querySelectorAll("img");
const tableTbody = document.querySelector("tbody");

// 將被選取的nav menu加上active class
function activeControlMenu(e) {
  if (e.target.tagName === "IMG") {
    controlImg.forEach((img) => img.classList.remove("active"));
    e.target.classList.add("active");
  }
}

// 寫入表格內容
function fakedata(num) {
  for (let i = 0; i < num; i++) {
    tableTbody.innerHTML += `
<tr>
                    <th class="checkbox-col">
                      <input type="checkbox" />
                    </th>
                    <td class="id-col">1</td>
                    <td class="name-col">Christmas 2020</td>
                    <td class="advertiser-col">
                      <p class="advertiser">Food Market</p>
                      <p class="group">Krab</p>
                    </td>
                    <td class="description-col">holiday night during chr...</td>
                    <td class="price-col">$2000</td>
                    <td class="start-time-col">2020/12/24 19:30</td>
                    <td class="end-time-col">2021/01/02 23:00</td>
                    <th class="actions-col">
                      <img
                        src="https://raw.githubusercontent.com/ALPHACamp/WFE-data-table/0f97f3113bff18353154b8644eb0b31fff2a3bef/icons/menu.svg"
                        alt=""
                        class="actions-btn"
                      />
                    </th>
                    <th>
                      <div class="actions-list hidden">
                        <div class="action-row">
                          <img
                            src="https://raw.githubusercontent.com/ALPHACamp/WFE-data-table/0f97f3113bff18353154b8644eb0b31fff2a3bef/icons/duplicate.svg"
                            alt="duplicate"
                          />Duplicate
                        </div>
                        <div class="action-row">
                          <img
                            src="https://raw.githubusercontent.com/ALPHACamp/WFE-data-table/0f97f3113bff18353154b8644eb0b31fff2a3bef/icons/edit.svg"
                            alt="edit"
                          />Edit
                        </div>
                        <div class="action-row">
                          <img
                            src="https://raw.githubusercontent.com/ALPHACamp/WFE-data-table/0f97f3113bff18353154b8644eb0b31fff2a3bef/icons/delete.svg"
                            alt="delete"
                          />Delete
                        </div>
                      </div>
                    </th>
                  </tr>

`;
  }
}

// 點擊input讓tr產生顯眼顏色
function toggleInputColor(e) {
  if (e.target.tagName === "INPUT") {
    e.target.closest("tr").classList.toggle("checked");
  }
}
// 彈出popup
function actionPopup(e) {
  if (e.target.matches(".actions-btn")) {
    e.target
      .closest("tr")
      .querySelector(".actions-list")
      .classList.toggle("hidden");
  }
}

fakedata(15);
controlPanel.addEventListener("click", activeControlMenu);
tableTbody.addEventListener("click", toggleInputColor);
tableTbody.addEventListener("click", actionPopup);
