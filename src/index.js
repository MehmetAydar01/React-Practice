import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';


const MyButton = ({ count, onClick }) => {
    return (
        <button onClick={onClick}>
            Clicked {count} times
        </button>
    );
};

const MyApp = () => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <h1>Counters that update together</h1>
            <MyButton count={count} onClick={handleClick}/>
            <MyButton count={count}  onClick={handleClick}/>
        </div>
    )

};


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <MyApp />
)




/*
    PRACTICE-1

    // Creating and nesting components --> Componentleri Oluşturma ve İç İçe Yerleştirme

    import React from 'react';
    import ReactDOM from 'react-dom/client';

    const MyButton = () => {
        return (
            <button>I'm a button</button>
        )
    }

    const MyApp = () => {
        return (
            <div>
                <h1>Welcome to my app</h1>
                <MyButton />
            </div>
        )
    }

    const root = ReactDOM.createRoot(document.getElementById('root'))
    root.render(
        <MyApp />
    )
*/



/*
    PRACTICE-2

    // Writing markup with JSX --> JSX İle Yazma   &&   Adding styles --> Stil Ekleme

    import React from 'react';
    import ReactDOM from 'react-dom/client';
    import './css/style.css';

    const user = {
        name: 'Hedy Lamarr',
        imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
        imageSize: 90
    }

    const Profile = () => {
        return (
            <>
                <h1 style={{color:"purple"}}>{user.name}</h1>
                <img
                    className='avatar'
                    src={user.imageUrl}
                    alt={'Photo of' + user.name}
                    style={{
                        width: user.imageSize,
                        height: user.imageSize
                    }}
                />
            </>
        )
    }


    const root = ReactDOM.createRoot(document.getElementById('root'))
    root.render(
        <Profile />
    )
*/



/*
    PRACTICE-3

    // Rendering lists --> Liste Oluşturma

    import React from 'react';
    import ReactDOM from 'react-dom/client';

    const products = [
        {title: 'Cabbage', isFruit: false, id:1},
        {title: 'Garlic', isFruit: false, id:2},
        {title: 'Apple', isFruit: true, id: 3}
    ];

    const ShoppingList = () => {

        const listItems = products.map((product) => {
            return (
                <li
                    key={product.id}
                    style={{
                        color: product.isFruit ? 'magenta' : 'darkgreen'
                    }}
                >
                    {product.title}
                </li>
            )
        });

        return (
            <ul>
                {listItems}
            </ul>
        )

    }


    const root = ReactDOM.createRoot(document.getElementById('root'))
    root.render(
        <ShoppingList />
    )
*/



/*
    PRACTICE-4

    // Responding to events --> Olaylara Yanıt Vermek

    import React from 'react';
    import ReactDOM from 'react-dom/client';


    const MyButton = () => {

        const handleClick = () => {
            alert("You clicked me")
        }

        return (
            <button onClick={handleClick}>Click Me</button>
        )

    }


    const root = ReactDOM.createRoot(document.getElementById('root'))
    root.render(
        <MyButton />
    )
*/



/*
    PRACTICE-5 --> Using Hooks

    // useState Hook --> Çoğu zaman, Componentimizin bazı bilgileri "hatırlamasını" ve "görüntülemesini" isteriz. Örneğin, bir düğmenin kaç kez tıklandığını saymak isteyebiliriz. Bunu yapmak için componentimize durum(state) eklemeliyiz.


    import React, { useState } from 'react';
    import ReactDOM from 'react-dom/client';


    const MyButton = () => {
        const [count, setCount] = useState(0);
        const [count1, setCount1] = useState(0);

        const Increase = () => {
            setCount(count + 1);
        };

        const Decrease = () => {
            setCount1(count1 - 1);
        };

        return (
            <div>
                <button onClick={Increase}> Increase count:</button>
                <p>{count}</p>
                <button onClick={Decrease}> Decrease count1:</button>
                <p>{count1}</p>
            </div>
        )
    };


    const root = ReactDOM.createRoot(document.getElementById('root'))
    root.render(
        <MyButton />
    )
*/



/*
    PRACTICE-6

    import React, { useState } from 'react';
    import ReactDOM from 'react-dom/client';


    const MyButton = () => {
        const [count, setCount] = useState(0);

        const handleClick = () => {
            setCount(count + 1)
        }

        return (
            <button onClick={handleClick}>
                Clicked {count} times
            </button>
        );
    };

    const MyApp = () => {
        return (
            <div>
                <h1>Counters that update separately</h1>
                <MyButton />
                <MyButton />
            </div>
        );
    };


    const root = ReactDOM.createRoot(document.getElementById('root'))
    root.render(
        <MyApp />
    )
*/



/*
    PRACTICE-7

    import React, { useState } from 'react';
    import ReactDOM from 'react-dom/client';


    const MyButton = ({ count, onClick }) => {
        return (
            <button onClick={onClick}>
                Clicked {count} times
            </button>
        );
    };

    const MyApp = () => {
        const [count, setCount] = useState(0);

        const handleClick = () => {
            setCount(count + 1);
        }

        return (
            <div>
                <h1>Counters that update together</h1>
                <MyButton count={count} onClick={handleClick}/>
                <MyButton count={count}  onClick={handleClick}/>
            </div>
        )

    };


    const root = ReactDOM.createRoot(document.getElementById('root'))
    root.render(
        <MyApp />
    )
*/