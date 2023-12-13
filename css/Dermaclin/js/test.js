(function ($) {
    $(document).ready(function () {
        if ($(window).width() > 767) { $(".dropdown").hover(function () { $('.dropdown-menu', this).stop(true, true).slideDown("fast"); $(this).toggleClass('open'); }, function () { $('.dropdown-menu', this).stop(true, true).slideUp("fast"); $(this).toggleClass('open'); }); $(".dropdown-toggle").click(function () { return false; }); }
        $('#submit_enquiry_form').click(function () {
            if ($("#txt_name").val() === "" || $("#txt_number").val() === "" || $("#txt_email").val() === "") { $("#reg_error2").html('Please provide Your name/phone/email.'); $("#reg_error2").show(); return false; } else if (!validateEmail($("#txt_email").val())) { $("#reg_error2").html('You entered an invalid e-mail address'); $("#reg_error2").show(); return false; }
            $('#enquiry_form').submit();
        }); $('#submit_enquiry_form1').click(function () {
            if ($("#txt_name1").val() === "" || $("#txt_number1").val() === "" || $("#txt_email1").val() === "") { $("#reg_error21").html('Please provide Your name/phone/email.'); $("#reg_error21").show(); return false; } else if (!validateEmail($("#txt_email1").val())) { $("#reg_error21").html('You entered an invalid e-mail address'); $("#reg_error21").show(); return false; }
            $('#enquiry_form1').submit();
        });
    }); function validateEmail($email) { var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/; if (!emailReg.test($email)) { return false; } else { return true; } }
    function isNumberKey(evt) {
        var charCode = (evt.which) ? evt.which : event.keyCode
        if (charCode > 31 && (charCode < 48 || charCode > 57))
            return false; return true;
    }
})(jQuery);