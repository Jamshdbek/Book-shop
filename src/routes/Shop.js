import React from "react";

import Books from "../components/Books";
import FormInput from "../components/FormInput";

function Shop() {
    return (
        <div className='shop-container'>
            <FormInput/>
            <Books/>
        </div>);
}

export default Shop;
