![fileable logo](./static/docs/logo.png)

# Fileable Component: Folder

[Fileable](https://github.com/isaacs/fileable) template component used to create folders.

Folders can contain files and other folders

```javascript
import File from 'fileable-component-file';
import Folder from 'fileable-component-folder';
const template = ()=><Folder name='project/'>
    <File name='empty_file'/>
    <Folder name='empty_folder'/>
</Folder>
```

## Attributes

### name

A folder must have a name attribute.

```javascript
const template = ()=><Folder name='empty_folder' />
```

### zip

Archives can be created with using the zip attribute

```javascript
const template = ()=><Folder name='project' zip>
    <File name='empty_file'/>
</Folder>
```

### extension

Extension appended to name.

```javascript
const template = ()=><Folder name='project' zip extension='.zip'>
    <File name='empty_file' />
</Folder>;
```
## API

### Table of contents
## Todo

- remove unnecessary dependencies
- add proper typescript typeings
- add 'src' attribute
