exports.$ = (id) => {
  return document.getElementById(id)
}

exports.convertDuration = time => {
  // 没有考虑超过1小时的情况
  const minutes = "0" + Math.floor(time / 60)
  const seconds = "0" + Math.floor(time - minutes * 60)
  return minutes.substr(-2) + ":" + seconds.substr(-2)
}
