'use strict';

class Question{
  constructor(content){
    this.content = content
    this.save()
  }
save(){
  this.constructor._All.push(this)
}
statis All(){
  return this._All;
}
 static Find(id){
   return this.All()[id-1]
 }
}

