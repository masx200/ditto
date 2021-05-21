import { 挂载初始 } from "./render";
import $ from "jquery";
import { 内容调整左边偏移 } from "./render";
export default {
  mounted() {
    $("#my主体").css("padding-top", $("#my导航栏").height());
    内容调整左边偏移();
    挂载初始();
  },
  data: () => ({
    mytitle: "",
    showerror: false,
    errorcontent: "",
    content: "",
    mulu: "",
    urltext: "",
    xianshicebianlan: true,
  }),
  methods: {
    togglecebian() {
      this.xianshicebianlan = !this.xianshicebianlan;
      内容调整左边偏移();
    },
  },
};
