import React, { useState } from "react";
import PhoneInput from 'react-phone-number-input/input'

function CanadaPhoneInput({value, setValue, className, id}) {

  return <PhoneInput id={id} country="CA" value={value} onChange={setValue} className={className} smartCaret={false} />;
}
export default CanadaPhoneInput;