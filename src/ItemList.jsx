// import React, { useState } from 'react';

// function Item({ name, ispPacked = false }) {
//     return (
//         <li>
//             {name} {ispPacked && '✓'}
//         </li>
//     );
// }

// export default function ItemList() {
//     const [keyword, setKeyword] = useState('');

//     const items = [
//         { name: "Sunglass", ispPacked: false },
//         { name: "Swimming suit", ispPacked: true },
//         { name: "Sunblock", ispPacked: true },
//         { name: "Sunscreen", ispPacked: true },
//     ];

//     const filterList = items.filter(i => i.name.toLowerCase().includes(keyword.toLowerCase()));
//     const itemList = filterList.map(i => (
//         <Item key={i.name} name={i.name} ispPacked={i.ispPacked} />
//     ));
    
//     return (
//         <div>
//             <input 
//                 type="text" 
//                 value={keyword} 
//                 onChange={e => setKeyword(e.target.value)} 
//                 placeholder="Search..."
//             />
//             <ul>
//                 {itemList}
//             </ul>
//         </div>
//     );
// }




import React, { useState } from 'react';

function Item({ name, ispPacked = false }) {
    return (
        <li>
            {name} {ispPacked && '✓'}
        </li>
    );
}

export default function ItemList() {
    const [keyword, setKeyword] = useState('');

    const items = [
        { name: "Sunglass", ispPacked: false },
        { name: "Swimming suit", ispPacked: true },
        { name: "Sunblock", ispPacked: true },
        { name: "Sunscreen", ispPacked: true },
        { name: "Runscreen", ispPacked: true },
        { name: "Gaunscreen", ispPacked: true },
    ];

    const filterList = items.filter(i => 
        i.name.toLowerCase().includes(keyword.toLowerCase())
    );

    const itemList = filterList.map(i => (
        <Item key={i.name} name={i.name} ispPacked={i.ispPacked} />
    ));
    
    return (
        <div>
            <input 
                type="text" 
                value={keyword} 
                onChange={e => setKeyword(e.target.value)} 
                placeholder="Search..."
            />
            <ul>
                {itemList}
            </ul>
        </div>
    );
}
