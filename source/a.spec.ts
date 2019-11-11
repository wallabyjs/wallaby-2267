interface Test {
  block?: {
    height?: {
      weight?: {
        foo?: string;
      }
    }
  }
}

describe('my test', () => {
  it('should pass', () => {
    let t: Test = {};
    console.log(t.block?.height?.weight.foo);
  });
});