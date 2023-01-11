module.exports = {
  extends: ["airbnb", "airbnb/hooks", "prettier"],
  plugins: ["react", "react-hooks", "prettier"],
  rules: {
    "react/prop-types": "off",
    "no-use-before-define": "off",
    "react/jsx-filename-extension": "off",
    "react/function-component-definition": "off",
    "react-hooks/exhaustive-deps": "warn",
    "react/style-prop-object": [
      "error",
      {
        allow: ["StatusBar"],
      },
    ],
    "no-shadow": "off",
  },
};
