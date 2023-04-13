'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {liked: false};
    }

    render() {
        if (this.state.liked) {
            return 'You have liked!';
        }

        return e(
            'button',
            {onClick: () => this.setState({liked: true})},
            'Click this to like the picture'
        );
    }
}

const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);
root.render(e(LikeButton));