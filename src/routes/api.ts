export const api = (router: any) => {
  router
    .get("/api/v1/users");
  router
    .get("/api/v1/users/:id");
  router
    .post("/api/v1/users");
  router
    .patch("/api/v1/users/:id");
  router
    .delete("/api/v1/users/:id");
};
