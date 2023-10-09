if(document.querySelector("#phone")!=null){
	var inputPhone = document.querySelector("#phone");
    window.intlTelInput(inputPhone, {

      autoHideDialCode: false,
      initialCountry: "sa",
      separateDialCode: true,
      utilsScript: "../assets/plugins/intl-tel-input-master/utils.js",
    });
}
if(document.querySelector("#mobile")!=null){
	var inputMobile = document.querySelector("#mobile");
	window.intlTelInput(inputMobile, {
		autoHideDialCode: false,
		initialCountry: "sa",
		separateDialCode: true,
		utilsScript: "../assets/plugins/intl-tel-input-master/utils.js",
	});
}