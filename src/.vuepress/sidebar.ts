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
      text: "JavaEE_Spring",
      icon: "laptop-code",
      prefix: "java/javaee_spring/",
      link: "java/javaee_spring/",
      children: "structure",
      collapsible: true
    },

  ],
});
