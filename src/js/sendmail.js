const sendMail = function(form, phpPath) {
    var form_data = $(form).serialize();
    $.ajax({
        type: "POST",
        url: phpPath,
        data: form_data,
        success: function() {
          $.fancybox.open('<div class="message"><h2>Success</h2></div>');
        },
        error: function () {
          $.fancybox.open('<div class="message"><h2>Error</h2></div>');
        }
    });
};
export {sendMail};
