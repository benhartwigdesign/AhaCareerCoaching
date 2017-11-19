(function() {
  var createEmbedFrame;

  createEmbedFrame = function() {
    var currentSlug, iframe, listeners, setHeight, target, uid, uriEmbedded, uriOriginal, uriOriginalNoProtocol;
    uid = "JSFEMB_" + (~~(new Date().getTime() / 86400000));
    uriOriginal = "http://jsfiddle.net/pintu31/hMS6Y/1/embed/";
    uriOriginalNoProtocol = uriOriginal.split("//").pop();
    uriEmbedded = "http://jsfiddle.net/pintu31/hMS6Y/1/embedded/";
    currentSlug = "hMS6Y";
    target = document.querySelector("script[src*='" + uriOriginalNoProtocol + "']");
    iframe = document.createElement("iframe");
    iframe.src = uriEmbedded;
    iframe.id = uid;
    iframe.width = "100%";
    iframe.height = "0";
    iframe.frameBorder = "0";
    iframe.allowtransparency = true;
    iframe.sandbox = "allow-forms allow-popups allow-scripts allow-same-origin";
    target.parentNode.insertBefore(iframe, target.nextSibling);
    setHeight = function(data) {
      if (data.slug === currentSlug) {
        return iframe.height = data.height;
      }
    };
    listeners = (function(_this) {
      return function(event) {
        var data, eventName;
        eventName = event.data[0];
        data = event.data[1];
        switch (eventName) {
          case "embed":
            return setHeight(data);
        }
      };
    })(this);
    return window.addEventListener("message", listeners, false);
  };

  setTimeout(createEmbedFrame, 5);

}).call(this);
