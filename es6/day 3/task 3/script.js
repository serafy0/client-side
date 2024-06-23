
const object = {
    *[Symbol.iterator]() {
      yield "mohamed";
      yield "mohsen";
      yield "ali";
    },
  };

  console.log(object)

  for(ele of object){
    console.log(ele)
  }