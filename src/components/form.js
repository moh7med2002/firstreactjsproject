import React from "react";

export default function Form(props){
    return(
        <form>
            <div>
                <label>room type</label>
                <select name="roomType" onChange={props.handleChange} >
                    <option value='all' selected>all</option>
                    <option value='triple'>triple</option>
                    <option value='family'>family</option>
                    <option value='double'>double</option>
                    <option value='single'>single</option>
                </select>
            </div>
            <div>
                <label>guests</label>
                <select name="guests" onChange={props.handleChange}>
                    <option value='1' selected>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                    <option value='6'>6</option>
                </select>
            </div>
            <div>
                <label>room price $ {props.data.roomPrice}</label>
                <input
                type='range'
                min='0'
                max='600'
                step='10'
                name="roomPrice"
                value={props.data.roomPrice}
                onChange={props.handleChange}
                />
            </div>
            <div>
                <label>room size</label>
                <input
                type='number'
                name="minSize"
                value={props.data.minSize}
                onChange={props.handleChange}
                />
                <input
                type='number'
                name="maxSize"
                value={props.data.maxSize}
                onChange={props.handleChange}
                />
            </div>
            <div>
                <div className="part">
                    <input
                    type='checkbox'
                    name="isBreakfast"
                    value={props.data.isBreakfast}
                    onChange={props.handleChange}
                    />
                    <label>Breakfast</label>
                </div>
                <div className="part">
                    <input
                    type='checkbox'
                    name="isPets"
                    value={props.data.isPets}
                    onChange={props.handleChange}
                    />
                    <label>Pets</label>
                </div>
            </div>
        </form>
    )
}