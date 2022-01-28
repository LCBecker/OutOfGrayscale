const Palette = ({ currentColor, changeColor }) => {
  const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'turquoise', 'purple', 'pink', 'deeppink'];

  return (
    <div className="palette" style={{ display: 'flex' }}>
      {colors.map(color => {
        const isActive = currentColor === color;
        return (
          <div onClick={() => { changeColor(color) }}>
            <div className={`color-swatch ${color}`} style={{ backgroundColor: color, width: '50px', height: '50px', margin: '0px 5px', border: isActive ? '1px solid black' : null }}></div>
          </div>
        )
      })}
    </div>
  )
};

export default Palette;
