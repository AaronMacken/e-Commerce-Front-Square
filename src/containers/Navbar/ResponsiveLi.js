import React from "react";
export default class ResponsiveLi extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDesktop: false
        };

        this.updatePredicate = this.updatePredicate.bind(this);
    }

    componentDidMount() {
        this.updatePredicate();
        window.addEventListener("resize", this.updatePredicate);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updatePredicate);
    }

    updatePredicate() {
        this.setState({ isDesktop: window.innerWidth > 991 });
    }

    render() {
        const isDesktop = this.state.isDesktop;

        return (
            <div>
                {isDesktop ? (
                    <li className="nav-item">
                        {this.props.children}
                    </li>
                ) : (
                        <li className="nav-item" data-toggle="collapse" data-target="#navbarNav">
                            {this.props.children}
                        </li>
                    )}
            </div>
        );
    }
}