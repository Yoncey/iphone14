// 手机颜色
const colorsMap = {
  midnight: "午夜色",
  starlight: "星光色",
  red: "红色",
  blue: "蓝色",
  purple: "紫色",
  yellow: "黄色",
};

window.addEventListener("load", async () => {
  for (let i in colorsMap) {
    // console.log("1111");
    await new Promise((res) => setTimeout(res, 50));
    // console.log(i);
    document.querySelector(`.iphone .${i}`).style.opacity = "1";
  }
  // 默认展示黄色
  await new Promise((res) => setTimeout(res, 500));
  document.querySelector("#yellow").click();
  document.querySelector(".new").style.display = "block";
});

document.querySelector(".colors").addEventListener("click", (e) => {
  if (e.target.nodeName == "SPAN") {
    // 右上角蓝色外圈全部移除
    document.querySelectorAll(".colors label").forEach((i) => {
      i.classList.remove("active");
    });
    // 给对应的label添加外圈
    e.target.parentNode.classList.add("active");
    document.querySelector("#color-text").innerHTML = colorsMap[e.target.id];

    // 将所有iPhone的active效果移除
    document.querySelectorAll(".iphone figure").forEach((i) => {
      i.classList.remove("active");
    });
    // 给对应的iPhone添加active效果
    document.querySelector(`.iphone .${e.target.id}`).classList.add("active");
    // 自定义属性
    document.querySelector(".iphone").dataset.active = e.target.id;
  }
});
