import React from 'react'
import {
        convertToRaw,
        CompositeDecorator,
        ContentState,
        Editor,
        EditorState,
        Entity,
        RichUtils,
      } from 'draft-js';

      

class MyEditor extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = { editorState: EditorState.createEmpty() };
	    this.onChange = (editorState) => this.setState({ editorState });
	    this.handleKeyCommand = this.handleKeyCommand.bind(this);
	}
	handleKeyCommand(command) {
	    const newState = RichUtils.handleKeyCommand(this.state.editorState, command);
	    if (newState) {
	        this.onChange(newState);
	        return 'handled';
	    }
	    return 'not-handled';
	}
	_onBoldClick() {
	    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
	}

	render() {
	    return ( < div >
	        < button onClick = { this._onBoldClick.bind(this) } > Bold < /button> < Editor editorState = { this.state.editorState }
	        handleKeyCommand = { this.handleKeyCommand }
	        onChange = { this.onChange }
	        /> < /div>
	    );
	}
}


class LinkEditorExample extends React.Component {
    constructor(props) {
        super(props);

        const decorator = new CompositeDecorator([{
            strategy: findLinkEntities,
            component: Link,
        }, ]);

        this.state = {
            editorState: EditorState.createEmpty(decorator),
            showURLInput: false,
            urlValue: '',
        };

        this.focus = () => this.refs.editor.focus();
        this.onChange = (editorState) => this.setState({ editorState });
        this.logState = () => {
            const content = this.state.editorState.getCurrentContent();
            console.log(convertToRaw(content));
        };

        this.promptForLink = this._promptForLink.bind(this);
        this.onURLChange = (e) => this.setState({ urlValue: e.target.value });
        this.confirmLink = this._confirmLink.bind(this);
        this.onLinkInputKeyDown = this._onLinkInputKeyDown.bind(this);
        this.removeLink = this._removeLink.bind(this);
    }

    _promptForLink(e) {
        e.preventDefault();
        const { editorState } = this.state;
        const selection = editorState.getSelection();
        if (!selection.isCollapsed()) {
            this.setState({
                showURLInput: true,
                urlValue: '',
            }, () => {
                setTimeout(() => this.refs.url.focus(), 0);
            });
        }
    }

    _confirmLink(e) {
        e.preventDefault();
        const { editorState, urlValue } = this.state;
        const entityKey = Entity.create('LINK', 'MUTABLE', { url: urlValue });
        this.setState({
            editorState: RichUtils.toggleLink(
                editorState,
                editorState.getSelection(),
                entityKey
            ),
            showURLInput: false,
            urlValue: '',
        }, () => {
            setTimeout(() => this.refs.editor.focus(), 0);
        });
    }

    _onLinkInputKeyDown(e) {
        if (e.which === 13) {
            this._confirmLink(e);
        }
    }

    _removeLink(e) {
        e.preventDefault();
        const { editorState } = this.state;
        const selection = editorState.getSelection();
        if (!selection.isCollapsed()) {
            this.setState({
                editorState: RichUtils.toggleLink(editorState, selection, null),
            });
        }
    }

    render() {
        let urlInput;
        if (this.state.showURLInput) {
            urlInput = < div style = { styles.urlInputContainer } >
                < input
            onChange = { this.onURLChange }
            ref = "url"
            style = { styles.urlInput }
            type = "text"
            value = { this.state.urlValue }
            onKeyDown = { this.onLinkInputKeyDown }
            /> < button onMouseDown = { this.confirmLink } >
                Confirm < /button> < /div>;
        }

        return ( < div style = { styles.root } >
            < div style = {
                { marginBottom: 10 } } >
            Select some text, then use the buttons to add or remove links on the selected text. < /div> < div style = { styles.buttons } >
            < button onMouseDown = { this.promptForLink }
            style = {
                { marginRight: 10 } } >
            Add Link < /button> < button onMouseDown = { this.removeLink } >
            Remove Link < /button> < /div> { urlInput } < div style = { styles.editor }
            onClick = { this.focus } >
            < Editor editorState = { this.state.editorState }
            onChange = { this.onChange }
            placeholder = "Enter some text..."
            ref = "editor" / >
            < /div> < input onClick = { this.logState }
            style = { styles.button }
            type = "button"
            value = "Log State" / >
            < /div>
        );
    }
}

function findLinkEntities(contentBlock, callback) {
    contentBlock.findEntityRanges(
        (character) => {
            const entityKey = character.getEntity();
            return (
                entityKey !== null &&
                Entity.get(entityKey).getType() === 'LINK'
            );
        },
        callback
    );
}

const Link = (props) => {
    const { url } = Entity.get(props.entityKey).getData();
    return ( < a href = { url }
        style = { styles.link } > { props.children } < /a>
    );
};

const styles = {
    root: {
        fontFamily: '\'Georgia\', serif',
        padding: 20,
        width: 600,
    },
    buttons: {
        marginBottom: 10,
    },
    urlInputContainer: {
        marginBottom: 10,
    },
    urlInput: {
        fontFamily: '\'Georgia\', serif',
        marginRight: 10,
        padding: 3,
    },
    editor: {
        border: '1px solid #ccc',
        cursor: 'text',
        minHeight: 80,
        padding: 10,
    },
    button: {
        marginTop: 10,
        textAlign: 'center',
    },
    link: {
        color: '#3b5998',
        textDecoration: 'underline',
    },
};

export default LinkEditorExample