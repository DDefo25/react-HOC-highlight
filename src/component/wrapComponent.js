import React from "react"

export default function wrapComponent(WrapNew, WrapPopular) {
    return Component => class extends React.Component {
            render() {
                if (this.props.views < 100) {
                    return (
                        <WrapNew>
                            <Component {...this.props} />
                        </WrapNew>
                    )
                } else if (this.props.views > 1000) {
                    return (
                        <WrapPopular>
                            <Component {...this.props} />
                        </WrapPopular>
                    )
                } else {
                    return (
                        <Component {...this.props} />
                    )
                }

            }
    }
}