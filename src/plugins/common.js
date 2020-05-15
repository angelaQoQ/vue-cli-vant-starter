/**
 * 验证邮箱@符号前的长度是否符合
 * @param {字符串} str
 */
export const judgeEmailLength = (str) => {
  let index = str.indexOf('@')
  console.log(index);
  return index > 120
}
/**
 * 为了验证字符串格式，是否符合邮箱格式
 * @param {验证邮箱的值，字符串} value
 */
export const checkEmail = (value) => {
  // const reg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$");
  const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,16})$/g
  if (reg.test(value)) {
    return judgeEmailLength(value) ? false : true
  } else {
    return false
  }
  return reg.test(value)
}
/**
 * 校验字符串长度是否符合规则
 * @param {被校验的字符串} value
 * @param {最小长度} min
 * @param {最大长度} max
 */
export const checkLength = (value, { min, max }) => {
  return value.length > min && value.length < max
}



/**
 * 校验密码6-18位字母和数字组合
 * @param {string} value
 */
export const judgePassword = (value) => {
  const reg = new RegExp('^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z_]{6,18}$')
  return reg.test(value)
}

/**
 * getUserIP((ip) => {let newIP = ip})
 * @param {传参是一个函数，函数的参数是获取到的ip} onNewIP
 */
export const getUserIP = (onNewIP) => {
  let MyPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
  let pc = new MyPeerConnection({
    iceServers: []
  });
  let noop = () => {
  };
  let localIPs = {};
  let ipRegex = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g;
  let iterateIP = (ip) => {
    if (!localIPs[ip]) onNewIP(ip);
    localIPs[ip] = true;
  };
  pc.createDataChannel('');
  pc.createOffer().then((sdp) => {
    sdp.sdp.split('\n').forEach(function (line) {
      if (line.indexOf('candidate') < 0) return;
      line.match(ipRegex).forEach(iterateIP);
    });
    pc.setLocalDescription(sdp, noop, noop);
  }).catch((reason) => {
  });
  pc.onicecandidate = (ice) => {
    if (!ice || !ice.candidate || !ice.candidate.candidate || !ice.candidate.candidate.match(ipRegex)) return;
    ice.candidate.candidate.match(ipRegex).forEach(iterateIP);
  };
}

/**
 * 判断元素是否在可视区域内
 * * */
export const eleIsCanSee = (ele) => {
  const eleHeight = ele.offsetHeight
  const eleTop = ele.offsetTop
  const windowScrollTop = window.document.body.scrollTop || document.documentElement.scrollTop
  const windowHeight = window.innerHeight || document.body.clientHeight || document.documentElement.clientHeight

  if (((windowScrollTop + windowHeight) < (eleTop)) || (windowScrollTop > (eleHeight + windowHeight + eleTop))) {
    return false
  } else {
    return true
  }
  // if(((windowScrollTop+windowHeight) < (eleTop)) || (windowScrollTop > (eleHeight + windowHeight + eleTop))){
  //   return false
  // }else{
  //   return true
  // }


}

/**
 * 修改url 不刷新页面
 * @param  bookId  ,  chapterId
 * */
export const exchangeURI = (bookId, chapterId) => {
  let state = { title: '', url: window.location.href };
  history.pushState(state, '', bookId + '-' + chapterId);
}
// 返回 YY-MM-DD HH:MM:SS 格式的毫秒
export const getMiliSec = (timeStr) => {
  let a1 = timeStr.split(" ");
  let dateArr = a1[0].split("-");
  let timeArr = a1[1].split(":");

  let DateMS = Date.UTC(...dateArr);
  console.log(DateMS);

  let DayMS = (timeArr[0] * 3600 + timeArr[1] * 60 + timeArr[2]) * 1000;
  console.log(DayMS);

  return DateMS - 0 + DayMS - 0;
}
