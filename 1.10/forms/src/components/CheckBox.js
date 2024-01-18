const CheckBox=({isCheck,handleChange})=>{

    return(
        <div className="checkbox">
            <input onChange={handleChange} type="checkbox" id="checkbox" checked={isCheck}/>
            <label htmlFor="checkbox">I agree to the terms and conditions</label>
        </div>
    )
}

export default CheckBox;