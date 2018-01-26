var caesar = caesar || (function () {
  let doStaff = (txt, desp, action) => {
    let replace = (function () {
      let abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
        'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
      ];
      debugger
      let l = abc.length;
      return function (c) {
        let i = abc.indexOf(c.toLowerCase());
        if (i != -1) {
          let pos = i;
          if (action) {
            // forward
            pos += desp;
            pos -= (pos >= l) ? l : 0;
          } else {
            // backward
            pos -= desp;
            pos += (pos < 0) ? l : 0;
          }
          return abc[pos];
        }
        return c;
      };
    })();
    let re = (/([a-z])/ig);
    return String(txt).replace(re, function (match) {
      return replace(match);
    });
  };

  return {
    encode: function (txt, desp) {
      return doStaff(txt, desp, true);
    },
    decode: function (txt, desp) {
      return doStaff(txt, desp, false);
    }
  };
})();


function codificar() {
  document.getElementById("resultado").innerHTML = caesar.encode(document.getElementById("cadena").value, 3);
}

function decodificar() {
  document.getElementById("resultado").innerHTML = caesar.decode(document.getElementById("cadena").value, 3);
}