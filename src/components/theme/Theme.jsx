function Theme({Icon,mode,setTheme}) {
    const selectThemeHandler = () => {
        if (mode === 'system') {
            localStorage.removeItem('theme')
            setTheme('')
            return;
        }
        localStorage.theme = `${mode}`
        setTheme(mode)
    }
  return (
    <li  onClick={selectThemeHandler}>
       <Icon className="text-sky-500"/>        
       <span>{mode}</span>
    </li>
  )
}

export default Theme