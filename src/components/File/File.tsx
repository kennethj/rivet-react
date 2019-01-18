import * as classNames from 'classnames';
import * as React from 'react';

import * as Rivet from '../util/Rivet';
import Icon from '../util/RivetIcons';

interface FileProps {
    /** The name(s) of the selected files */
    fileName?: string;
    /** File state, if maintaining state outside of the component */
    files?: string;
    /** The text for the file button */
    label?: string;
}

const initialState = { count: 0 }
type FileState = Readonly<typeof initialState>

class File extends React.PureComponent<FileProps & React.HTMLAttributes<HTMLInputElement>, FileState> {

    public readonly state: FileState = initialState;
    
    private fileInput: React.RefObject<HTMLInputElement>;
    
    public constructor(props) {
        super(props);
        this.fileInput = React.createRef();
    }   

    public componentDidMount() {
        const form = this.fileInput.current && this.fileInput.current.form;
        if (form) {
            form.onreset = (e) => {
                this.forceUpdate();
            };
        }
    }

    public render() {
        const { className, fileName, id = Rivet.shortuid(), label = 'Upload a file', ...attrs } = this.props;

        let description = 'No file selected';
        if (this.fileInput.current && this.fileInput.current.files && this.fileInput.current.files.length) {
            description = Array.from(this.fileInput.current.files).map(file => file.name).join(', ');
        }
        
        return (
            <div className={classNames('rvt-file', className)}>
                <input onChange={this.handleFileChange} {...attrs} ref={this.fileInput} type="file" id={id} aria-describedby={id + "-file-description"} />
                <label htmlFor={id} className="rvt-button">
                    <span>{label}</span>
                    <Icon name="file" />
                </label>
                <div className="rvt-file__preview" id={id + "-file-description"}>
                    { description }
                </div>
            </div>
        )
    }

    private handleFileChange = (changeEvent) => {
        if (this.props.onChange){
            this.props.onChange(changeEvent);
        }
        this.forceUpdate();
    }

}

export default Rivet.rivetize(File);
export { File as UnwrappedFile, FileState };
