const controller = require("../controllers");
const routes = (app) => {
  app.route("/student/").get(controller.getUser).post(controller.addUser);
  app.route("/student/:id").delete(controller.deleteUser).put(controller.updateUser);
  app.route("/student/search").get(controller.searchUser);
  app.route("/student/pagination").get(controller.paginate);
  app.route("/student/searchPaginate").get(controller.searchPaginate);
  app.route("/student/sortById").get(controller.sortById);
};
module.exports = routes;
