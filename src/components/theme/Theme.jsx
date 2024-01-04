function Theme({Icon,mode,setTheme}) {
    const selectThemeHandler = () => {
        // if (mode === 'system') {
        //     localStorage.removeItem('theme')
        //     setTheme({Icon,mode})
        //     return;
        // }
        localStorage.theme = `${mode}`
        setTheme({Icon,mode})
    }
  return (
    <li className={`${localStorage.theme === mode && "text-sky-500"} cursor-pointer my-2 w-full flex items-center justify-start`} onClick={selectThemeHandler}>
       <Icon className="mr-4"/>        
       <span>{mode}</span>
    </li>
  )
}

export default Theme