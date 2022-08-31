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




/*
    PRACTICE 1

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
    PRACTICE 2

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
    PRACTICE 3

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

