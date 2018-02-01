const numberOfBooks = (books, status) => {
   return books.filter(book => book.status === status).length
}

const select = function (value, options) {
   return options.fn()
      // splits the surrounded block at each line break (in this case each 'option' is an array item)
      .split('\n')
      .map(function (v) {
         // creates string with the 'value' argument inserted  
         var t = 'value="' + value + '"';
         // Uses RegEx to see if the new string is found in each array item
         // In this case if the original 'option' value matches the newly created one base on the value of the argument passed in.
         return RegExp(t).test(v) ? v.replace(t, t + ' selected') : v;
      })
      .join('\n');
}

module.exports = {numberOfBooks, select}