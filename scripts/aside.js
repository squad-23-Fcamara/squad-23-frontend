class NavMobile {
    constructor (btnMenu, navMenu, nav) {
        this.btnMenu = document.querySelector(btnMenu);
        this.navMenu = document.querySelector(navMenu);
        this.nav = document.querySelectorAll(nav);
        this.activeCl = "active";
    }

addClickEvent() {
    this.btnMenu.addEventListener("click", () => console.log ("Hey cara"));
}

    init() {
        if(this.btnMenu){
            this.addClickEvent();
        }
        return this;
    }
}

const NavMobileBar = new NavMobile(
    ".btnMenu",
    ".navMenu",
    ".nav",
);

NavMobileBar.init();