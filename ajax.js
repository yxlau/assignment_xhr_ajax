var $ = {
  ajax: function(opts) {
    var url = opts.url || '#';
    var data = JSON.stringify(opts.data) || '';
    var error = opts.error;
    var headers = opts.headers || "application/json";
    var method = opts.type || 'GET';
    var success = opts.success || function() {};
    var async = opts.async || true;
    var xhr = new XMLHttpRequest();

    xhr.open(method, url, async);
    xhr.addEventListener('error', opts.error);
    xhr.addEventListener('load', function() {
      opts.success(this.responseText);
    });
    xhr.setRequestHeader("Content-type", headers);
    xhr.send(data);
  },

  get: function(url, data, success, dataType) {
    var dataType = dataType ? 'application/' + dataType : null;
    var opts = {
      url: url,
      data: data,
      success: success,
      headers: dataType,
      type: 'GET'
    }
    this.ajax(opts);
  },

  post: function(url, data, success, dataType) {
    var dataType = dataType ? 'application/' + dataType : null;
    var opts = {
      url: url,
      data: data,
      success: success,
      headers: dataType,
      type: 'POST',
    }
    this.ajax(opts);
  }
}