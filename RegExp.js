function isMobileNumber(phone) {
  let flag = false, message = ''
  let mobileReg = /^(?:\+?86)?1(?:3\d{3}|5[^4\D]\d{2}|8\d{3}|7(?:[01356789]\d{2}|4(?:0\d|1[0-2]|9\d))|9[189]\d{2}|6[567]\d{2}|4[579]\d{2})\d{6}$/

  if (strTrim(phone) === '') {
    message = '手机号码不能为空'
  }
  else if (strTrim(phone).length !== 11) {
    message = '请输入11位手机号码'
  }
  else if (!mobileReg.test(phone)) {
    message = '请输入有效的手机号码'
  }
  else {
    message = '手机号码格式正确'
    flag = true
  }
  return {
    flag,
    message
  }
}

console.log(isMobileNumber(''))