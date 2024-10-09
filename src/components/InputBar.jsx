import "./InputBar.css"

function InputBar() {
  return (
    <div className="inputBar__container">
        <div className="inputBar__wrapper">
            <input 
                style={{
                    marginLeft : '8px',
                    marginRight : '8px',
                    maxWidth: '500px'
                }}
                className="inputBar"
            />
        </div>
      
    </div>
  );
}

export default InputBar;
