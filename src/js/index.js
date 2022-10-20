const tabs = document.querySelectorAll(".tab");

tabs.forEach(tab => {
    tab.addEventListener("click", function () {
        if (tab.classList.contains("selected")){
            return;
        }
        selectTab(tab);
        showTabInfos(tab);
    });
});

function selectTab(tab) {
    const selectedTab = document.querySelector(".selected.tab");
    selectedTab.classList.remove("selected");
    tab.classList.add("selected");
}

function showTabInfos(tab) {
    const selectedInfo = document.querySelector(".selected.info");
    selectedInfo.classList.remove("selected");
    const tabInfoElementId = `info-${tab.id}`;
    const showInfo = document.getElementById(tabInfoElementId);
    showInfo.classList.add("selected");
}
