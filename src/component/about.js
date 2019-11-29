function about() {
  return {
    template: `<div class="about">
      <ul>
        <li>
          <span class="label">软件名称</span>
          <span class="content">{{about.name}}</span>
        </li>
        <li>
          <span class="label">软件版本</span>
          <span class="content">{{about.version}}</span>
        </li>
        <li>
          <span class="label">程序版本</span>
          <span class="content">{{about.program}}</span>
        </li>
        <li>
          <span class="label">协议版本</span>
          <span class="content">{{about.protocal}}</span>
        </li>
      </ul>
  </div>
  `,
    data() {
      return {
        about:null
      }
    },
    methods: {
      getAbout() {
        this.about = {
          name:'GW1 Gateway数据管理软件',
          version:'V1.20',
          program:'1.2.0.2383',
          protocal:'1.0.0.9865',
        }
      }
    },
    created() {
      this.getAbout()
    }
  }
}