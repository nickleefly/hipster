
// here is where we actually enter characters into the
// text.
//
// A relatively small part of what a text editor actually does.

module.exports = function (doc, keys, cursor) {
  keys.on('keypress', function (ch, key) {

    if(key.shift && key.name.length === 1)
      key.name = key.name.toUpperCase()

    if     (key.name == 'delete')    doc.delete(1)
    else if(key.name == 'backspace') doc.delete(-1)
    else if(key.name == 'enter')     doc.newline()
    else if(key.name == 'tab')       doc.write('  ') 
    else if(' ' <= ch && ch <= '~')  doc.write(ch)
  })
}