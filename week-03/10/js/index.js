let pageNum = 1; // 当前页码，默认页码1
let maxPage; // 最大页数

// TODO：待补充代码
var getData = async function (pageNum) {
  let result = await axios.get("js/carlist.json")
  var Data = result.data;
  if (pageNum * 5 <= Data.length) {
    showData = Data.slice((pageNum - 1) * 5, pageNum * 5)
  } else {
    showData = Data.slice((pageNum - 1) * 5,)
  }
  if (Data.length % 5 == 0) {
    maxPage = Data.length / 5;
  } else {
    maxPage = parseInt(Data.length / 5) + 1
  }
  let prev = document.getElementById("prev");
  let next = document.getElementById("next");
  if (pageNum == 1) {
    prev.className = "page-item disabled"
  } else {
    prev.className = "page-item"
  }
  if (pageNum == maxPage) {
    next.className = "page-item disabled"
  } else {
    next.className = "page-item"
  }
  let group = document.querySelector(".list-group")

  group.innerHTML = ""
  showData.forEach(item => {
    group.innerHTML += `<a href="#" class="list-group-item list-group-item-action">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">${item.name}</h5>
          <small>${item.price}元</small>
        </div>
        <p class="mb-1">
          ${item.description}</p>
      </a>`;
  })
  let pagination = document.querySelector("#pagination")
  pagination.innerHTML = `共${maxPage}页，当前${pageNum}页`
  return maxPage
}

getData(pageNum).then(page => {
  maxPage = page
});
// 点击上一页
let prev = document.getElementById("prev");
prev.onclick = function () {
  // TODO：待补充代码
  if (pageNum > 1) {
    pageNum--;
    getData(pageNum);
  }
};
// 点击下一页
let next = document.getElementById("next");
next.onclick = function () {
  // TODO：待补充代码
  if (pageNum < maxPage) {
    pageNum++;
    getData(pageNum);
  }
};
