const appModule = require("./app");

const port = process.env.PORT || 3001;

appModule.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
