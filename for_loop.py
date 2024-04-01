for (let i = 0; i < 256; i++) {
  if ((A ^ i) === B) {
      console.log(i);
      break;
    }
  }
