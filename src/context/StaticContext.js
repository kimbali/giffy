import React from 'react';

// El objecto de createContext seria el valor que tendria el context sin provider
// Cuando un componente intenta acceder al conexto pero no tiene provider
const Context = React.createContext({
    name: 'Kimbali',
    isAwesome: true
})

export default Context;