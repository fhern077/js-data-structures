class Stack {
  constructor() {
    this.storage = '';
  }
  push(val) {
    this.storage = this.storage + "&" + val;
  }
  pop() {
    const splitIndex = this.storage.lastIndexOf("&")
    const popOutput = this.storage.substring(splitIndex + 1, this.storage.length)
    this.storage = this.storage.substring(0, splitIndex)
    return popOutput;
  }
  size() {
    let length=0;
    for(const char of this.storage){
      if(char === '&'){
        length++;
      }
    }
    return length
  }
  echo() {
    console.log(this.storage)
  }
}

const driver = () => {
  const stacker = new Stack();
  stacker.push('hello');
  stacker.push('world');
  console.log( stacker.size())
  console.log(stacker.pop())
  console.log( stacker.size())
  console.log(stacker.pop())
}

driver();
