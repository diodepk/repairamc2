var NavBtn = document.getElementById("NavBtn");
var NavList = document.getElementById("NavList");
var NavBtnClicked = false;
var HomeSectionThirdRightQAList = document.getElementsByClassName("HomeSectionThirdRightQAList")[0];
var HomeSectionThirdRightQA = HomeSectionThirdRightQAList.getElementsByClassName("HomeSectionThirdRightQA");
NavBtn.onclick=()=>{
    if(!NavBtnClicked){
        NavBtn.classList = "MainNavButton active";
        NavList.classList = "ListComputer active";
        NavBtnClicked = true;
    }else{
        NavBtn.classList = "MainNavButton";
        NavList.classList = "ListComputer";
        NavBtnClicked = false;
    }
}
for (let i = 0; i < HomeSectionThirdRightQA.length; i++) { 
    HomeSectionThirdRightQA[i].onclick=()=>{
        for (let index = 0; index < HomeSectionThirdRightQA.length; index++) {
            HomeSectionThirdRightQA[index].classList="HomeSectionThirdRightQA"
            HomeSectionThirdRightQA[index].getElementsByTagName("i")[0].classList="fa-regular fa-plus"
        }
        HomeSectionThirdRightQA[i].className = "HomeSectionThirdRightQA active";
        HomeSectionThirdRightQA[i].getElementsByTagName("i")[0].classList="fa-regular fa-close"
    }
}