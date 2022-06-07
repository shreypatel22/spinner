const spinner = () => {

  let spinArray = ['|', "/", "-", "\\", '|'];
  let time = 0;

  for (let spin of spinArray) {
  setTimeout(() => {
    process.stdout.write(`\r${spin} `);
  }, time)
  time += 200;
  }

  setTimeout(() => {
  console.log("");
  }, time);

}

spinner();
