Array.prototype.toTwenty = function(){};
Array.prototype.toForty = function(){};
Array.prototype.toOneThousand = function(){};


Array.prototype.toTwenty = function(){
  
  for(var loop=1; loop<=20; loop++){
    this.push(loop);
  }
  return this;
};

Array.prototype.toForty = function(){
  
  for(var loop = 1; loop<=20; loop++){
    this.push(loop*2);
  }
  return this;
};

Array.prototype.toOneThousand = function(){
  for(var loop =1; loop<=100; loop++){
    this.push(loop*10);
  }
  return this;
};

Array.prototype.search = function(number){
  var first = 0;
  var last = this.length-1;
  var n = this.length;
  var output = {count:0, index:-1, length:n};
  
  while(first<=last){
    
    var mid = Math.floor((first+last)/2);
    
    if(this[first]==number){
      
      output.index=first;
      return output;
      
    }else if(this[last]==number){
      
      output.index=last;
      return output;
      
    }else if(this[mid]==number){
      
      output.index = mid;
      return output;
      
    }else if(this[mid]<number){
      
      first = mid+1;
      last -=1;
      
    }else{
      
      last = mid -1;
      first +=1;
      
    }
    
    output.count ++;
    
  }
  
  return output;
  
};

module.exports = {Array};

