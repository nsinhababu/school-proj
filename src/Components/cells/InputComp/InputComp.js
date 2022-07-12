const InputComp = ({ onChange, msg, name, label, hasEr, value }) => {
  return (
    <div className={`inp-cntnr ${hasEr ? 'error' : ''}`}>
      <label htmlFor={name}>{label}</label>
      <input
        onChange={(e) => {
          onChange(e);
        }}
        name={name}
        type='text'
        required
        value={value || ''}
      />
      <p className='msg'>{msg}</p>
    </div>
  );
};
export default InputComp;
