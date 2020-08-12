import base from "@reflexjs/preset-base"

export default {
  preset: base,
  colors: {
    background: "#F5F5FA",
    muted: "#FFFFFF",
    border: "#DADADA",
    codeblock: "#EAEAEF",
    postblock: "#E1E9F2",
    herobutton: "#07070A",
    herobuttonHover: "#323247",
    modes: {
      dark: {
        codeblock: "#2A2A3C",
        postblock: "#1D252C",
      },
    },
  },
  fontSizes: {
    "7xl": "5rem",
    "8xl": "6rem",
  },
  table: {
    mt:"7",
    mb:"10",
    width:"full",
    overflow:"hidden",
    boxShadow:"2xl",
    borderRadius:"2xl",
    th:{
      bg:"primary",
      p:"2",
      color:"white",
      textAlign:"left",
    },
    td: {
        borderWidth: 1,
        p:"2",
        fontSize:"md",
    }
  },
  styles: {
    root: {
      fontSize: ["lg", "xl"],
      "::-webkit-scrollbar": {
        width: "10px",
        backgroundColor: "postblock",
      },
      "::-webkit-scrollbar-thumb": {
        backgroundColor: "primary",
        borderRadius: "10px",
      },
    },
    inlineCode: {
      fontFamily: "monospace",
      color: "primary",
      bg: "codeblock",
      p: "1",
      fontSize: ["md","lg"],
    },
    a: {
      textDecoration: "underline",
      textUnderlineOffset: "3px",
    },
  },
  blockquote: {
    bg: "muted",
    p: 1,
    pl: 5,
    ml: 0,
    width: "full",
    borderLeft: "5px solid",
    borderColor: "primary",
    borderRadius: "10px",
    fontStyle: "italic",
    lineHeight: "tight",
    fontSize: "lg",
  }
}