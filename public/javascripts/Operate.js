function Operater() {
}

$(document).ready(function() {
  Operater.prototype.setElement = function(element) {
    this.element = element;
  };

  Operater.prototype.show = function() {
    $(this.element).show();
  };

  Operater.prototype.hide = function() {
    $(this.element).hide();
  };
});
