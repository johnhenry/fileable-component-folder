const Folder = require('..');
const tape = require('tape');
tape('Fileable Component Test: Folder', async ({deepEqual, end}) => {
    const iterator = Folder({name:'test-folder'});
    deepEqual(
        (await iterator.next()).value
        , {
            directive: 'FOLDER'
            , name: 'test-folder'
            , folder_context: ''
        },
        'default should be created')
    end();
});
