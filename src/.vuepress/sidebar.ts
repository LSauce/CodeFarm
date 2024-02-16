import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "JavaSE",
      icon: "laptop-code",
      prefix: "java/java-se/",
      link: "java/java-se/",
      children: "structure",
      collapsible: true
    },
    {
      text: "DataBase",
      icon: "laptop-code",
      prefix: "java/database/",
      link: "java/database/",
      children: "structure",
      collapsible: true
    },{
      text: "Spring",
      icon: "laptop-code",
      prefix: "java/spring/",
      link: "java/spring/",
      children: "structure",
      collapsible: true
    },

  ],
});
