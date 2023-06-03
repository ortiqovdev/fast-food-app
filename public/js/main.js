function raqamniTekshir() {
   var input = document.getElementById("raqam");
   if (input.value.length > 0 && parseInt(input.value) < 998) {
      input.value = "+998" + input.value;
   }
   var value = input.value.trim();

   if (value.length > 0) {
      var modifiedValue = value.replace(/(\d{3})(\d{2})(\d{3})(\d{2})(\d{2})/, "$1 $2 $3 $4 $5");
      input.value = modifiedValue;
   }
}