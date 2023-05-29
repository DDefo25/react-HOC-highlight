import React from "react"

export default function wrapComponent(...options) {
    return Component => class extends React.Component {
        render() {
            let i = 0;
            do {
                const { WrapComponent, value, range: {min, max} } = options[i];
                if ( this.props[value] >= min && this.props[value] < max ) {
                    return <WrapComponent>
                            <Component {...this.props}/>
                        </WrapComponent>
                }
            } while (++i < options.length)
            return <Component {...this.props}/>
        }
    }
}