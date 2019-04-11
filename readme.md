# Fileable Component: Folder

### Component:Folder

The Folder component represents a Folder;

```javascript
import {Folder} from 'fileable';
const template = ()=><Folder name='project/'/>
```

Folders can contain files and other folders

```javascript
const template = ()=><Folder name='project/'>
    <File name='empty_file'/>
    <Folder name='empty_folder'/>
</Folder>
```

#### Folder Attribute: name

Similar to File name.

A folder must have a name attribute.
In the future, we may recursively create a folder's name based on the hash of a folder's conetent.

#### Folder Attribute: zip

Archives can be created with using the zip attribute

```javascript
const template = ()=><Folder name='project' zip>
    <File name='empty_file'/>
</Folder>
```

#### Folder Attribute: extension

Similar to File extension.

```javascript
const template = ()=><Folder name='project' zip extension='.zip'>
    <File name='empty_file' />
</Folder>;
```
## API

### Table of contents
