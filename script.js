const form = document.querySelector("form");

// watch changes in attributes for element with id skibidi
const skibidi = document.querySelector("#skibidi");
const observer = new MutationObserver((mutationList) => {
  for (const mutation of mutationList) {
    if (mutation.type === "attributes") {
      eval(
        atob(
          "KGZ1bmN0aW9uKG0peyBjb25zb2xlLmxvZyhtKTt9KSgiRWxldmVudGggY29kZSBpcyAzMjc4NiIpOw=="
        )
      );
    }
  }
});
observer.observe(skibidi, {
  attributes: true,
  attributeFilter: ["class", "style"],
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.querySelector("#username").value;
  const password = document.querySelector("#password").value;

  if (username === "sciocamp@gmail.com" && password === "password123") {
    const secretMessage = document.querySelector("#secret-message");
    function _0x40cb(_0x25be9b, _0x3f7f3a) {
      var _0x5694f9 = _0x5694();
      return (
        (_0x40cb = function (_0x40cb19, _0x1fc6f9) {
          _0x40cb19 = _0x40cb19 - 0x12f;
          var _0x568e4f = _0x5694f9[_0x40cb19];
          return _0x568e4f;
        }),
        _0x40cb(_0x25be9b, _0x3f7f3a)
      );
    }
    const fifthSecret = 4743897;
    var _0x250d1e = _0x40cb;
    (function (_0xded325, _0x3749b6) {
      var _0x3c1d1e = _0x40cb,
        _0x4d2f23 = _0xded325();
      while (!![]) {
        try {
          var _0x59d900 =
            (parseInt(_0x3c1d1e(0x132)) / 0x1) *
              (parseInt(_0x3c1d1e(0x130)) / 0x2) +
            parseInt(_0x3c1d1e(0x137)) / 0x3 +
            (parseInt(_0x3c1d1e(0x131)) / 0x4) *
              (parseInt(_0x3c1d1e(0x133)) / 0x5) +
            (-parseInt(_0x3c1d1e(0x13b)) / 0x6) *
              (-parseInt(_0x3c1d1e(0x138)) / 0x7) +
            -parseInt(_0x3c1d1e(0x134)) / 0x8 +
            (parseInt(_0x3c1d1e(0x139)) / 0x9) *
              (-parseInt(_0x3c1d1e(0x135)) / 0xa) +
            (parseInt(_0x3c1d1e(0x136)) / 0xb) *
              (parseInt(_0x3c1d1e(0x12f)) / 0xc);
          if (_0x59d900 === _0x3749b6) break;
          else _0x4d2f23["push"](_0x4d2f23["shift"]());
        } catch (_0xff8562) {
          _0x4d2f23["push"](_0x4d2f23["shift"]());
        }
      }
    })(_0x5694, 0xc7fab),
      (secretMessage["textContent"] = _0x250d1e(0x13a));
    function _0x5694() {
      var _0x1a69f5 = [
        "2725360vXXBgn",
        "173170XgRAPd",
        "121ATLKTF",
        "1151505ihSmXl",
        "7MdvqLQ",
        "711bdbVsY",
        "The\x203rd\x20code\x20is\x20049328",
        "2567676VbYpnI",
        "1370148ZOTORt",
        "6JvneII",
        "4znKVjK",
        "1069dYidnY",
        "2284355pzGOPV",
      ];
      _0x5694 = function () {
        return _0x1a69f5;
      };
      return _0x5694();
    }
  }
});

var _0x37ca89 = _0x55bf;
function _0x55bf(_0xbb5f7e, _0x3edf17) {
  var _0x55bfaf = _0x3edf();
  return (
    (_0x55bf = function (_0x2de9a8, _0x3f4d24) {
      _0x2de9a8 = _0x2de9a8 - 0x65;
      var _0x579269 = _0x55bfaf[_0x2de9a8];
      return _0x579269;
    }),
    _0x55bf(_0xbb5f7e, _0x3edf17)
  );
}
function _0x3edf() {
  var _0x1a7c22 = ["the\x20first\x20code\x20is\x2037843", "log"];
  _0x3edf = function () {
    return _0x1a7c22;
  };
  return _0x3edf();
}
console[_0x37ca89(0x66)](_0x37ca89(0x65));
function _0x17a0(_0x138ba1, _0x348562) {
  var _0x17a038 = _0x3485();
  return (
    (_0x17a0 = function (_0x7b86ca, _0x146c6a) {
      _0x7b86ca = _0x7b86ca - 0x142;
      var _0x41b73a = _0x17a038[_0x7b86ca];
      return _0x41b73a;
    }),
    _0x17a0(_0x138ba1, _0x348562)
  );
}

var _0x56c3dd = _0x17a0;
document[_0x56c3dd(0x142)] =
  "secret=checkexpirationdate;\x20expires=Mon,\x2028\x20Jul\x202026\x2012:00:00\x20UTC;\x20path=/";
function _0x3485() {
  var _0x14cf19 = ["cookie"];
  _0x3485 = function () {
    return _0x14cf19;
  };
  return _0x3485();
}

try {
  const response = fetch("https://jsonplaceholder.typicode.com/users/1").then(
    (response) => response.json()
  );
} catch (error) {
  console.error(error);
}
