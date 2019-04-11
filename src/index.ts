import { join } from 'path';
import { createComponent } from 'fileable-components';
import JSZip from 'jszip';
const Folder = async function* ({
    name,
    extension,
    folder_context = '',
    template_context = '',
    zip,
    children: descendants
}) {
    if (!name) {
        throw new Error('Folder must have name');
    }
    const children = Array.isArray(descendants)
        ? descendants
        : descendants
            ? [descendants]
            : [];
    if (extension) {
        name += extension;
    }
    if (zip) {
        const archiveFile = new JSZip();
        for (const child of children) {
            const { props } = child;
            for await (const {
                directive,
                target,
                name,
                append,
                content,
                folder_context,
                mode
            } of child.type({
                ...props,
                incremental:false,
                folder_context: name,
                template_context
            })) {
                switch (directive) {
                    case 'FILE': {
                        archiveFile.file(join(folder_context, name), content);
                    } break;
                    case 'FOLDER': {
                        archiveFile.folder(join(folder_context, name));
                    } break;
                }
            }
        }
        const content = await archiveFile.generateAsync({
            type: 'nodebuffer'
        });
        yield {
            directive: 'FILE',
            name,
            folder_context,
            content: content
        };
        return;
    } else {
        yield {
            directive: 'FOLDER',
            name,
            folder_context
        };
        for (const child of children) {
            const { props } = child;
            yield* child.type({
                ...props,
                folder_context: `${folder_context}/${name}`,
                template_context
            });
        }
    }
};
export default createComponent(Folder);
