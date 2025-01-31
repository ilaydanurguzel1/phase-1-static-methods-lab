class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  static sanitize(string){
    return string.replace( /[^A-Za-z0-9 '-]/g, '' );
  }
  static titleize(sentence){
    let wordsExcept=['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    let words = sentence.split(' ');
    let result = [];
    for(let i = 0; i < words.length; i++){
      if (i === 0){
        result.push(this.capitalize(words[i]))
      }
      else if(wordsExcept.includes(words[i])){
        result.push(words[i])
      }
      else {
        result.push(this.capitalize(words[i]))
      }
    }
    return result.join(" ");
  }


  }