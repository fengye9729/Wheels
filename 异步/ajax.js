var result = ''
var url = ''

var XHR = new XMLHttpRequest()

XHR.open('GET', url, true)
XHR.send()

XHR.onreadystatechange = function() {
  if(XHR.readyState == 4 && XHR.status == 200) {
    result = XHR.response
    console.log(result)
  }
}