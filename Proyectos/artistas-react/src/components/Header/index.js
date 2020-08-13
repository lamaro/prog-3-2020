import React from 'react'

const Header = () => {
    const sayHi = 'Hi'
    const name = 'Mike'

    return (
        <header className="App-header">
            <div>{`${sayHi} ${name}!`}</div>
            <div>
                Menu
            </div>
            
        </header>
    )
}
export default Header
