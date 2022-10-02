export class findAllRouter {
  constructor(findAllController, router) {
    this.findAll = findAllController;
    this.router = router;
  }

  route() {
    this.router.get("/", (_, res) => this.findAll.execute(_, res));
    return this.router;
  }
}
