class Sidebar {
  constructor(eSidebar) {
    this.eSidebar = eSidebar;
  }

  toggleSidebar() {
    if (this.eSidebar.classList.contains("sidebar--opened")) {
      this.eSidebar.classList.remove("sidebar--opened");
      return;
    }

    this.eSidebar.classList.add("sidebar--opened");
  }
}

const eSidebar = document.querySelector(".sidebar");
const sidebar = new Sidebar(eSidebar);
