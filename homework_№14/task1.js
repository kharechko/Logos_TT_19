


let moveForm = document.forms['move'];

moveForm.clk.addEventListener('click', function() {
      let _val =  moveForm.primary.value;
      if(_val == '')  false ;
      else moveForm.res.value = _val, moveForm.primary.value = ''; 
})




let plc_holder = document.forms['plc_holder'];


plc_holder.scd_inpt.addEventListener('blur', function() {
    let txt = plc_holder.scd_inpt.value;
    if(txt == '')  false ;
    else {
    plc_holder.scd_inpt.placeholder = plc_holder.scd_inpt.value;
    plc_holder.scd_inpt.value = '';
    }
})

