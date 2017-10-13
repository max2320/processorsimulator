default export class Motherboard{
  constructor(headerSize = 255, processor = [], memory = [], device=[]){
    this.headerSize = headerSize;
    this.size = size;

    this.collectionPointer = 0;
    this.storageCollection = [];

    this.buildArray();
  }

  buildArray(){
    for(i = 0; i < size; i++){
      this.storageCollection.push(new Storage(this.headerSize));
    }
  }

  setPointer(pointer){
    if(pointer < 0 && pointer >= 24 ){
      console.error('Pointer not found')
      return;
    }

    this.collectionPointer = pointer;
  }

  write(value){
    return this.storageCollection[this.collectionPointer].write(value);
  }

  read(){
    return this.storageCollection[this.collectionPointer].read(value);
  }
}
