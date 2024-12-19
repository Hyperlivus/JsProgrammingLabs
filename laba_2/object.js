const fn = () => {
    const constObject = { name: 'Constant Name' };

    let variableObject = { name: 'Variable Name' };

    constObject.name = 'New Constant Name';
    variableObject.name = 'New Variable Name';

    variableObject = { name: 'Another Variable Name' };

    console.log('constObject:', constObject);
    console.log('variableObject:', variableObject);
};


const createUser = (name, city) => {
    return { name, city };
};

fn();

const user = createUser('Vitaliy Klichko', 'Kiev');
console.log(user);
