export class Android {
  public golpe(): number {
    return 10;
  }
  public energia(): number {
    return Math.random() * this.golpe() + this.golpe();
  }
}
