// @ts-check
import React, { Component } from 'react'
import PropTypes from 'prop-types'
// travis demands that test be
// "test": "echo 'no tests yet'",
// instead of test: jest


interface OnImagesLoadedProp {
    onLoaded?: () => void;
    onTimeout?: () => void;
    timeout?: number
    delay?: number
}

const truthy = (el: any) => ![false, undefined, null].includes(el)

export default class OnImagesLoaded extends Component<OnImagesLoadedProp> {
    constructor(props: OnImagesLoadedProp) {
        super(props)
        this.state = {
            loaded: false,
            loadCounter: 0,
            imageCount: 0
        }
        this._onLoadEvent = this._onLoadEvent.bind(this)
    }

    timingSetup() {
        // @ts-ignore
        const { onWillMount, delay, timeout = 5000 } = this.props
        onWillMount ? onWillMount() : null
        let [tempTimeout, tempDelay] = [timeout, delay]
        tempTimeout = truthy(tempTimeout) ? tempTimeout : 7000
        // @ts-ignore
        this._delay = truthy(tempDelay) ? tempDelay : 0
        // @ts-ignore
        this._timeout = Math.max(tempTimeout, this._delay)
    }

    componentWillUnmount() {
        // @ts-ignore
        this.mounted = false
        // @ts-ignore
        this._imgs.length > 0 ? this._removeImageEventListeners() : null
    }

    componentDidMount() {
        // @ts-ignore
        const { onLoaded, onTimeout, onDidMount } = this.props
        this.timingSetup()
        // @ts-ignore
        this.mounted = true
        // @ts-ignore
        this._imgs = this.imageLoad.getElementsByTagName('img')
        // @ts-ignore
        if (this._imgs.length === 0) {
            if (onLoaded) {
                onLoaded()
            } else if (onTimeout) {
                onTimeout()
            }
        } else {
            onDidMount ? onDidMount() : null
            this._addImageEventListeners()
            this._setOnTimeoutEvent()
        }
    }

    _addImageEventListeners() {
        // @ts-ignore
        this.setState({ imageCount: this._imgs.length }, () => {
            // @ts-ignore
            for (let i = 0; i < this._imgs.length; i++) {
                // @ts-ignore
                this._imgs[i].addEventListener('load', this._onLoadEvent)
            }
        })
    }

    _removeImageEventListeners() {
        // @ts-ignore
        for (let i = 0; i < this._imgs.length; i++) {
            // @ts-ignore
            this._imgs[i].removeEventListener('load', this._onLoadEvent)
        }
    }

    _setOnTimeoutEvent() {
        setTimeout(() => {
            this._hasTimedOut ? this._runOnTimeoutFunction() : null
            // @ts-ignore
        }, this._timeout)
    }

    _runOnTimeoutFunction() {
        // @ts-ignore
        if (this.mounted) {
            // @ts-ignore
            const { onTimeout, onLoaded } = this.props
            this.setState({ loaded: true }, () => {
                if (onTimeout) {
                    onTimeout()
                } else if (onLoaded) {
                    onLoaded()
                }
            })
        }
    }

    _onLoadEvent() {
        // @ts-ignore
        if (this.mounted) {
            // @ts-ignore
            this.setState({ loadCounter: this.state.loadCounter + 1 }, () => {
                setTimeout(() => {
                    this._hasBeenFullyAndProperlyLoaded ? this._runOnLoadFunction() : null
                    // @ts-ignore
                }, this._delay)
            })
        }
    }

    get _hasBeenFullyAndProperlyLoaded() {
        // @ts-ignore
        const { loadCounter, imageCount, loaded } = this.state
        // @ts-ignore
        return this.mounted && (loadCounter >= imageCount) && !loaded
    }

    get _hasTimedOut() {
        // @ts-ignore
        return this.mounted && !this.state.loaded
    }

    get _hasDefinedClassName() {
        // @ts-ignore
        const { classNameOnLoaded, classNameOnMount, className } = this.props
        return !!(classNameOnLoaded || classNameOnMount || className)
    }

    _runOnLoadFunction() {
        // @ts-ignore
        if (this.mounted) {
            // @ts-ignore
            const { onLoaded } = this.props
            this.setState({ loaded: true, timedOut: false }, () => {
                onLoaded ? onLoaded() : null
            })
        }
    }

    _depreciatedClassNameHandler() {
        // @ts-ignore
        const { className, classNameOnLoaded, classNameOnMount } = this.props
        if (className) {
            return className
            // @ts-ignore
        } else if (!this.state.loaded) {
            return classNameOnMount
        } else {
            return classNameOnLoaded
        }
    }

    render() {
        // @ts-ignore
        if (this.imageLoad && this._hasDefinedClassName) {
            // @ts-ignore
            this.imageLoad.className = this._depreciatedClassNameHandler()
        }
        return (
            <div>
                {/* @ts-ignore */}
                {this.state.loaded ? null : this.props.placeholder}
                {/* @ts-ignore */}
                <div ref={(ctx) => { this.imageLoad = ctx }}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

