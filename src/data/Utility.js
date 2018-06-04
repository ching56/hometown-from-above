import Projects from './Projects';

class Utility {
  constructor() {
    this.p = Projects;
    for (let i = 0; i < this.p.list.length; i++) {
      this.p.data[this.p.list[i]].sort((a, b) => {
        a = new Date(a.date);
        b = new Date(b.date);
        return a > b ? -1 : a < b ? 1 : 0;
      });
    }
  }
  getProject(name) {
    if (!this.p.list.includes(name)) {
      return null;
    }
    return this.p.data[name];
  }
}

export default Utility;
