export class findByIdRouter {
  constructor(findByIdController, router) {
    this.findById = findByIdController;
    this.router = router;
  }

  route() {
    this.router.get("/findById/:id", (req, res) =>
      this.findById.execute(req, res)
    );
    return this.router;
  }
}
