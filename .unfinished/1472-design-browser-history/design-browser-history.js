/**
 * @param {string} homepage
 */
var BrowserHistory = function (homepage) {
  this.home = homepage;
  this.history = [];
  this.index = -1;
};

/**
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function (url) {
  this.history = this.history.slice(0, this.index + 1);
  this.history.push(url);
  this.index = this.history.length - 1;
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function (steps) {
  if (steps <= 0) return this.history[this.index];

  const noHistory = this.index - steps < -1;
  this.index = noHistory ? -1 : this.index - steps;

  if (this.index === -1) return this.home;

  return this.history[this.index];
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function (steps) {
  if (steps <= 0) {
    if (this.index === -1) return this.home;
    return this.history[this.index];
  }

  if (this.index === -1 && this.history.length === 0) {
    return this.home;
  }

  const lastIndex = this.history.length - 1;
  const noHistory = this.index + steps > lastIndex;
  this.index = noHistory ? lastIndex : this.index + steps;

  return this.history[this.index];
};

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */

module.exports = BrowserHistory;
