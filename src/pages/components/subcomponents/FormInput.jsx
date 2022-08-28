const label_classes = "text-black rounded-lg w-full p-2 bg-slate-100 ring-2 ring-slate-300 focus:outline-none focus:border-orange-500 focus:ring-2 focus:rounded-lg focus:ring-orange-500 disabled:ring-slate-400 disabled:ring-2";

const FormInput = (props) => {

    return(
        <div className="block py-3">
            <label className="block py-2">{props.label}</label>
            <input name={props.name} type={props.text} placeholder={props.placeholder} disabled={props.disabled} className={label_classes} value={props.value} onChange={props.onChange} required={props.required} errormessages={props.errormessages}/>
            <span>{props.errormessages}</span>
        </div>
    );
}

export default FormInput;
