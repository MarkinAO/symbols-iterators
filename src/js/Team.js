export default class Team {
  constructor(...chars) {
    this.team = chars;
  }

  [Symbol.iterator]() {
    const { team } = this;
    let index = 0;
    return {
      next() {
        if (index < team.length) {
          return {
            value: team[index++],
            done: false,            
          };
        }
        return {
          value: undefined,
          done: true,
        };
      },
    };
  }
}
