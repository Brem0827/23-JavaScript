const selectMenu = document.querySelector("#major");

function displaySelect(){
    let selectedText = selectMenu.options[selectMenu.selectedIndex].innerText;
    alert(`[${selectedText}]를 선택하였습니다.`);
}
selectMenu.onchange = displaySelect;